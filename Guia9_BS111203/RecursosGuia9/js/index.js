//obteniendo la referencia de los botones poor medio del .getElementById

const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir =document.getElementById("idImprimirResultado");


//definición de funciones
const contarElementos = function (elemento) {
    //obteniendo el número de etiquetas span que se han creado en el documento html

    let arrayElement = document.getElementsByTagName(elemento);
    console.log(
        `Etiquetas buscadas <${elemento}></${elemento}> / Total encontradas : ${arrayElement.length}`
    );
    for (const i of arrayElement) {
        console.log(i);
    }

    alert("Revise la consola del navegador");
}

//definición de eventos para los botones
buttonSpan.onclick = () => {
    contarElementos("span");
};

buttonP.onclick = () => {
    contarElementos("p");
};

buttonDiv.onclick = () => {
    contarElementos("div");
};

buttonButton.onclick = () => {
    contarElementos("button");
};