'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('li[data-filter]');
    const cards = document.querySelectorAll('.card');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            const filterValue = e.target.getAttribute('data-filter').toLowerCase();

            filters.forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');

            cards.forEach(card => {
                const category = card.getAttribute('data-category').toLowerCase();

                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});