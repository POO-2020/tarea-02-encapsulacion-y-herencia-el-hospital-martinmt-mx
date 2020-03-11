import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Nombre from "./Nombre.js"
import Paciente from "./Paciente.js"
import Doctor from "./Doctor.js"
import Cita from "./Cita.js"
import Hospital from "./Hospital.js"
class Main{
    constructor() {
        this.hospital = new Hospital("Hospital", "IMSS");
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
        let paciente1 = new Paciente(new Nombre("Martin", "Mojica", "Torres"), new Fecha(3,4,2001), 3122739451)
        console.log(paciente1.getPerfil())
    }
    probarDoctor(){
        let doctor = new Doctor("JLM19", "Cirujano", new Nombre("Juan", "López", "Méndez"), 3213339999)
        console.log(doctor.getPerfil())
    }
    probarCita(){
        let cita1 = new Cita(new Fecha(3,4,2020), new Tiempo(3,30,"pm"), new Doctor("JLM19", "Cirujano", new Nombre("Juan", "López", "Méndez"), 3213339999), new Paciente(new Nombre("Martin", "Mojica", "Torres"), new Fecha(3,4,2001), 3122739451))
        console.log(cita1.getPerfil())
    }

    
    agregarDoctor() {
        let doctor1 = new Doctor("LPL19", "Cirujano", new Nombre("Luis", "Pérez", "Lopez"),3124556366)
        let doctor2 = new Doctor("BIM19", "Pediatra", new Nombre("Braulio", "I", "Madero"),3125436644)
        let doctor3 = new Doctor("YFB19", "Ginecologo", new Nombre("Yovanha", "Fajardo", "Borjas"), 3127548433)
    
        this.hospital.registrarDoctor(doctor1)
        this.hospital.registrarDoctor(doctor2)
        this.hospital.registrarDoctor(doctor3)
        this.hospital.listarDoctores()
    }
    
    agregarCita() {
        let cita1 = new Cita(new Fecha(24,2,2021), new Tiempo(4,40,"pm"), new Doctor("LPL19", "Cirujano", new Nombre("Luis", "Pérez", "Lopez"),3124556366), new Paciente(new Nombre("Martin", "Mojica", "Torres"), new Fecha(3,4,2001), 3122739451))
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