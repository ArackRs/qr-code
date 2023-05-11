const darkMode = document.querySelector('#img');
darkMode.addEventListener('mouseover', () => {
    document.body.classList.toggle('dark');
});
darkMode.addEventListener('mouseout', () => {
    document.body.classList.toggle('dark');
});
