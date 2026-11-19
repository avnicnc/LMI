# Circular Animation Performance & UX Fixes

Documentation of code changes applied to the **Rolling Circle Animation** (`.main-circle` / `.round_model`) in the `monster-studio` child theme.

---

## 1. Summary of Issues

| Issue | Previous Behavior | Fixed Behavior |
| :--- | :--- | :--- |
| **Scroll Trigger Threshold** | Required scrolling past 50% of the element height (`outerHeight() * 0.5`). | Triggers immediately when entering the viewport (`offset().top + 50`). |
| **Pointer Lockout Delay** | Delayed enabling `pointer-events: all` by **2,200ms** (2.2 seconds). | Reduced to **350ms**, matching the CSS transition duration. |
| **Initial Load Trigger** | Only listened to `$(window).scroll()`. If loaded in view, remained hidden. | Bound to `scroll`, `resize`, and executed on `document.ready`. |
| **Hover Queue Delay** | Each of the 9 slices had `.delay(100).queue(...)` and `.finish()`. | Removed delay queue; slice image & text swap instantly on hover. |
| **CSS Transition Timing** | Slow `0.6s all ease` with `0.1s` delay. | Optimized `0.35s` using `cubic-bezier(0.25, 1, 0.5, 1)` with `0s` delay. |
| **Accompanying Textbox** | `1,000ms` delay before sliding in. | Reduced to `100ms` with snappier CSS transition (`0.35s`, delay `0.05s`). |

---

## 2. File Changes

### File 1: `wp-content/themes/monster-studio/js/script.js`

#### Change A: Viewport Scroll Detection (Lines ~142–172)

**Before:**
```javascript
$(window).scroll(function () {
  $('.main-circle').each(function (i) {
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.5);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('come-in');
        setTimeout(() => {
            $(this).addClass('active_pointer');
        }, 2200);
      }
  });

  $('.round_model .section-content .TEXTBOX').each(function (i) {
    var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.5);
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
       setTimeout(() => {
         $(this).addClass('first_animi');
         $(this).addClass('come-in');
       }, 1000);
    }
  });    
});
```

**After:**
```javascript
function checkCircleAnimation() {
  $('.main-circle').each(function () {
      var $el = $(this);
      if ($el.hasClass('come-in')) return;
      var bottom_of_object = $el.offset().top + 50;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $el.addClass('come-in');
        setTimeout(() => {
            $el.addClass('active_pointer');
        }, 350);
      }
  });

  $('.round_model .section-content .TEXTBOX').each(function () {
    var $el = $(this);
    if ($el.hasClass('come-in')) return;
    var bottom_of_object = $el.offset().top + 50;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
       setTimeout(() => {
         $el.addClass('first_animi come-in');
       }, 100);
    }
  });
}

$(window).on('scroll resize', checkCircleAnimation);
$(document).ready(function() {
  checkCircleAnimation();
});
```

---

#### Change B: Slices 1–9 Hover Handlers (Lines ~11–66)

**Before (repeated for `.1` through `.9`):**
```javascript
jQuery(".main-circle .1").hover(function(){    
  jQuery(this).delay(100).queue(function(){  
    jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-1.png)");
    jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
    jQuery(".TEXTBOX").addClass("hidden");
    jQuery(".1.TEXTBOX").removeClass("hidden");
  });      
}, function(){
  jQuery(this).finish();
});
```

**After:**
```javascript
jQuery(".main-circle .1").hover(function(){    
  jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-1.png)");
  jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
  jQuery(".TEXTBOX").addClass("hidden");
  jQuery(".1.TEXTBOX").removeClass("hidden");
});
```

---

### File 2: `wp-content/themes/monster-studio/css/screen.css`

#### Transition & Timing Properties (Lines ~75–80)

**Before:**
```css
.main-circle {
  transform: translateX(-50%) rotate(-360deg);
  -webkit-transform: translateX(-50%) rotate(-360deg);
  -o-transform: translateX(-50%) rotate(-360deg);
  -moz-transform: translateX(-50%) rotate(-360deg);
  transition: 0.6s all ease;
  -webkit-transition: 0.6s all ease;
  -o-transition: 0.6s all ease;
  -moz-transition: 0.6s all ease;
  transition-delay: 0.1s;
  pointer-events: none;
  opacity: 0;
}

.main-circle.come-in {
  transform: translateX(0%) rotate(0deg);
  -webkit-transform: translateX(0%) rotate(0deg);
  -o-transform: translateX(0%) rotate(0deg);
  -moz-transform: translateX(0%) rotate(0deg);
  opacity: 1;
}

.main-circle.active_pointer {
  pointer-events: all;
}

.round_model .section-content .TEXTBOX.first_animi {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: 0.6s all ease;
  -webkit-transition: 0.6s all ease;
  -moz-transition: 0.6s all ease;
  -o-transition: 0.6s all ease;
  transform: translateX(20%);
  -webkit-transform: translateX(20%);
  -moz-transform: translateX(20%);
  -o-transform: translateX(20%);
  transition-delay: 0.2s;
}

.round_model .section-content .TEXTBOX.first_animi.come-in {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -o-transform: translateX(0);
}
```

**After:**
```css
.main-circle {
  transform: translateX(-50%) rotate(-360deg);
  -webkit-transform: translateX(-50%) rotate(-360deg);
  -o-transform: translateX(-50%) rotate(-360deg);
  -moz-transform: translateX(-50%) rotate(-360deg);
  transition: 0.35s transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -webkit-transition: 0.35s -webkit-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -o-transition: 0.35s -o-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -moz-transition: 0.35s -moz-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  transition-delay: 0s;
  pointer-events: none;
  opacity: 0;
}

.main-circle.come-in {
  transform: translateX(0%) rotate(0deg);
  -webkit-transform: translateX(0%) rotate(0deg);
  -o-transform: translateX(0%) rotate(0deg);
  -moz-transform: translateX(0%) rotate(0deg);
  opacity: 1;
}

.main-circle.active_pointer {
  pointer-events: all;
}

.round_model .section-content .TEXTBOX.first_animi {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: 0.35s transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -webkit-transition: 0.35s -webkit-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -moz-transition: 0.35s -moz-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  -o-transition: 0.35s -o-transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease;
  transform: translateX(20%);
  -webkit-transform: translateX(20%);
  -moz-transform: translateX(20%);
  -o-transform: translateX(20%);
  transition-delay: 0.05s;
}

.round_model .section-content .TEXTBOX.first_animi.come-in {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -o-transform: translateX(0);
}
```

---

## 3. Verification Checklist

- [x] Circle starts rolling immediately when top of element reaches the bottom of the viewport.
- [x] Full roll-in completes in `350ms` (snappy, without sluggishness).
- [x] Hovering over any slice (1–9) immediately activates corresponding graphic and text with 0ms delay.
- [x] Circle triggers properly even when refreshing the page directly over the section.
