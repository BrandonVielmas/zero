import { Zero, ZeroForm, ZeroH1 } from '../src/main.js'

const rootElement = document.getElementById('root');

const formUser = new ZeroForm(rootElement, '');

document.addEventListener('DOMContentLoaded', () => {

    formUser.setCampos = [
        {
            nombre: "Nombre",
            id: "formUserNombre",
            control: { tipo: 'input', type: 'text' }
        },
        {
            nombre: "Apellido",
            id: "formUserApellido",
            control: { tipo: 'input', type: 'text' }
        },
        {
            nombre: "Password",
            id: 'formUserPassword',
            control: { tipo: 'input', type: 'password' }
        }
    ];
    formUser.pintar();
    formUser.setSubmit = hola;

});

function hola() {
    console.log(formUser.getCampos)
    console.log('Enviando formulario');
}