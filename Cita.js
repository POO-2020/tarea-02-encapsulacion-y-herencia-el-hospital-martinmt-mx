import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"

export default class Cita{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} tiempo 
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */
    constructor(fecha, tiempo, doctor, paciente){
        this._fecha = fecha
        this._tiempo = tiempo
        this._doctor = doctor
        this._paciente = paciente
    }
    getPerfil(){
        return `${this._fecha.getFecha()}, ${this._tiempo.getFormato24()}, Dr. ${this._doctor.getApellidoPaterno()}, ${this._paciente.getNombre()}`
    }
}