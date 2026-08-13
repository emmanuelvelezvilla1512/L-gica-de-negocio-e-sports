class Equipo {

#id;
#nombre;
#juego;
#horasjuego;
#nivel;
#trofeos;

constructor(id, nombre, juego, horasjuego, nivel, trofeos){

this.#id = id;
this.#nombre = nombre;
this.#juego = juego;
this.#horasjuego = horasjuego;
this.#nivel = nivel;
this.#trofeos = trofeos;

}

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

getjuego(){
    return this.#juego;
}

setjuego(juego){
    this.#juego = juego;
}

gethorasjuego(){
    return this.#horasjuego;
}

sethorasjuego(horasjuego){
    this.#horasjuego = horasjuego;
}

getnivel(){
    return this.#nivel;
}

setnivel(nivel){
    this.#nivel = nivel;
}

gettrofeos(){
    return this.#trofeos;
}

settrofeos(trofeos){
    this.#trofeos = trofeos;
}


    crearEquipo() {
        console.log("Equipo registrado con éxito.");
    }

    actualizarEquipo() {
        console.log("Datos del Equipo actualizados.");
    }

    

}
module.exports = Equipo;