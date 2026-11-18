# Changelog - LMI Website (Monster-Studio Child Theme)

All notable changes to the LMI website maintenance and child theme are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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

### Maintenance Roadmap / Upcoming Fixes
- [ ] **Footer Copyright Year**: Update Footer UX Block #350 to replace hardcoded `2025` with `[year]`.
- [ ] **Rolling Circle Animation Speed**: Optimize viewport scroll trigger threshold in `js/script.js` and snappier transition duration in `css/screen.css`.
- [ ] **Contact Form AJAX Validation**:
  - Remove duplicate Gravity Forms HTML container (`#gform_fields_2`) pasted in the Contact page content.
  - Exclude Gravity Forms and reCAPTCHA scripts from WP Rocket's "Delay JavaScript Execution" list.
- [ ] **Server Plugin Cleanup**: Delete redundant caching plugins installed by hosting (`breeze`, `ezcache`, `nitropack`, `object-cache-pro`) and keep WP Rocket as the single caching layer.
- [ ] **Security & Malware Scan**: Run core checksum verification and Wordfence scan against official WordPress repository hashes.
