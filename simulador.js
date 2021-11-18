function costoDeEnvio(codigoPostal, tipoDeServicio) {
  if (
    codigoPostal > 1000 &&
    codigoPostal < 1500 &&
    tipoDeServicio == "Regular"
  ) {
    let precioCaba = 250;
    let servicioRegular = 50;
    return precioCaba + servicioRegular;
  } else if (
    codigoPostal > 1000 &&
    codigoPostal < 1500 &&
    tipoDeServicio == "Premium"
  ) {
    let precioCaba = 250;
    let servicioPremium = 250;
    return precioCaba + servicioPremium;
  } else if (
    codigoPostal > 1500 &&
    codigoPostal < 1900 &&
    tipoDeServicio == "Regular"
  ) {
    let precioGBA = 350;
    let servicioRegular = 50;
    return precioGBA + servicioRegular;
  } else if (
    codigoPostal > 1500 &&
    codigoPostal < 1900 &&
    tipoDeServicio == "Premium"
  ) {
    let precioGBA = 350;
    let servicioPremium = 250;
    return precioGBA + servicioPremium;
  } else if (
    codigoPostal > 1900 &&
    codigoPostal < 9000 &&
    tipoDeServicio == "Regular"
  ) {
    let precioInterior = 600;
    let servicioRegular = 50;
    return precioInterior + servicioRegular;
  } else if (
    codigoPostal > 1900 &&
    codigoPostal < 9000 &&
    tipoDeServicio == "Premium"
  ) {
    let precioInterior = 600;
    let servicioPremium = 250;
    return precioInterior + servicioPremium;
  } else {
    return "Lo lamentamos, pero los datos ingresados no son válidos";
  }
}

function calcular() {
  let nombrecliente = prompt("Por favor, ingrese su nombre y apellido");
  let direcciondedestino = prompt("Ingrese su direccion");
  let provincia = prompt("Ingrese la provincia en que vive");
  let codigoPostal = prompt("Por favor ingrese su código postal");
  let tipoDeServicio = prompt(
    "Ingrese el tipo de servicio que desea. Recuerde que puede escoger entre Regular o Premium"
  );
  let resultado = costoDeEnvio(codigoPostal, tipoDeServicio);
  alert("El costo de su envío será de $" + resultado);
}

function construirViaje(
  nombrecliente,
  codigoPostal,
  tipoDeServicio,
  provincia,
  direcciondedestino
) {
  this.nombrecliente = nombrecliente;
  this.codigoPostal = codigoPostal;
  this.tipoDeServicio = tipoDeServicio;
  this.provincia = provincia;
  this.direcciondedestino = direcciondedestino;
  this.notificarnuevoviaje = function () {
    console.log("Se ha creado un nuevo viaje con destino a " + this.provincia);
  };
}

const viaje1 = new construirViaje(
  "Agustin",
  1416,
  "Regular",
  "Buenos Aires",
  "Argerich 2300"
);

console.log("Se ha creado un nuevo viaje con destino a " + viaje1.provincia);

const listaProvincias = [
  "Buenos Aires",
  "Córdoba",
  "Mendoza",
  "Neuquén",
  "Río Negro",
  "Santa Cruz",
  "Tierra del Fuego",
  "San Luis",
  "La Pampa",
  "La Rioja",
  "Chubut",
  "Santa Fe",
  "Corrientes",
  "Chaco",
  "Jujuy",
  "Tucuman",
  "Entre Rios",
  "Rio Negro",
  "Formosa",
  "Salta",
  "Catamarca",
];

console.log("Actualmente nuestro servicio llega a: " + listaProvincias.sort());

const listaChoferes = [
  {
    nombre: "Juan Gomez",
    estado: "Activo",
    vehiculo: "Chevrolet",
    dni: 45667899,
    zona: "CABA",
  },
  {
    nombre: "Natalia Artigas",
    estado: "Activo",
    vehiculo: "Renault",
    dni: 45667895,
    zona: "Zona Norte",
  },
  {
    nombre: "Mariano Suarez",
    estado: "Activo",
    vehiculo: "FIAT",
    dni: 45667892,
    zona: "Zona Sur",
  },
  {
    nombre: "Adelis Lopez",
    estado: "Activo",
    vehiculo: "Audi",
    dni: 45667865,
    zona: "Zona Oeste",
  },
];

listaChoferes.push({
  nombre: "Carlos Calvo",
  estado: "Activo",
  vehiculo: "Mercedes Benz",
  dni: 33456789,
  zona: "Gran Buenos Aires",
});

console.log("Nuestros choferes cuentan con vehículos de las primeras marcas: ");

for (const vehiculo of listaChoferes) {
  console.log(vehiculo.vehiculo);
}

listaChoferes.sort((o1, o2) => {
  if (o1.nombre < o2.nombre) {
    return -1;
  } else if (o1.nombre > o2.nombre) {
    return 1;
  } else {
    return 0;
  }
});

console.log(listaChoferes);
