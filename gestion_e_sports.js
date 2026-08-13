





const Usuario = require('./Usuario.js');
const Atleta = require('./Atleta.js');
const Entrenador = require('./Entrenador.js');
const Administrativo = require('./Administrativo.js');
const Proveedor = require('./Proveedor.js');
const Equipo = require('./Equipo.js');
const Trofeo = require('./Trofeo.js');
const Juego = require('./Juego.js');
const Plataforma = require('./Plataforma.js');
const Consola = require('./Consola.js');
const Control = require('./Control.js');
const SesionEntrenamiento = require('./SesionEntrenamiento.js');


const usuario1 = new Usuario(1, "CC", "123", "Carlos", 20, "M", "C11", "Laureles", "Cl 50", "300", "@carlos", "Gamer", "Charlie", "123");
const atleta1 = new Atleta(2, "CC", "456", "Ana", 22, "F", "C12", "El Poblado", "Cl 70", "301", "@ana", "Gamer", "AnaGamer", "456", 1000, 5);
const entrenador1 = new Entrenador(3, "CC", "789", "Juan", 30, "M", "C13", "Belén", "Cl 90", "302", "@juan", "Gamer", "JuanCoach", "789", "Especialidad 1", 10);
const administrativo1 = new Administrativo(4, "CC", "012", "María", 25, "F", "C14", "Suba", "Cl 110", "303", "@maria", "Gamer", "MaríaAdmin", "012", "Área 1");
const proveedor1 = new Proveedor(5, "CC", "345", "Pedro", 35, "M", "C15", "Engativá", "Cl 130", "304", "@pedro", "Gamer", "PedroProv", "345", "Empresa A");
const trofeo1 = new Trofeo(1, "Copa Local", 100);
const equipo1 = new Equipo(1, "Equipo A", "LOL", 10, "Pro", trofeo1);
const juego1 = new Juego(1, "LOL", "T", "PC", 10, "MOBA", 5);
const plataforma1 = new Plataforma(1, "PC", "Asus");
const consola1 = new Consola(1, "SN01", "Play 5", 1, "192.168.1.1", "AA", "BB", 2);
const control1 = new Control(1, "CTRL1", "Play 5", "Inalámbrico");
const sesion1 = new SesionEntrenamiento(1, "2026-08-15", "14:00", "16:00", juego1, usuario1);


console.log(`Usuario: ${usuario1.getnumeroDocumento()} | direccion: ${usuario1.getdireccionDomicilio()} | bario: ${usuario1.getbarrio()}`);
console.log(`Atleta: ${atleta1.getnombreCompleto()} | Puntos: ${atleta1.getpuntosExperiencia()} | Nivel: ${atleta1.getnivel()}`);
console.log(`Entrenador: ${entrenador1.getnombreCompleto()} | Especialidad: ${entrenador1.getespecialidad()} | Experiencia: ${entrenador1.getaniosExperiencia()} años`);
console.log(`Administrativo: ${administrativo1.getnombreCompleto()} | Cargo: ${administrativo1.getcargo()}`);
console.log(`Proveedor: ${proveedor1.getnombreCompleto()} | Empresa: ${proveedor1.getempresa()}`);
console.log(`Trofeo: ${trofeo1.getnombre()} | Puntos: ${trofeo1.getpuntos()}`);
console.log(`Equipo: ${equipo1.getnombre()} | Juego: ${equipo1.getjuego()} | Nivel: ${equipo1.getnivel()}`);
console.log(`Juego: ${juego1.getnombre()} | Tipo: ${juego1.gettipo()}`);
console.log(`Plataforma: ${plataforma1.getnombre()} | Marca: ${plataforma1.getmarca()}`);
console.log(`Consola: ${consola1.getnombre()} | Serie: ${consola1.getnumeroSerie()} | IP: ${consola1.getdireccionIP()}`);
console.log(`Control:  ${control1.getnumeroSerie()} | Tipo: ${control1.gettipo()}`);
console.log(`Sesión: ${sesion1.getfechaAgendamiento()} | Inicio: ${sesion1.gethoraInicio()} | Fin: ${sesion1.gethoraFinalizacion()}`);