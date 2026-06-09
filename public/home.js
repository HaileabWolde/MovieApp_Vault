const menuBtn = document.getElementById('menu-btn');
const mobilesideBar = document.getElementById('mobilesideBar');

menuBtn.addEventListener('click', () => {
    mobilesideBar.classList.toggle('-translate-x-full');
});