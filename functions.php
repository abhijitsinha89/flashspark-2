<?php

function my_scripts() {

	wp_register_script(
		'vendorscripts',
		get_stylesheet_directory_uri() . '/build/vendor/vendorscripts.min.js'
	);

	 wp_enqueue_script(
		'angularapp',
		get_stylesheet_directory_uri() . '/build/app/app.min.js',
		array('vendorscripts')
        );

wp_localize_script(
		'angularapp',
		'myLocalized',
		array(
			'partials' => trailingslashit( get_template_directory_uri() ) . 'app/'
			)
	);
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

function includeurl()
{
    return get_template_directory_uri().'/app/';
}

remove_action('template_redirect', 'redirect_canonical');

add_theme_support('post-thumbnails');

add_action('admin_menu', 'my_remove_sub_menus');

function my_remove_sub_menus() {
    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=category');
    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=post_tag');
}

// REMOVE POST META BOXES
function remove_my_post_metaboxes() {
  remove_meta_box( 'categorydiv','post','normal' ); // Categories Metabox
  remove_meta_box( 'tagsdiv-post_tag','post','normal' ); // Tags Metabox
}
add_action('admin_menu','remove_my_post_metaboxes');
?>