document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.MenuToggle'); // El botón de la hamburguesa
    const closeMenuBtn = document.querySelector('.CloseMenu'); // El botón de cerrar (la X)
    const header = document.querySelector('header'); // El header
    const body = document.querySelector('body'); // El body

    // Abrir el menú
    menuToggle.addEventListener('click', function() {
        header.classList.toggle('activeheader'); // Mostrar el menú
        menuToggle.style.display = 'none'; // Ocultar el botón de hamburguesa
        closeMenuBtn.style.display = 'flex'; // Mostrar el botón de la "X"
        
        if (!header.classList.contains('activeheader')) {
            body.style.overflow = 'hidden';  // Habilitar el scroll del body
            html.style.overflow = 'hidden';  // Habilitar el scroll del html
        }
    });

    // Cerrar el menú
    closeMenuBtn.addEventListener('click', function() {
        header.classList.toggle('activeheader'); // Ocultar el menú
        closeMenuBtn.style.display = 'none'; // Ocultar el botón de la "X"
        menuToggle.style.display = 'flex'; // Mostrar nuevamente el botón de la hamburguesa
        
        if (header.classList.contains('activeheader')) {
            body.style.overflow = 'auto';  // Desactivar el scroll del body
            html.style.overflow = 'auto';  // Desactivar el scroll del html
        }
    });
});


   
    
    