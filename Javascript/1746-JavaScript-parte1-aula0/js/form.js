var botonAdicionar = document.querySelector('#adicionar-paciente');
var mensajesErrores = document.querySelector('#mensajes-errores');

botonAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    var form = document.querySelector('#form-adicionar')
    var paciente = capturarDatosPaciente(form);

    // Valiar paciente
    var errores = validarPaciente(paciente);
    if(errores.length > 0){
        exhibirErrores(errores)
        return;
    }

    adicionarPacientes(paciente);
    form.reset();
    mensajesErrores.innerHTML = '';
});

function adicionarPacientes(paciente) {
    var tabla = document.querySelector('#tabla-pacientes');
    var pacienteTr = construirTr(paciente);
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form) {

    var paciente = {
        // Capturando los datos del formulario
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function construirTr(paciente) {

    const caracteristicas = ['nombre', 'peso', 'altura', 'gordura', 'imc'];
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    for (let i = 0; i < caracteristicas.length; i++) {
        const caracteristica = caracteristicas[i];
        var caracteristicaTd;

        caracteristicaTd = 'var ' + caracteristica + "Td";
        caracteristicaTd = document.createElement('td');
        caracteristicaTd.classList.add('info-' + caracteristica);
        caracteristicaTd.textContent = paciente[caracteristica];

        pacienteTr.appendChild(caracteristicaTd);

    }
    
    return pacienteTr;
};

function validarPaciente(paciente) {
    const caracteristicas = ['nombre', 'peso', 'altura', 'gordura'];
    var errores = [];

    for (let i = 0; i < caracteristicas.length; i++) {
        const campo = caracteristicas[i];
        var element = paciente[campo].length;

        if ( element == 0) {
            errores.push('El campo "' + campo + '" no puede estar vacío')
        }
    };

    if (!validarPeso(paciente.peso)) {
        errores.push('El peso es incorrecto')
    }

    if (!validarAltura(paciente.altura)) {
        errores.push('La altura es incorrecto')
    }

    return errores;
}

function exhibirErrores(errores) {
    var ul = document.querySelector('#mensajes-errores');
    mensajesErrores.innerHTML = '';
    errores.forEach(error => {
        var li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    });
}