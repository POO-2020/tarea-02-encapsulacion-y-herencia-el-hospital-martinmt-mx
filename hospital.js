import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
export default class Hospital{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion
     * @param {Doctor} doctores
     * @param {Cita} citas
     */
    constructor({nombre, direccion}){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }
    _encontrarDoctor(doctor){
        let result = this._doctores.find(d => d.esIgualA(doctor))
        return result
    }
    
    registrarDoctor(doctor){
        if(this._encontrarDoctor(doctor) !== undefined){
            return false
        }
        this._doctores.push(doctor)
        return true
    }

    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`${i} ${doctor.getPerfil()}`)
        })
    }

    registrarCita(cita){
        this._citas.push(cita)
    }

    listarCitas(){
        this._citas.forEach((cita, i) => {
            console.log(`${i} ${cita.getPerfil()}`)
        })
    }
}
