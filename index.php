    <?php get_header(); ?>
    <div class="fs-top-bar" data-ng-class="{'hidden': location.path() === '/'}"></div>
    <div data-ng-include='"<?php echo includeurl() ?>layout/menu.html"'></div>

	<div ng-view></div>
    <?php get_footer(); ?>

