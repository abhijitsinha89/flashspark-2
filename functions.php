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

?>