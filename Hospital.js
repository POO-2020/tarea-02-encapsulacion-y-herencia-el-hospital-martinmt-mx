import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Nombre from "./Nombre.js"
import Paciente from "./Paciente.js"
import Doctor from "./Doctor.js"
import Cita from "./Cita.js"
export default class Hospital{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion
     * @param {Doctor} doctores
     * @param {Cita} citas
     */
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = new Array()
        this.citas = new Array()
    }

    registrarDoctor(doctor){
        this.doctores.push(doctor)
    }

    listarDoctores(){
        this.doctores.forEach((doctor, i) => {
            console.log(`${i} ${doctor.getPerfil()}`)
        })
    }

    registrarCita(cita){
        this.citas.push(cita)
    }

    listarCitas(){
        this.citas.forEach((cita, i) => {
            console.log(`${i} ${cita.getPerfil()}`)
        })
    }
}