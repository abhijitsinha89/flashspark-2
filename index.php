    <?php get_header(); ?>
<!--         <header class="fs-header">
        <div>
             <a href="/"><i class="bulb-mybulb fs-logo"></i></a>
        </div>
        <div class="fs-header-name">ABHIJIT SINHA</div>
    </header> -->
    <div data-ng-include='"<?php echo includeurl() ?>layout/menu.html"'></div>

	<div ng-view></div>
    <?php get_footer(); ?>

