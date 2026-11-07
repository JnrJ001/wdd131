document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const lamp = document.querySelector('#menu');
const room = document.querySelector('#navmenu');

lamp.addEventListener('click', () => {
    room.classList.toggle('open');
    lamp.textContent = room.classList.contains('open') ? '✖' : '☰';
});