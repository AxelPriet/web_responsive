document.addEventListener("DOMContentLoaded", () => {
    const btnPersonas = document.getElementById("btn-personas");
    const btnEmpresas = document.getElementById("btn-empresas");
    const tablaPersonas = document.getElementById("tabla-personas");
    const tablaEmpresas = document.getElementById("tabla-empresas");
    const contactTitle = document.getElementById("contact-title");

    btnPersonas.addEventListener("click", () => {
        tablaPersonas.style.display = "table"; 
        tablaEmpresas.style.display = "none";   
        contactTitle.textContent = "Lista de Contactos Personas";
    });

    btnEmpresas.addEventListener("click", () => {
        tablaPersonas.style.display = "none";   
        tablaEmpresas.style.display = "table"; 
        contactTitle.textContent = "Lista de Contactos Empresas";
    });
});
