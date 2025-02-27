// Функция для получения параметров из URL
function getParamsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category'),
        subcategory: params.get('subcategory')
    };
}

async function loadCategoryProducts() {
    const { category, subcategory } = getParamsFromUrl();
    document.getElementById("category-title").textContent = category + (subcategory ? " - " + subcategory : "");

    try {
        const response = await fetch('products.json');
        const products = await response.json();
        const container = document.getElementById('products');

        container.innerHTML = '';

        // Фильтруем товары по категории и подкатегории (если указана)
        const filteredProducts = products.filter(product => 
            product.category === category && (!subcategory || product.subcategory === subcategory)
        );

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
                <button class="btn">Замовити</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Помилка завантаження товарів:", error);
    }
}

loadCategoryProducts();
