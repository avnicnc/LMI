# Production Deployment Guide — LMI Website Changes

This document outlines all code changes, database/admin updates, and configuration adjustments that need to be deployed from staging to the **Live Production Server** (`https://lmi.co.il`).

---

## Part 1: Theme Code Deployments (Git / FTP)

The following files inside `wp-content/themes/monster-studio/` contain all custom fixes and should be deployed via Git (`git pull origin main`) or uploaded via SFTP:

### 1. `functions.php`
* **Path**: `wp-content/themes/monster-studio/functions.php`
* **Changes**:
  * **Dynamic Year Shortcode**: Added `[year]` shortcode for copyright footers (`date('Y')`).
  * **Security Hardening**:
    * Disabled XML-RPC: `add_filter('xmlrpc_enabled', '__return_false');`
    * Removed generator meta: `remove_action('wp_head', 'wp_generator');`
    * Removed RSD link: `remove_action('wp_head', 'rsd_link');`
    * Removed Windows Live Writer link: `remove_action('wp_head', 'wlwmanifest_link');`
  * **SOGO Accessibility Fix**: Whitelisted `'fontawsome'` handle in `dequeue_font_awesome_by_url()` so the header accessibility toolbar icon (♿) remains visible.

### 2. `css/screen.css`
* **Path**: `wp-content/themes/monster-studio/css/screen.css`
* **Changes**:
  * **Rolling Circle Animation (Lines ~75–80)**:
    * Replaced `0.6s all ease` (0.1s delay) with `0.35s transform cubic-bezier(0.25, 1, 0.5, 1), 0.35s opacity ease` (0s delay).
    * Updated `.TEXTBOX.first_animi` to `0.35s` (0.05s delay).

### 3. `css/custome.css`
* **Path**: `wp-content/themes/monster-studio/css/custome.css`
* **Changes**:
  * **Contact Form Submit Button**: Expanded native Gravity Forms submit button (`#gform_submit_button_2`) to `width: 100%` and `height: 100%` of `.gform_footer`, with matching cursor and flex alignment.

### 4. `js/script.js`
* **Path**: `wp-content/themes/monster-studio/js/script.js`
* **Changes**:
  * **Circle Scroll Trigger (Lines ~142–172)**: Replaced scroll threshold with `checkCircleAnimation()` triggering at `offset().top + 50`, reduced `active_pointer` timeout to `350ms`, and bound to `scroll`, `resize`, and `document.ready`.
  * **Circle Hover Handlers (Lines ~11–66)**: Removed `.delay(100).queue(...)` and `.finish()` from slices 1 through 9 for instant response.
  * **Form Submit Handler**: Removed synthetic click trigger on `.gform_footer` to eliminate potential recursion.

---

## Part 2: WordPress Admin / Content Updates

These changes must be performed inside the live WordPress Admin (`/wp-admin`):

### 1. Contact Us Page (`/contact/`)
1. Go to **Pages $\rightarrow$ All Pages $\rightarrow$ Contact Us $\rightarrow$ Edit**.
2. **Remove Duplicate ID**: Look in the content/HTML for an extra pasted container with ID `#gform_fields_2` and delete it.
3. **Enable AJAX**: Ensure the Gravity Forms shortcode includes `ajax="true"`:
   ```text
   [gravityform id="2" title="false" description="false" ajax="true"]
   ```
4. Save and Update the page.

### 2. Footer Copyright Year (UX Block #350)
1. Go to **WP Admin $\rightarrow$ UX Blocks** (Flatsome).
2. Edit **Block #350** (Footer block).
3. Find the copyright notice text where the year `2025` is hardcoded.
4. Replace `2025` with `[year]`.
5. Save the UX block.

### 3. WP Rocket Configuration
1. Go to **WP Admin $\rightarrow$ Settings $\rightarrow$ WP Rocket $\rightarrow$ File Optimization**.
2. Locate the **Delay JavaScript Execution** section.
3. In the **Excluded JavaScript Files** text area, add the following lines (one per line):
   ```text
   /wp-content/plugins/gravityforms/
   /wp-content/plugins/gravityformsrecaptcha/
   /wp-includes/js/jquery/
   gform
   gformInitSpinner
   gf_apply_rules
   recaptcha
   ```
4. Click **Save Changes**.
5. Clear the WP Rocket cache.

### 4. Redundant Caching Plugins Cleanup
1. Go to **WP Admin $\rightarrow$ Plugins $\rightarrow$ Installed Plugins**.
2. Ensure any unused hosting-installed caching plugins are deactivated and deleted:
   * `Breeze`
   * `EZCache`
   * `NitroPack`
   * `Object Cache Pro` (if not using Redis)
3. Keep **WP Rocket** as the single primary caching layer.

---

## Part 3: Server Configuration (`wp-config.php`)

Verify the following setting in the live root `wp-config.php`:
```php
define( 'WP_DEBUG_DISPLAY', false );
```
This ensures PHP notices and warnings are written silently to `wp-content/debug.log` rather than printing into frontend HTML or breaking AJAX responses.

---

## Part 4: Post-Deployment Verification Checklist

Once deployed to production, run through this verification checklist:

- [ ] **Homepage Circle Animation**:
  - Circle starts rolling immediately when its top edge enters the screen.
  - Slices 1–9 swap background images and text boxes instantly on hover with no 100ms lag.
- [ ] **Contact Form Submission**:
  - Fill out and submit the Contact form on `/contact/`.
  - Form submits smoothly via AJAX without full page refresh.
  - Google reCAPTCHA verifies without delay.
- [ ] **Footer Year**:
  - Footer displays current year automatically.
- [ ] **Accessibility Icon**:
  - SOGO accessibility toolbar icon (♿) displays properly in the header.
- [ ] **Security Endpoints**:
  - Visiting `https://lmi.co.il/xmlrpc.php` returns **403 Forbidden** or blocked.
