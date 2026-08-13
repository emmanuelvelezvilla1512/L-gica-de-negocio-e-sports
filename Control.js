class Control{

#id;
#numeroSerie;
#plataformaConectada;
#tipo;

constructor(id, numeroSerie, plataformaConectada, tipo){
    this.#id = id;
    this.#numeroSerie = numeroSerie;
    this.#plataformaConectada = plataformaConectada;
    this.#tipo = tipo;
}

getid(){
    return this.#id;
}

setid(id){
    this.#id = id;
}

getnumeroSerie(){
    return this.#numeroSerie;
}

setnumeroSerie(numeroSerie){
    this.#numeroSerie = numeroSerie;
}


getplataformaConectada(){
    return this.#plataformaConectada;
}

setplataformaConectada(plataformaConectada){
    this.#plataformaConectada = plataformaConectada;
}


gettipo(){
    return this.#tipo;
}

settipo(tipo){
    this.#tipo = tipo;
}


crearControl() {
        console.log("Control registrado con éxito.");
    }

    actualizarControl() {
        console.log("Datos del Control actualizados.");
    }


}

module.exports = Control;
