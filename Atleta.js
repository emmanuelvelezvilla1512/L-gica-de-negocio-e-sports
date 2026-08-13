const Usuario = require('./Usuario.js');

class Atleta extends Usuario {
  #puntosExperiencia;
  #nivel;

  constructor(
    id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
    comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
    tipoUsuario, nickname, contrasena, puntosExperiencia , nivel 
  ) {
    super(
      id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
      comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
      tipoUsuario, nickname, contrasena
    );
    this.#puntosExperiencia = puntosExperiencia;
    this.#nivel = nivel;
  }

  getpuntosExperiencia() {
     return this.#puntosExperiencia;
     }

  setpuntosExperiencia(puntosExperiencia) { 
    this.#puntosExperiencia = puntosExperiencia;
 }

  getnivel() {
    return this.#nivel;
    }

  setnivel(nivel) {
    this.#nivel = nivel;
    }


}


module.exports = Atleta;