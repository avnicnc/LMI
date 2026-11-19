# Changelog - LMI Website (Monster-Studio Child Theme)

All notable changes to the LMI website maintenance and child theme are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.4] - 2026-11-19

### Added
- `CIRCULAR_ANIMATION_CHANGES.md`: In-depth documentation and code comparisons for the Rolling Circle animation optimizations.

### Fixed
- `css/custome.css` & `js/script.js`: Contact Form submit button enhancements:
  - Removed synthetic click event listener from `script.js`.
  - Expanded native Gravity Forms submit button (`#gform_submit_button_2`) to 100% width and height of `.gform_footer` with matching hover cursor and alignment.

## [1.0.3] - 2026-11-18

### Added
- Dynamic current year shortcode `[year]` in `functions.php` to automatically render the current year dynamically in footers and content.
- Security hardening in `functions.php`:
  - Disabled XML-RPC via `xmlrpc_enabled` filter (`__return_false`).
  - Removed WordPress generator meta tag from `wp_head`.
  - Removed RSD link (`rsd_link`) from `wp_head`.
  - Removed Windows Live Writer manifest link (`wlwmanifest_link`) from `wp_head`.

### Changed
- `functions.php`: Updated `dequeue_font_awesome_by_url()` to explicitly whitelist and keep the `fontawsome` stylesheet handle, preserving the accessibility toolbar icon (♿) from the SOGO Accessibility plugin in the header.
- `wp-config.php`: Set `WP_DEBUG_DISPLAY = false` to write PHP warnings and notices silently to `wp-content/debug.log` without breaking frontend page layouts or AJAX responses.
- `css/screen.css` & `js/script.js`: Optimized the homepage Rolling Circle animation:
  - Reduced CSS transition duration from `0.6s` to a snappy `0.35s` (`cubic-bezier(0.25, 1, 0.5, 1)`).
  - Eliminated the `0.1s` transition delay (`transition-delay: 0s`).
  - Lowered scroll trigger threshold in `checkCircleAnimation()` from `30%` element height down to `top + 50px` for immediate viewport entry triggering.
  - Reduced `active_pointer` timeout from `700ms` to `350ms`.
  - Removed artificial `.delay(100)` from all 9 circle slice hover handlers for instant response on hover.

### Maintenance Roadmap / Status (1-Line Summary)
- [x] **CSS Animation**: Accelerated circle roll-in to `0.35s` (`cubic-bezier`), lowered trigger to `top + 50px`, and removed hover delays in `screen.css` and `script.js`.
- [ ] **Contact Form / CF7**: Cleaned button in `custome.css`/`script.js`; remove duplicate `#gform_fields_2` container in page content and enable `ajax="true"` on shortcode.
- [ ] **Footer Copyright Year**: Shortcode `[year]` added to `functions.php`; update UX Block #350 in WP Admin to replace hardcoded `2025` with `[year]`.
- [x] **Server Plugin Cleanup**: Verified deleted redundant caching plugins (`breeze`, `ezcache`, `nitropack`, `object-cache-pro`), keeping WP Rocket as single caching layer.
- [ ] **WP Rocket Delay JS Exclusions**: Add Gravity Forms & reCAPTCHA patterns (`/wp-content/plugins/gravityforms/`, `/wp-content/plugins/gravityformsrecaptcha/`, `/wp-includes/js/jquery/`, `gform`, `gformInitSpinner`, `gf_apply_rules`, `recaptcha`) to WP Rocket settings.
