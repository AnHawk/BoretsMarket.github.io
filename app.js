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

document.addEventListener("DOMContentLoaded", function() {
    // Анимация появления элементов
    setTimeout(() => {
        document.querySelector(".hero-title").style.opacity = "1";
        document.querySelector(".hero-title").style.transform = "translateY(0)";
        
        document.querySelector(".hero-subtitle").style.opacity = "1";
        document.querySelector(".hero-subtitle").style.transform = "translateY(0)";
        
        document.querySelector(".hero-button").style.opacity = "1";
        document.querySelector(".hero-button").style.transform = "translateY(0)";
        
        document.querySelector(".hero-image img").style.opacity = "1";
        document.querySelector(".hero-image img").style.transform = "scale(1)";
    }, 200);

    // Плавный скролл при нажатии на кнопку
    document.querySelector(".hero-button").addEventListener("click", function() {
        const targetSection = document.getElementById("photo-grid");
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
