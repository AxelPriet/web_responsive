document.addEventListener("DOMContentLoaded", () => {
    const btnPersonas = document.getElementById("btn-personas");
    const btnEmpresas = document.getElementById("btn-empresas");
    const listaPersonas = document.getElementById("lista-personas");
    const listaEmpresas = document.getElementById("lista-empresas");
    const tablaPersonas = document.getElementById("tabla-personas");
    const tablaEmpresas = document.getElementById("tabla-empresas");
    const titulo = document.getElementById("contact-title");

    // Función para alternar entre vistas
    const toggleView = () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Vista móvil: mostrar botones desplegables y ocultar tablas
            listaPersonas.style.display = "block";
            listaEmpresas.style.display = "none";
            tablaPersonas.style.display = "none";
            tablaEmpresas.style.display = "none";
        } else {
            // Vista tablet/escritorio: mostrar tablas y ocultar botones desplegables
            listaPersonas.style.display = "none";
            listaEmpresas.style.display = "none";
            tablaPersonas.style.display = "table";
            tablaEmpresas.style.display = "none";
        }
    };

    // Llamar a la función al cargar la página
    toggleView();

    // Llamar a la función cuando se redimensiona la ventana
    window.addEventListener("resize", toggleView);

    // Alternar entre "Personas" y "Empresas"
    btnPersonas.addEventListener("click", () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            listaPersonas.style.display = "block";
            listaEmpresas.style.display = "none";
        } else {
            tablaPersonas.style.display = "table";
            tablaEmpresas.style.display = "none";
        }

        titulo.textContent = "Lista de Contactos Personas";
    });

    btnEmpresas.addEventListener("click", () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            listaPersonas.style.display = "none";
            listaEmpresas.style.display = "block";
        } else {
            tablaPersonas.style.display = "none";
            tablaEmpresas.style.display = "table";
        }

        titulo.textContent = "Lista de Contactos Empresas";
    });
});