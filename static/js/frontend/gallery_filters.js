document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('filter-category');
    const sortSelect = document.getElementById('sort-select');

    function updateURL() {
        const selectedCategory = categorySelect.value;
        const selectedSort = sortSelect.value;

        let newURL = window.location.pathname; // Начинаем с базового пути URL

        const params = [];
        if (selectedCategory) {
            params.push('category=' + selectedCategory); // Используем category_id как имя параметра
        }
        if (selectedSort) {
            params.push('sort=' + selectedSort);
        }

        if (params.length > 0) {
            newURL += '?' + params.join('&'); // Объединяем параметры с '&'
        }

        window.location.href = newURL; // Перенаправляем на новый URL
    }

    // Слушаем изменения в обоих выпадающих списках
    categorySelect.addEventListener('change', updateURL);
    sortSelect.addEventListener('change', updateURL);
});