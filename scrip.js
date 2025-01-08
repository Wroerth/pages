

document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('nav ul li a');

    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#e3f2fd';
            link.style.borderRadius = '4px';
            link.style.padding = '5px';
            link.style.transition = 'background-color 0.3s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = 'transparent';
            link.style.padding = '0';
        });
    });

    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const userConfirmed = confirm(`¿Estás seguro de que deseas visitar: ${link.href}?`);
            if (userConfirmed) {
                window.open(link.href, '_blank'); 
            }
        });
    });
});
