class Plataforma{

#id;
#nombre;
#marca;

constructor(id, nombre, marca){
    this.#id = id;
    this.#nombre = nombre;
    this.#marca = marca;
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

getmarca(){
    return this.#marca;
}

setmarca(marca){
    this.#marca = marca;
}

crearPlataforma() {
        console.log("Plataforma registrada con éxito.");
    }

    actualizarPlataforma() {
        console.log("Datos de la Plataforma actualizados.");
    }



}
module.exports = Plataforma;
