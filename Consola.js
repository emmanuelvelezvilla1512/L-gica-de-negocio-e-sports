class Consola{

    #id;
    #numeroSerie;
    #nombre;
    #totalExistente;
    #direccionIP;
    #macUTP5;
    #macInalambrica;
    #totalControles;

    constructor(id, numeroSerie, nombre, totalExistente, direccionIP, macUTP5, macInalambrica, totalControles){
        this.#id = id;
        this.#numeroSerie = numeroSerie;
        this.#nombre = nombre;
        this.#totalExistente = totalExistente;
        this.#direccionIP = direccionIP;
        this.#macUTP5 = macUTP5;
        this.#macInalambrica = macInalambrica;
        this.#totalControles = totalControles;
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

    getnombre(){
        return this.#nombre;
    }

    setnombre(nombre){
        this.#nombre = nombre;
    }

    gettotalExistente(){
        return this.#totalExistente;
    }

    settotalExistente(totalExistente){
        this.#totalExistente = totalExistente;
    }

    getdireccionIP(){
        return this.#direccionIP;
    }

    setdireccionIP(direccionIP){
        this.#direccionIP = direccionIP;
    }

    getmacUTP5(){
        return this.#macUTP5;
    }

    setmacUTP5(macUTP5){
        this.#macUTP5 = macUTP5;
    }

    getmacInalambrica(){
        return this.#macInalambrica;
    }

    setmacInalambrica(macInalambrica){
        this.#macInalambrica = macInalambrica;
    }

    gettotalControles(){
        return this.#totalControles;
    }   

    settotalControles(totalControles){
        this.#totalControles = totalControles;
    }

    crearConsola() {
        console.log("Consola registrada con éxito.");
    }

    actualizarConsola() {
        console.log("Datos de la Consola actualizados.");
    }



}

module.exports = Consola;