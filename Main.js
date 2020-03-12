import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./Hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"
class Main{
    constructor() {
        this.hospital = new Hospital("IMMS", "Av. Carranza 123");
    }
    probarFecha(){
        let fecha1 = new Fecha(12,4,2022)
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getFecha())
        console.log(fecha1.getDiaFecha())
    }
    probarTiempo(){
        let tiempo = new Tiempo(12, 32, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    probarNombre(){
        let nombre = new Nombre("Martin", "Mojica", "Torres")
        console.log(nombre.getNombreCompleto())
        console.log(nombre.getApellidoNombre())
        console.log(nombre.getIniciales())
    }
    probarPaciente(){
        let datosPaciente1 = {
            nombre: new Nombre("Martin", "Mojica", "Torres"),
            fechaNacimiento: new Fecha(3,4,2001),
            telefono: 3122739451
        }
        let paciente1 = new Paciente(datosPaciente1)

        let datosPaciente2 = {
            nombre: new Nombre("Martin", "Mojica", "Torres"),
            fechaNacimiento: new Fecha(3,4,2001),
            telefono: 3122739451,
            numeroPoliza: 123123,
            fechaFinVigencia: new Fecha(2,8,2023),
            compañia: "IMSS2"
        }
        let paciente2 = new PacienteAsegurado(datosPaciente2)
        console.log(paciente1.getPerfil())
        console.log(paciente2.getPerfil())
    }
    probarDoctor(){
        let datosDoctor = {cedula: "JLM19",
        especialidad: "Cirujano",
        nombre: new Nombre("Juan", "López", "Méndez"),
        telefono: 3213339999}
        let doctor = new Doctor(datosDoctor)
        console.log(doctor.getPerfil())
    }
    probarCita(){
        let datosPaciente1 = {
            nombre: new Nombre("Martin", "Mojica", "Torres"),
            fechaNacimiento: new Fecha(3,4,2001),
            telefono: 3122739451
        }
        let datosDoctor = {cedula: "JLM19",
        especialidad: "Cirujano",
        nombre: new Nombre("Juan", "López", "Méndez"),
        telefono: 3213339999}
        let cita1 = new Cita(new Fecha(3,4,2020),
        new Tiempo(3,30,"pm"),
        new Doctor(datosDoctor),
        new Paciente(datosPaciente1))
        console.log(cita1.getPerfil())
    }

    
    agregarDoctor() {
        let datosDoctor1 = {cedula: "LPL19",
        especialidad: "Cirujano",
        nombre: new Nombre("Luis", "Pérez", "Lopez"),
        telefono: 3124556366
        }
        let datosDoctor2 = {cedula: "BIM19",
        especialidad: "Pediatra",
        nombre: new Nombre("Braulio", "I", "Madero"),
        telefono: 3125436644
        }
        let datosDoctor3 = {cedula: "YFB19",
        especialidad: "Ginecologo",
        nombre: new Nombre("Yovanha", "Fajardo", "Borjas"),
        telefono: 3127548433
        }
        let doctor1 = new Doctor(datosDoctor1)
        let doctor2 = new Doctor(datosDoctor2)
        let doctor3 = new Doctor(datosDoctor3)
    
        this.hospital.registrarDoctor(doctor1)
        this.hospital.registrarDoctor(doctor2)
        this.hospital.registrarDoctor(doctor3)
        this.hospital.listarDoctores()
    }
    
    agregarCita() {
        let datosPaciente1 = {
            nombre: new Nombre("Martin", "Mojica", "Torres"),
            fechaNacimiento: new Fecha(3,4,2001),
            telefono: 3122739451
        }
        let datosDoctor1 = {cedula: "LPL19",
        especialidad: "Cirujano",
        nombre: new Nombre("Luis", "Pérez", "Lopez"),
        telefono: 3124556366
        }
        let cita1 = new Cita(new Fecha(24,2,2021),
        new Tiempo(4,40,"pm"),
        new Doctor(datosDoctor1),
        new Paciente(datosPaciente1))
        this.hospital.registrarCita(cita1)
        this.hospital.listarCitas()
    }
}
let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarNombre()
app.probarPaciente()
app.probarDoctor()
app.probarCita()
app.agregarDoctor()
app.agregarCita()