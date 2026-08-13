class Trofeo{

#id;
#nombre;
#puntos;

constructor(id, nombre, puntos){
    this.#id = id;
    this.#nombre = nombre;
    this.#puntos = puntos;
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

getpuntos(){
    return this.#puntos;
}

setpuntos(puntos){
    this.#puntos = puntos;
}


    crearTrofeo() {
        console.log("Trofeo registrado con éxito.");
    }

    actualizarTrofeo() {
        console.log("Datos del Trofeo actualizados.");
    }

    

}

module.exports = Trofeo;


