import "./styles.css";

/**
 * Muestra el contenido el posit en un modal
 */
function setFullPosit(titulo, cuerpo) {
  var textoTitulo = document.getElementById("texto-titulo");
  var textoCuerpo = document.getElementById("texto-cuerpo");
  textoTitulo.innerText = titulo;
  textoCuerpo.innerText = cuerpo;
  //Mostramos el modal
  document.getElementById("modal-postit").style.display = "block";
}

var self = {};

/**
 * Inicializa los datos del proyecto
 */
//Esta funcion se llamará en getProyecto y en vista previa
function initDatosProyecto(datos) {
  self.datosProyecto.id = datos.id;

  //...
  setBusinessModel();
  //Creamos las cajas por defecto
  setCajasDefault(6);
}
self.datosProyecto = {};

/**
 * Crea array de cajas con valores por defecto para el bussinesModel
 */
function setCajasDefault(num) {
  for (var i = 0; i < self.datosProyecto.businesModel.length; i++) {
    var cajas = [];
    for (var x = 0; x < num; x++) {
      var idContador = x + 1;
      var caja = {
        id: idContador,
        titulo: "",
        descripcion: "",
        color: "#bad9f9",
        textoCheck: ""
      };
      cajas.push(caja);
    }
    self.datosProyecto.businesModel[i].cajas = cajas;
  }
}
function setBusinessModel() {
  self.datosProyecto.businesModel = [
    {
      id: 1
    },
    {
      id: 2
    }
  ];
}

var cajasServidor = [
  {
    id: 1,
    titulo: "Titulo ejemplo",
    descripcion: "Descripcion ejemplo",
    color: "#ccc",
    textoCheck: "checkhtml"
  },
  {
    id: 4,
    titulo: "AAAAAABBBBB",
    descripcion: "CCCCCCCDDDDDDDD",
    color: "#fff",
    textoCheck: "checkhtml"
  }
];

/*** USarla en caso de que en el servidor me devuelvan menos de 6 cajas */
function setCajasServidor() {
  for (var i = 0; i < self.datosProyecto.businesModel.length; i++) {
    var businesModel = self.datosProyecto.businesModel[i];
    for (var x = 0; x < businesModel.cajas.length; x++) {
      var caja = businesModel.cajas[x];
      for (var j = 0; j < cajasServidor.length; j++) {
        if (caja.id == cajasServidor[j].id) {
          caja.titulo = cajasServidor[j].titulo;
          caja.descripcion = cajasServidor[j].descripcion;
          caja.color = cajasServidor[j].color;
          caja.textoCheck = cajasServidor[j].textoCheck;
        }
      }
    }
  }
}
