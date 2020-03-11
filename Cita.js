import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Doctor from "./Doctor.js"
import Paciente from "./Paciente.js"

export default class Cita{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} tiempo 
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */
    constructor(fecha, tiempo, doctor, paciente){
        this.fecha = fecha
        this.tiempo = tiempo
        this.doctor = doctor
        this.paciente = paciente
    }
    getPerfil(){
        return `${this.fecha.getFecha()}, ${this.tiempo.getFormato24()}, Dr. ${this.doctor.nombre.apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`
    }
}