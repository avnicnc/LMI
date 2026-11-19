<?php
// Add custom Theme Functions here

add_action('wp_enqueue_scripts', 'lmi_scripts');
function lmi_scripts()
{
    $version = '1.0.4';
    // Theme stylesheet.
    wp_enqueue_style('lmi-style', get_stylesheet_uri(), [], $version);
    wp_enqueue_style('lmi-screen-style', get_theme_file_uri('css/screen.css'), [], $version);
    wp_enqueue_style('lmi-custome-style', get_theme_file_uri('css/custome.css'), [], $version);

    wp_enqueue_script('lmi-slick', get_theme_file_uri('js/script.js'), ['jquery'], $version, true);
}

add_action('upload_mimes', 'add_file_types_to_uploads');
function add_file_types_to_uploads($file_types)
{
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes);
    return $file_types;
}

add_action('init', 'cdxn_remove_custom_type_from_search', 99);
function cdxn_remove_custom_type_from_search()
{
    global $wp_post_types;
    if (post_type_exists('page')) {
        // exclude from search results
//         $wp_post_types['page']->exclude_from_search = true;
    }
}

function lmi_register_meta_boxes()
{
    add_meta_box('lmi-1', __('Custom Post Link', 'lmi'), 'lmi_display_callback', 'post');
}
add_action('add_meta_boxes', 'lmi_register_meta_boxes');

/**
 * Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function lmi_display_callback($post)
{ ?>
    <div class="lmi_box">
        <style scoped>
            .lmi_box {
                display: grid;
                grid-template-columns: max-content 1fr;
                grid-row-gap: 10px;
                grid-column-gap: 20px;
            }

            .lmi_field {
                display: contents;
            }
        </style>
        <p class="meta-options lmi_field">
            <label for="lmi_author">URL:</label>
            <input id="lmi_author" type="url" name="lmi_custom_url"
                value="<?php echo esc_attr(get_post_meta(get_the_ID(), 'lmi_custom_url', true)); ?>">
        </p>
    </div>
    <?php
}

function lmi_save_meta_box($post_id)
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;
    if ($parent_id = wp_is_post_revision($post_id)) {
        $post_id = $parent_id;
    }
    $fields = [
        'lmi_custom_url',
    ];
    foreach ($fields as $field) {
        if (array_key_exists($field, $_POST)) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'lmi_save_meta_box');

function dequeue_gravity_forms_fontawesome()
{
    if (class_exists('GFCommon')) { // Check if Gravity Forms is active
        wp_deregister_style('gform_font_awesome');
    }
}
add_action('wp_enqueue_scripts', 'dequeue_gravity_forms_fontawesome', 20);

function dequeue_font_awesome()
{
    wp_deregister_style('fontawsome-css');
}
add_action('wp_enqueue_scripts', 'dequeue_font_awesome', 20);

// -----------------------------------------------------------------------
// OLD CODE (Before Fix) — was removing Font Awesome from ALL plugins
// This caused the SoGo Accessibility plugin icon to disappear in header
/*function dequeue_font_awesome_by_url() {
    global $wp_styles;
    foreach ($wp_styles->registered as $style) {
        if (strpos($style->src, 'font-awesome.min.css') !== false) {
            wp_dequeue_style($style->handle);
            wp_deregister_style($style->handle);
        }
    }
}
add_action('wp_enqueue_scripts', 'dequeue_font_awesome_by_url', 20);*/
// -----------------------------------------------------------------------

//code update date - 2026-02-20
// NEW CODE (After Fix) — skips 'fontawsome' handle used by SoGo plugin
// so the accessibility icon (♿) stays visible in the header
function dequeue_font_awesome_by_url()
{
    global $wp_styles;
    // Handles to keep — SoGo Accessibility plugin uses 'fontawsome' for its icon
    $keep_handles = array('fontawsome');
    foreach ($wp_styles->registered as $style) {
        if (in_array($style->handle, $keep_handles)) {
            continue; // Skip — needed by SoGo Accessibility plugin
        }
        if (strpos($style->src, 'font-awesome.min.css') !== false) {
            wp_dequeue_style($style->handle);
            wp_deregister_style($style->handle);
        }
    }
}
add_action('wp_enqueue_scripts', 'dequeue_font_awesome_by_url', 20);

// Dynamic current year shortcode: [year]
add_shortcode('year', function () {
    return date('Y');
});

// Security Hardening: Disable XML-RPC and remove generator meta
add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rsd_link');   
remove_action('wp_head', 'wlwmanifest_link');