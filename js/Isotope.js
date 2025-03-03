$(document).ready(function() {
    // Initialize Isotope with a delay
    setTimeout(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item-wrapper',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        // Filter items on button click
        $('.portfolio-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            // Update active button state
            $('.portfolio-filters').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }, 100);

    // Reinitialize Isotope on window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.portfolio-grid').isotope('layout');
        }, 250);
    });
});$(document).ready(function() {
    // Initialize Isotope with a delay
    setTimeout(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item-wrapper',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        // Filter items on button click
        $('.portfolio-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            // Update active button state
            $('.portfolio-filters').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }, 100);

    // Reinitialize Isotope on window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.portfolio-grid').isotope('layout');
        }, 250);
    });
});$(document).ready(function() {
    // Initialize Isotope with a delay
    setTimeout(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item-wrapper',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        // Filter items on button click
        $('.portfolio-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            // Update active button state
            $('.portfolio-filters').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }, 100);

    // Reinitialize Isotope on window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.portfolio-grid').isotope('layout');
        }, 250);
    });
});$(document).ready(function() {
    // Initialize Isotope with a delay
    setTimeout(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item-wrapper',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        // Filter items on button click
        $('.portfolio-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            // Update active button state
            $('.portfolio-filters').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }, 100);

    // Reinitialize Isotope on window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.portfolio-grid').isotope('layout');
        }, 250);
    });
});$(document).ready(function() {
    // Initialize Isotope with a delay
    setTimeout(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item-wrapper',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        // Filter items on button click
        $('.portfolio-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            
            // Update active button state
            $('.portfolio-filters').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }, 100);

    // Reinitialize Isotope on window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.portfolio-grid').isotope('layout');
        }, 250);
    });
});