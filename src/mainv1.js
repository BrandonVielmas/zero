"use strict";

export class Zero {
    constructor(

    ){

    }

    static hola() {
        return "Hola desde zero"
    }

};

class ZeroElement {

    /**
     * 
     * @param {string} element 
     * @param {HTMLElement} padre 
     * @param {string} contenido 
     */
    constructor(element, padre, contenido) {
        this._element = element
        this._padre = padre
        this._contenido = contenido
    }

    pintar() {
        const domElement = document.createElement(this._element);      
        console.log(domElement); 
        domElement.innerText = this._contenido
        this._padre.appendChild(domElement)
        return domElement;
    }

}

export class ZeroForm extends ZeroElement {

    constructor(padre, contenido) {
        super('form', padre, contenido)
    }

    /**
     * @param {array} campos
     */
    set setCampos(campos) {
        this._campos = campos;
    }

    get getCampos() {
        return this._campos;
    }

    /**
     * @param {function} callback 
     */
    set setSubmit(callback) {
        this._btnSubmit.addEventListener('click', callback)
    }

    pintar() {
        this._domElement = document.createElement(this._element);

        for(let i = 0; i <= this.getCampos.length - 1; i++) {
            
            const contenedor = document.createElement('div');

            if(this.getCampos[i].control.tipo == 'input') {
                const label = document.createElement('label')
                label.innerText = this.getCampos[i].nombre;
                label.setAttribute('id', `lbl${this.getCampos[i].id}`)
                contenedor.appendChild(label);

                const item = document.createElement(this.getCampos[i].control.tipo)
                item.setAttribute("type", this.getCampos[i].control.type)
                item.setAttribute("id", `input${this.getCampos[i].id}`)
                contenedor.appendChild(item);
            }

            this._domElement.appendChild(contenedor);

        }

        const contenedor = document.createElement('div');
        
        this._btnSubmit = document.createElement('button');
        this._btnSubmit.textContent = 'Enviar';

        contenedor.appendChild(this._btnSubmit);

        this._domElement.appendChild(contenedor);

        this._padre.appendChild(this._domElement)

        this.desActivaDefault();
        return this._domElement;
    }

    desActivaDefault() {
        this._domElement.addEventListener('submit', e => {
            e.preventDefault();
        })
    }

}

export class ZeroH1 extends ZeroElement {

    /**
     * @param {HTMLElement} padre 
     * @param {string} contenido 
     */
    constructor(padre, contenido) {
        super('h1', padre, contenido)
    }

}
