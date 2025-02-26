// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
// }

function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}

// Открытие подкатегорий на мобильных
function toggleDropdown(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    let submenu = event.target.nextElementSibling;
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}
