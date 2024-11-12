// Variables globales
let currentSlide = 0;
const totalSlides = 5;

// Función para mostrar una diapositiva específica
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    // Ocultar diapositiva actual
    slides[currentSlide].classList.remove('active');
    
    // Calcular nueva diapositiva
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Mostrar nueva diapositiva
    slides[currentSlide].classList.add('active');
    
    // Actualizar contador
    updateCounter();
}

// Funciones de navegación
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Actualizar contador de diapositivas
function updateCounter() {
    document.getElementById('slideCounter').textContent = `${currentSlide + 1}/${totalSlides}`;
}

// Eventos de teclado para navegación
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'ArrowRight':
            nextSlide();
            break;
    }
});

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar primera diapositiva
    updateCounter();
    
    // Reinicializar componentes de Bootstrap después de cambiar diapositivas
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                // Reinicializar tooltips
                const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
                tooltips.forEach(tooltip => new bootstrap.Tooltip(tooltip));
                
                // Reinicializar popovers
                const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
                popovers.forEach(popover => new bootstrap.Popover(popover));
            }
        });
    });

    // Observar cambios en las diapositivas
    document.querySelectorAll('.slide').forEach(function(slide) {
        observer.observe(slide, { attributes: true });
    });
});

// Función para prevenir que los eventos de los componentes de demostración
// afecten a la navegación de diapositivas
document.addEventListener('DOMContentLoaded', function() {
    const demoComponents = document.querySelectorAll('.demo-section');
    demoComponents.forEach(function(component) {
        component.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});
