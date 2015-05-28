    <?php get_header(); ?>
    <div data-ng-include='"<?php echo includeurl() ?>layout/menu.html"'></div>

	<div ng-view></div>
    <?php get_footer(); ?>

