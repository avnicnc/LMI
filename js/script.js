var url = document.location.origin;
jQuery(document).ready(function(){

  // banner-layers

    jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-1.png)"); 
    
    jQuery('section.hide_section').html("<img src='"+url+"/wp-content/uploads/2021/11/main-logo-1.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img> <img src='"+url+"/wp-content/uploads/2021/11/main-logo-2.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-3.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-4.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-5.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-6.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-7.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img><img src='"+url+"/wp-content/uploads/2021/11/main-logo-8.png' class='attachment-large size-large' alt='' decoding='async' fetchpriority='high'></img>");


    jQuery(".main-circle .1").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-1.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".1.TEXTBOX").removeClass("hidden");
    });
  
    jQuery(".main-circle .2").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-2.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".2.TEXTBOX").removeClass("hidden");
    });
  
    jQuery(".main-circle .3").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-3.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".3.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .4").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-4.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".4.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .5").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-5.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".5.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .6").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-6.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".6.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .7").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-7.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".7.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .8").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-8.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".8.TEXTBOX").removeClass("hidden");
    });
    jQuery(".main-circle .9").hover(function(){    
      jQuery(".main-circle .banner-layers.container").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo-9.png)");
      jQuery(".banner .banner-bg .bg.bg-loaded").css("background-image", "url("+url+"/wp-content/uploads/2021/11/main-logo.png)");
      jQuery(".TEXTBOX").addClass("hidden");
      jQuery(".9.TEXTBOX").removeClass("hidden");
    });
  if(jQuery('.Indices .col-inner').length > 0)
  {
    var element_position = jQuery('.Indices .col-inner').offset().top;
      jQuery(window).on('scroll', function() { var y_scroll_pos = window.pageYOffset+window.innerHeight; if(y_scroll_pos > element_position) {
      jQuery('.Indices .col-inner').addClass("animate")} else {jQuery('.Indices .col-inner').removeClass("animate")}
    });

  }
  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
  if(detectDeviceType() == 'Mobile')
  {jQuery(".main-circle a").attr("href","#circle");}
  


  // slit text
  $('.blog_post_wrapper .post-item').each(function(){
        var data = $(this).find('.post-meta').text();
        var data2 = data.replace(',', '');
        var arr = data2.split(' ');
        $(this).find('.post-meta').html("<span class='month_text'>"+arr[0] +",</span>"+"<span class='day_text'>"+arr[1] +"</span>"+"<span class='year_text'>"+ arr[2].substring(0, 4)+"</span>");
  });




});


/* Image Show animate */
//  (function($) {
//     $.fn.visible = function(partial) {
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;

//         return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//     };
// })(jQuery);
// var win = $(window);
// var allMods = $(".main-circle");
// var allMods2 = $(".round_model .section-content .TEXTBOX");
// win.scroll(function(event) {
//     allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             setTimeout(function(){
//                 el.addClass("come-in");
//             },i*400);
//         } 
//     });
//     allMods2.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             setTimeout(function(){
//                 el.addClass("come-in");
//             },i*400);
//         } 
//     });
//     allMods_3.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             setTimeout(function(){
//                 el.addClass("come-in");
//             },i*200);
//         } 
//     });
// });


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


// $(document).ready(function(){
//   setTimeout(function(){
//     $('.is-selected').eq(2).addClass('center_box');
//   },1000)
// });

// $(document).on('click','.slider-nav-light .flickity-prev-next-button',function(){
//   $('.is-selected').removeClass('center_box');
//     setTimeout(function(){
//       $('.is-selected').eq(2).addClass('center_box');
//     },200)
// });



// counter number js 
var a = 0;
$(window).scroll(function () {
  if($('.white_box').length > 0 )
  {
    var oTop = $(".white_box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".white_box h3").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 4000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
  }
});


// $('.upload-file-input .gfield_label').append('<span>Max. file size: <strong>64 MB.</strong></span>')



!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
  byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
  r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
  "padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
  display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
  this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
  }n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});



function MatchHeight() {
    $('.page-id-895 .section-content .col-inner .text p').matchHeight({});
    $('.search-results .article-inner h2.entry-title').matchHeight({});
    $('.materials-section .col-inner .text p').matchHeight({});
    $('.news_list .section-content .col-inner .text p').matchHeight({});
    $('.news_list .section-content .col-inner .text h2').matchHeight({});
    $('.news_list .col-inner .img').matchHeight({});
}  
$(document).ready(function() {
    MatchHeight(); 
});


$('.new_label').each(function(){
  var data = $(this).find('.ux-menu-link__text').text();
  var arr = data.split('-');
  $(this).find('.ux-menu-link__text').html(arr[0] + "<span class='new_text'>"+ arr[1] +"</span>");
});

// $('.mobile-sidebar .menu-item-2051 .sub-menu').each(function(){
//   var data = $(this).find('a').text();
//   var arr = data.split('-');
//   $(this).find('a').html(arr[0] + "<span class='new_text'>"+ arr[1] +"</span>");
// });

$(document).ready(function () {
    $('.mobile-sidebar .menu-item-2051 .sub-menu li a').each(function () {
        var data = $(this).html().trim(); // Get exact content
        var arr = data.split('-');

        if (arr.length > 1) { // Ensure there's a hyphen to split
            $(this).html(arr[0].trim() + " - <span class='new_text'>" + arr[1].trim() + "</span>");
        }
    });
});

