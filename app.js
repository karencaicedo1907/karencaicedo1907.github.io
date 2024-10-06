function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active'); // Elimina la clase 'active' de todas las secciones
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active'); // Agrega la clase 'active' a la sección seleccionada

    // Desplazar la página a la parte superior para mostrar la sección
    window.scrollTo(0, 0);
}

