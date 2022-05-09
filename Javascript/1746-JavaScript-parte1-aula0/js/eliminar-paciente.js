var pacientes = document.querySelectorAll('.paciente');
var tabla = document.querySelector('#tabla-pacientes');

tabla.addEventListener('dblclick', (event) => {
    event.target.parentNode.classList.add('fadeOut');
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});

// pacientes.forEach(paciente => {
//     paciente.addEventListener('dblclick', () => {
//         this.remove();
//     });
// });