class Juego{

#id;
#nombre;
#calificacionesESRB;
#plataformasDisponibles;
#numeroJugadores;
#tipo;
#totalExistencias;

constructor(id, nombre, calificacionesESRB, plataformasDisponibles, numeroJugadores, tipo, totalExistencias){
    this.#id = id;
    this.#nombre = nombre;
    this.#calificacionesESRB = calificacionesESRB;
    this.#plataformasDisponibles = plataformasDisponibles;
    this.#numeroJugadores = numeroJugadores;
    this.#tipo = tipo;
    this.#totalExistencias = totalExistencias;}


    getid(){
        return this.#id;
    }

    setid(id){
        this.#id = id;
    }

    
    getnombre(){
        return this.#nombre;
    }

    setnombre(nombre){
        this.#nombre = nombre;
    }

     getcalificacionesESRB(){
        return this.#calificacionesESRB;
    }

    setcalificacionesESRB(calificacionesESRB){
        this.#calificacionesESRB = calificacionesESRB;
    }

     getplataformasDisponibles(){
        return this.#plataformasDisponibles;
    }

    setplataformasDisponibles(plataformasDisponibles){
        this.#plataformasDisponibles = plataformasDisponibles;
    }

    getnumeroJugadores(){
        return this.#numeroJugadores;
    }

    setnumeroJugadores(numeroJugadores){
        this.#numeroJugadores = numeroJugadores;
    }   


     gettipo(){
        return this.#tipo;
    }

    settipo(tipo){
        this.#tipo = tipo;
    } 

    gettotalExistencias(){
        return this.#totalExistencias;
    }

    settotalExistencias(totalExistencias){
        this.#totalExistencias = totalExistencias;
    } 


    crearJuego() {
        console.log("Juego registrado con éxito.");
    }

    actualizarJuego() {
        console.log("Datos del Juego actualizados.");
    }


    }

    module.exports = Juego;
















