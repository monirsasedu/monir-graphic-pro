document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});


portfolioItems.forEach(item => {
    console.log('Item category:', item.getAttribute('data-category'));
    console.log('Filter value:', filterValue);

    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.classList.remove('hide');
        console.log('Showing:', item);
    } else {
        item.classList.add('hide');
        console.log('Hiding:', item);
    }
});
