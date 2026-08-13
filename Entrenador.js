const Usuario = require('./Usuario.js');

class Entrenador extends Usuario {
  #especialidad;
  #aniosExperiencia;

  constructor(
    id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
    comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
    tipoUsuario, nickname, contrasena, especialidad, aniosExperiencia
  ) {
    super(
      id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
      comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
      tipoUsuario, nickname, contrasena
    );
    this.#especialidad = especialidad;
    this.#aniosExperiencia = aniosExperiencia;
  }

  getespecialidad() {
    return this.#especialidad;
 }

  setespecialidad(especialidad) {
 this.#especialidad = especialidad;
 }

  getaniosExperiencia() {
     return this.#aniosExperiencia;
     }

  setaniosExperiencia(aniosExperiencia) {
     this.#aniosExperiencia = aniosExperiencia; 
    }
}


module.exports = Entrenador;