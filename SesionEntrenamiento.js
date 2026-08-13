class SesionEntrenamiento {

    #id;
    #fechaAgendamiento;
    #horaInicio;
    #horaFinalizacion;
    #juegoAsociado;
    #arbitro;

    constructor(id, fechaAgendamiento, horaInicio, horaFinalizacion, juegoAsociado, arbitro) {
        this.#id = id;
        this.#fechaAgendamiento = fechaAgendamiento;
        this.#horaInicio = horaInicio;
        this.#horaFinalizacion = horaFinalizacion;
        this.#juegoAsociado = juegoAsociado;
        this.#arbitro = arbitro;
    }

    getid() {
        return this.#id;
    }

    setid(id) {
        this.#id = id;
    }

    getfechaAgendamiento() {
        return this.#fechaAgendamiento;
    }   

    setfechaAgendamiento(fechaAgendamiento) {
        this.#fechaAgendamiento = fechaAgendamiento;
    }

    gethoraInicio() {
        return this.#horaInicio;
    }

    sethoraInicio(horaInicio) {
        this.#horaInicio = horaInicio;
    }

    gethoraFinalizacion() {
        return this.#horaFinalizacion;
    }

    sethoraFinalizacion(horaFinalizacion) {
        this.#horaFinalizacion = horaFinalizacion;
    }

    getjuegoAsociado() {
        return this.#juegoAsociado;
    }

    setjuegoAsociado(juegoAsociado) {
        this.#juegoAsociado = juegoAsociado;
    }

    getarbitro() {
        return this.#arbitro;
    }

    setarbitro(arbitro) {
        this.#arbitro = arbitro;
    }

    crearsesionEntrenamiento() {
        console.log("SesiónEntrenamiento creada con éxito.");
    }

    actualizarSesionEntrenamiento() {
        console.log("Datos de la SesiónEntrenamiento actualizados.");
    }



}

module.exports = SesionEntrenamiento;