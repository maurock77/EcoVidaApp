let totalActividades = 0;

const consejos = [
    "Utiliza transporte público al menos una vez por semana.",
    "Reduce el uso de plásticos de un solo uso.",
    "Recicla papel, vidrio y plástico.",
    "Desconecta los aparatos eléctricos que no utilices.",
    "Utiliza bolsas reutilizables.",
    "Ahorra agua al cepillarte los dientes."
];

document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ DOM cargado");

    document
        .getElementById("btnGuardarPerfil")
        .addEventListener("click", guardarPerfil);

    document
        .getElementById("btnRegistrarActividad")
        .addEventListener("click", registrarActividad);

    document
        .getElementById("btnConsejo")
        .addEventListener("click", mostrarConsejo);

    document
        .getElementById("btnCalcularImpacto")
        .addEventListener("click", calcularImpacto);

    cargarPerfil();

    mostrarConsejo();
});

function guardarPerfil() {

    let nombre = document.getElementById("nombre").value;
    let meta = document.getElementById("meta").value;

    if (nombre.trim() === "" || meta.trim() === "") {

        alert("Ingrese todos los datos del perfil.");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("meta", meta);

    document.getElementById("perfilInfo").innerHTML =
        `Bienvenido ${nombre}. Tu meta es ${meta} actividades sostenibles al mes.`;

    console.log("Perfil guardado correctamente");
}

function cargarPerfil() {

    let nombre = localStorage.getItem("nombre");
    let meta = localStorage.getItem("meta");

    if (nombre && meta) {

        document.getElementById("perfilInfo").innerHTML =
            `Bienvenido nuevamente ${nombre}. Meta: ${meta} actividades sostenibles al mes.`;
    }
}

function registrarActividad() {

    totalActividades++;

    document.getElementById("contador").innerText =
        totalActividades;

    console.log("Actividad registrada");

    if (totalActividades % 5 === 0) {

        alert("🎉 Felicitaciones. Has obtenido un reconocimiento ecológico.");
    }
}

function mostrarConsejo() {

    let numeroAleatorio =
        Math.floor(Math.random() * consejos.length);

    document.getElementById("consejo").innerText =
        consejos[numeroAleatorio];
}

function calcularImpacto() {

    let cantidad = parseInt(
        document.getElementById("cantidadImpacto").value
    );

    if (isNaN(cantidad) || cantidad <= 0) {

        alert("Ingrese una cantidad válida.");
        return;
    }

    let ahorroCO2 = cantidad * 2;

    document.getElementById("resultadoImpacto").innerHTML =
        `Has contribuido a reducir aproximadamente <strong>${ahorroCO2} kg de CO₂</strong>.`;

    console.log("Impacto calculado");
}