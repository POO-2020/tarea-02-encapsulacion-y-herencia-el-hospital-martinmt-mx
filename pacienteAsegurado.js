import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, fechaFinVigencia, compañia}){
        super({nombre, fechaNacimiento, telefono})
        this._numeroPoliza = numeroPoliza
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
    }

    getPerfil(){
        return `${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}, ${this._fechaFinVigencia.getFecha()}, ${this._compañia}`
    }
}