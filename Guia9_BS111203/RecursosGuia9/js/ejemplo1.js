//accediendo a a referencia del formulario que tendrá los nuevos elementos

const newForm = document.getElementById("idNewForm");

//accediendo a la referencia de botones
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

//accediendo al valor del select para determinar el tipo de elemento a crear
const cmbElemento = document.getElementById("idCmbElemento");

//accediendo a los controles del modal
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

//creando modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("odModal"), {});

//agregando funciones
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    //validando que se haya seleccionado un elemento
    if(elemento != "") {
        //método perteneciente al modal de bootstrap
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};
//función para crear un elemento de tipo select
const newSelect = function () {
    //creando elementos
    let addElemento = document.createElement("select");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("id", "form-select");

    //creando option para el select
    for(let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    //creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    //agregando atributos
    divElemento.setAttribute("class", "form-floating");

    //creando el input que será hijo del div
    divElemento.appendChild(addElemento);
    //creando el label que será hijo del div
    divElemento.appendChild(labelElemento);

    //creando el SPAN que será hijo del nuevo formulario
    newForm.appendChild(labelId);

    //creando el div que será hijo del nuevo formulario
    newForm.appendChild(divElemento);
};
//función para crear un elemento de tipo radio o checkbox
const newRadioCheckbox = function (newElemento) {
    //creando elementos
    let addElemento = document.createElement("input");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("", "form-check-label");
    labelElemento.setAttribute("", `id${nombreElemento.value}`);
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    //creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    //agregando atributos
    divElemento.setAttribute("class", "form-check");

    //creando el input que será hijo del div
    divElemento.appendChild(addElemento);
    //creando el label que será hijo del div
    divElemento.appendChild(labelElemento);

    //creando el SPAN que será hijo del nuevo formulario
    newForm.appendChild(labelId);

    //creando el DIV que será hijo del nuevo formulario
    newForm.appendChild(divElemento);

    //función para crear un elemento de tipo TEXTAREA, TEXT, NUMBER, DATE U OTRO
    const newInput = function (newElemento) {
      //creando elementos de tipo = text, number, date y password
      let addElemento =
        newElemento == "textarea"
          ? document.createElement("textarea")
          : document.createElement("input");

      //creando atributos para el nuevo elemento
      addElemento.setAttribute("id", `id${nombreElemento.value}`);
      addElemento.setAttribute("type", newElemento);
      addElemento.setAttribute("class", "form-control");
      addElemento.setAttribute("placeholder", tituloElemento.value);

      //creando label para el nuevo control
      let labelElemento = document.createElement("label");
      labelElemento.setAttribute("for", `id${nombreElemento.value}`);

      //creando ícono para el label
      let iconLabel = document.createElement("i");
      iconLabel.setAttribute("class", "bi bi-tag");

      //creando texto para label
      labelElemento.textContent = tituloElemento.value;

      //creando el elemento i como hijo del label afterbegin
      //le indicamos que se creará antes de su primer hijo
      labelElemento.insertAdjacentElement("afterbegin", iconLabel);

      //creando label de id
      let labelId = document.createElement("span");
      labelId.textContent = `ID de control : ${nombreElemento.value}`;

      //creando plantilla de bootstrap para visualizar el nuevo elemento
      let divElemento = document.createElement("div");
      //agregando atributos
      divElemento.setAttribute("class", "form-floating mb-3");

      //creando el input que será el hijo del div
      divElemento.appendChild(addElemento);
      //creando 
      divElemento.appendChild(labelElemento);
    }


};