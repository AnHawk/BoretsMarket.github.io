// Функция для получения параметра из URL
function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category'); // Получаем название категории
}

async function loadCategoryProducts() {
    const category = getCategoryFromUrl();
    document.getElementById("category-title").textContent = category;

    try {
        const response = await fetch('products.json');
        const products = await response.json();
        const container = document.getElementById('products');

        container.innerHTML = '';

        const filteredProducts = products.filter(product => product.category === category);

        if (filteredProducts.length === 0) {
            container.innerHTML = '<p>Товарів в цій категорії поки що немає.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Ціна:</strong> ${product.price}</p>
                <button>Замовити</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Помилка завантаження товарів:", error);
    }
}

loadCategoryProducts();
