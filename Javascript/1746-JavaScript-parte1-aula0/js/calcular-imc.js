var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso')
    var tdAltura = paciente.querySelector('.info-altura')
    var tdIMC = paciente.querySelector('.info-imc')

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc;
    

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if (!pesoEsValido) {
        tdIMC.textContent = 'Peso Incorrecto';
        pesoEsValido = false;
        paciente.classList.add('paciente-incorrecto');
    
    }

    if (!alturaEsValida) {
        tdIMC.textContent = 'Altura Incorrecta';
        alturaEsValida = false;
        paciente.classList.add('paciente-incorrecto');
    }

    if (pesoEsValido && alturaEsValida) {
        tdIMC.textContent = calcularIMC(peso,altura)
    }
}

function calcularIMC(peso,altura){
    imc = peso / (altura * altura);
    return imc.toFixed(2)
};

function validarPeso(peso) {
    if (peso > 0 && peso < 200) {
        return true;
    } else {
        return false;
    };
};

function validarAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    };
};