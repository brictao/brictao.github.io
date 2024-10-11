document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');

    // 切换汉堡菜单和关闭按钮
    function toggleMenu() {
        hamburger.classList.toggle('active');
        overlay.style.display = (overlay.style.display === 'flex' ? 'none' : 'flex');
    }

    // 点击汉堡菜单事件
    hamburger.addEventListener('click', toggleMenu);

    // 点击关闭按钮事件
    closeBtn.addEventListener('click', toggleMenu);
});