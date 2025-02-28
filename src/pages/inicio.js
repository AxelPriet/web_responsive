const modal =(texto) => {
    const div = document.createElement('div');
    div.classList.add('modal');
    
    const p = document.createElement('p');
    p.textContent = texto;


    const cerrarBtn = document.createElement('button');
    cerrarBtn.textContent = 'Cerrar';
    cerrarBtn.classList.add('btn');
    cerrarBtn.addEventListener('click', () => {
        div.remove();
    });

    div.appendChild(p);
    div.appendChild(cerrarBtn);

    return div;
}

const inicioPage = () => {
    const section = document.createElement('section');
    
    const boton = document.createElement('button');
    boton.textContent = "Aceptar";
    boton.classList.add('btn');
    boton.addEventListener('click' , ()=>{
        const widthScreen = window.innerWidth;
        // if(widthScreen<=375){
        //     alert('HOLA CPECITO');
        // } else {
        //     alert("HOLA PAPU");
        // }
        const msg = widthScreen <= 375 
        ? modal("Hola Chocokrispies")
        : modal("HOLA AMIGOS DEL YUTU");

        section.appendChild(msg);
    });

    section.appendChild(boton);

    return section;
};


document.getElementById('page').appendChild(inicioPage());