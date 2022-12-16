//Lista de anuncios
import { getAjaxDBMascotas} from "./db.js";
const listaAnuncios = await getAjaxDBMascotas();



const contenedor = document.getElementById("anuncios-container");

function crearTarjeta(titulo, descripcion, especie, precio, raza, fechaNacimiento, vacunas ) {
    const newCard = document.createElement("div");

    const _titulo = document.createElement("h3");
    _titulo.textContent = "Titulo: " + titulo;
    
    const _descripcion = document.createElement("p");
    _descripcion.textContent = "Descripcion: " + descripcion;
    
    const _precio = document.createElement("p");
    _precio.textContent = "Precio: $" + precio;

    const _especie = document.createElement("p");
    _especie.textContent = "especie: " + especie;
    
    const _divEspecificaciones = document.createElement("div");
    _divEspecificaciones.setAttribute("id", "card-Especificaciones");

    const _imgraza = document.createElement("img");
    _imgraza.setAttribute("src", "./img/animal.png");
    _imgraza.setAttribute("alt", "raza");
    _imgraza.setAttribute("height", "25px");
    
    const _raza = document.createElement("p");
    _raza.textContent = "raza: " + raza;
    
    const _imgNacimiento = document.createElement("img");
    _imgNacimiento.setAttribute("src", "./img/ciguena.png");
    _imgNacimiento.setAttribute("alt", "Nacimiento");
    _imgNacimiento.setAttribute("height", "25px");
    
    const _fechaNacimiento = document.createElement("p");
    _fechaNacimiento.textContent = "Fecha Nacimiento: " + fechaNacimiento;
    
    const _imgvacunas = document.createElement("img");
    _imgvacunas.setAttribute("src", "./img/jeringuilla.png");
    _imgvacunas.setAttribute("alt", "Vacunas");
    _imgvacunas.setAttribute("height", "25px");

    const _vacunas = document.createElement("p");
    _vacunas.textContent = "vacunas: " + vacunas;

    const _divBtn = document.createElement("div");
    _divBtn.setAttribute("id", "card-btn");

    const _btnVerAnuncio = document.createElement("button");
    _btnVerAnuncio.textContent = "Ver Anuncio";
    

    _divEspecificaciones.appendChild(_imgraza);
    _divEspecificaciones.appendChild(_raza);
    _divEspecificaciones.appendChild(_imgNacimiento);
    _divEspecificaciones.appendChild(_fechaNacimiento);
    _divEspecificaciones.appendChild(_imgvacunas);
    _divEspecificaciones.appendChild(_vacunas);
    _divBtn.appendChild(_btnVerAnuncio);


    newCard.appendChild(_titulo);
    newCard.appendChild(_descripcion);
    newCard.appendChild(_especie);
    newCard.appendChild(_precio);
    
    newCard.appendChild(_divEspecificaciones);
    // newCard.appendChild(_imgraza);
    // newCard.appendChild(_raza);
    // newCard.appendChild(_imgNacimiento);
    // newCard.appendChild(_fechaNacimiento);
    // newCard.appendChild(_imgvacunas);
    // newCard.appendChild(_vacunas);
    newCard.appendChild(_divBtn);
    // newCard.appendChild(_btnVerAnuncio);
    newCard.classList.add("card");    

    return newCard;
}

listaAnuncios.forEach((elemento) => {
    
    const $nuevaTarjeta = crearTarjeta(elemento.titulo, elemento.descripcion, elemento.especie, elemento.precio, elemento.raza, elemento.fechaNacimiento, elemento.vacunas);

    contenedor.appendChild($nuevaTarjeta);
});