const usuarios = {
  "francisco": { clave: "betis123", correo: "francisco@betis.com", rol: "socio", validado: false },
  "admin": { clave: "admin123", correo: "admin@betis.com", rol: "administrador", validado: true }
};

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensajeLogin");

  if (usuarios[usuario] && usuarios[usuario].clave === clave) {
    mensaje.textContent = `Bienvenido, ${usuario} (${usuarios[usuario].rol})`;
    mostrarPanel(usuarios[usuario].rol);
  } else {
    mensaje.textContent = "Credenciales incorrectas";
  }
});

function mostrarPanel(rol) {
  document.querySelector(".panelAdmin").style.display = rol === "administrador" ? "block" : "none";
  document.querySelector(".areaSocio").style.display = rol === "socio" ? "block" : "none";
}

document.getElementById("recuperarForm").addEventListener("submit", e => {
  e.preventDefault();
  const correo = document.getElementById("correoRecuperar").value;
  const mensaje = document.getElementById("mensajeRecuperar");
  const usuario = Object.entries(usuarios).find(([_, datos]) => datos.correo === correo);
  mensaje.textContent = usuario ? `Correo enviado a ${correo}` : "Correo no registrado";
});

document.getElementById("validarForm").addEventListener("submit", e => {
  e.preventDefault();
  const codigo = document.getElementById("codigoValidacion").value;
  const mensaje = document.getElementById("mensajeValidacion");
  if (codigo === "ABC123") {
    usuarios["francisco"].validado = true;
    mensaje.textContent = "Correo validado correctamente";
  } else {
    mensaje.textContent = "Código incorrecto";
  }
});

function exportarCSV() {
  const datos = [
    { socio: "Francisco", partido: "Betis vs Barça", pagado: false },
    { socio: "María", partido: "Betis vs Sevilla", pagado: true }
  ];
  let csv = "Socio,Partido,Estado\n";
  datos.forEach(d => {
    csv += `${d.socio},${d.partido},${d.pagado ? "Pagado" : "Pendiente"}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pagos.csv";
  a.click();
}
function gestionarSocios() {
  alert("Aquí podrás ver y editar la lista de socios. (Función aún en desarrollo)");
}

function controlarPagos() {
  alert("Aquí podrás controlar los pagos de los socios. (Función aún en desarrollo)");
}

