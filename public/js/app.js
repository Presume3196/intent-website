const links = document.querySelectorAll('nav ul li a');
const checkbox = document.querySelector('nav input[type="checkbox"]');

links.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});