// Definición del contenido de las diapositivas
const slidesContent = {
    intro: `
        <div class="slide active" id="slide1">
            <div class="slide-content text-center">
                <h1>Controles para Espacios Reducidos</h1>
                <div class="my-4">
                    <i class="fas fa-compress-alt fa-4x text-primary"></i>
                </div>
                <h3>Optimizando el espacio en páginas web</h3>
                <ul class="list-unstyled mt-4">
                    <li><i class="fas fa-check text-success"></i> Acordeón</li>
                    <li><i class="fas fa-check text-success"></i> Pestañas (Tabs)</li>
                    <li><i class="fas fa-check text-success"></i> Panel lateral (Offcanvas)</li>
                    <li><i class="fas fa-check text-success"></i> Ventanas modales</li>
                </ul>
            </div>
        </div>
    `,
    
    accordion: `
        <div class="slide" id="slide2">
            <h2>Acordeón (Accordion)</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="code-example">
                        <pre><code>&lt;!-- Estructura básica del acordeón --&gt;
&lt;div class="accordion" id="accordionExample"&gt;
    &lt;div class="accordion-item"&gt;
        &lt;h2 class="accordion-header"&gt;
            &lt;button class="accordion-button" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"&gt;
                Sección #1
            &lt;/button&gt;
        &lt;/h2&gt;
        &lt;div id="collapseOne" 
             class="accordion-collapse collapse show"
             data-bs-parent="#accordionExample"&gt;
            &lt;div class="accordion-body"&gt;
                Contenido de la sección
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="demo-section">
                        <h4>Ejemplo en vivo:</h4>
                        <div class="accordion" id="demoAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#demoCollapseOne">
                                        Sección #1
                                    </button>
                                </h2>
                                <div id="demoCollapseOne" class="accordion-collapse collapse show" data-bs-parent="#demoAccordion">
                                    <div class="accordion-body">
                                        Este es un ejemplo funcional del acordeón.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    tabs: `
        <div class="slide" id="slide3">
            <h2>Pestañas (Tabs)</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="code-example">
                        <pre><code>&lt;!-- Navegación de pestañas --&gt;
&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
    &lt;li class="nav-item" role="presentation"&gt;
        &lt;button class="nav-link active" 
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"&gt;
            Inicio
        &lt;/button&gt;
    &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Contenido de pestañas --&gt;
&lt;div class="tab-content" id="myTabContent"&gt;
    &lt;div class="tab-pane fade show active" 
         id="home"
         role="tabpanel"&gt;
        Contenido de la pestaña
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="demo-section">
                        <h4>Ejemplo en vivo:</h4>
                        <ul class="nav nav-tabs" id="demoTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">
                                    Pestaña 1
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">
                                    Pestaña 2
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tab1">
                                Contenido de la primera pestaña
                            </div>
                            <div class="tab-pane fade" id="tab2">
                                Contenido de la segunda pestaña
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    offcanvas: `
        <div class="slide" id="slide4">
            <h2>Panel Lateral (Offcanvas)</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="code-example">
                        <pre><code>&lt;!-- Botón para activar el panel --&gt;
&lt;button class="btn btn-primary" 
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#demoOffcanvas"&gt;
    Abrir panel
&lt;/button&gt;

&lt;!-- Panel lateral --&gt;
&lt;div class="offcanvas offcanvas-start" 
     id="demoOffcanvas"&gt;
    &lt;div class="offcanvas-header"&gt;
        &lt;h5 class="offcanvas-title"&gt;
            Título del panel
        &lt;/h5&gt;
        &lt;button type="button" 
                class="btn-close"
                data-bs-dismiss="offcanvas"&gt;
        &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="offcanvas-body"&gt;
        Contenido del panel
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="demo-section">
                        <h4>Ejemplo en vivo:</h4>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demoOffcanvas">
                            Abrir panel lateral
                        </button>
                        
                        <div class="offcanvas offcanvas-start" id="demoOffcanvas">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title">Panel Lateral</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div class="offcanvas-body">
                                Este es un ejemplo de panel lateral.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    modal: `
        <div class="slide" id="slide5">
            <h2>Ventana Modal</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="code-example">
                        <pre><code>&lt;!-- Botón para abrir el modal --&gt;
&lt;button type="button" 
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#demoModal"&gt;
    Abrir modal
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="demoModal"&gt;
    &lt;div class="modal-dialog"&gt;
        &lt;div class="modal-content"&gt;
            &lt;div class="modal-header"&gt;
                &lt;h5 class="modal-title"&gt;
                    Título del Modal
                &lt;/h5&gt;
                &lt;button type="button" 
                        class="btn-close"
                        data-bs-dismiss="modal"&gt;
                &lt;/button&gt;
            &lt;/div&gt;
            &lt;div class="modal-body"&gt;
                Contenido del modal
            &lt;/div&gt;
            &lt;div class="modal-footer"&gt;
                &lt;button type="button" 
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"&gt;
                    Cerrar
                &lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="demo-section">
                        <h4>Ejemplo en vivo:</h4>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
                            Abrir ventana modal
                        </button>
                        
                        <div class="modal fade" id="demoModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Ventana Modal</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        Este es un ejemplo de ventana modal.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Cargar las diapositivas en el DOM
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.getElementById('slides');
    slidesContainer.innerHTML = Object.values(slidesContent).join('');
});
