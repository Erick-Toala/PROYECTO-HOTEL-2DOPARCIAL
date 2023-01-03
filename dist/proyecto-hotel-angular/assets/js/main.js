let cerrar =document.querySelectorAll(".close")[0];
let abrir =document.querySelectorAll(".cta")[0];
let modal =document.querySelectorAll(".modal")[0];
let modalContainer =document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalContainer.style.opacity="1";
    modalContainer.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalContainer.style.opacity="0";
        modalContainer.style.visibility="hidden";
    },750)
});

window.addEventListener("click",function(e){
    console.log(e.target)
    if(e.target==modalContainer){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalContainer.style.opacity="0";
            modalContainer.style.visibility="hidden";
        },750)
    }
});

//javascript para cargar los datos del archivo XML
function cargarHabitaciones(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cargarXML(this);
        }
    }
    xhr.open("GET","src/assets/xml/mantenimiento.xml",true);
    xhr.send();
};
//se cargará el archivo XML con la siguiente función
function cargarXML(xml){
    var docXML = xml.responseXML;
    var tabla = "<tr><th>Numero</th><th>Detalle</th><th>Precio</th><th>Categoria</th><th>Piso</th><th>Estado</th><th></th></tr>";
    var cds = docXML.getElementByTagName("HABITACION");
    for (var i=0; i=cds.length; i++){
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("NUMERO")[0].textContent;
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("DETALLE")[0].textContent;
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("PRECIO")[0].textContent;
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("CATEGORIA")[0].textContent;
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("PISO")[0].textContent;
        tabla += "<tr><th>";
        tabla += cds[i].getElementByTagName("ESTADO")[0].textContent;
    }
    document.getElementById("tabla").innerHTML = tabla;
}