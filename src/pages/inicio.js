document.addEventListener("DOMContentLoaded", () => {
    const btnPersonas = document.getElementById("btn-personas");
    const btnEmpresas = document.getElementById("btn-empresas");
    const tablaPersonas = document.getElementById("tabla-personas");
    const tablaEmpresas = document.getElementById("tabla-empresas");
    const titulo = document.getElementById("contact-title");

    tablaPersonas.style.display = "table";
    tablaEmpresas.style.display = "none";
    titulo.textContent = "Lista de Contactos Personas";

    btnPersonas.addEventListener("click", () => {
        tablaPersonas.style.display = "table";
        tablaEmpresas.style.display = "none";
        titulo.textContent = "Lista de Contactos Personas";
    });

    btnEmpresas.addEventListener("click", () => {
        tablaPersonas.style.display = "none";
        tablaEmpresas.style.display = "table";
        titulo.textContent = "Lista de Contactos Empresas";
    });
});
