document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');

  // Agrega clase para hover usando CSS, no JS (solo para el click)
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const url = link.href;
      const userConfirmed = confirm(`¿Estás seguro de que deseas visitar:\n${url}?`);
      if (userConfirmed) {
        window.open(url, '_blank');
      }
    });
  });
});
