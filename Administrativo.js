const Usuario = require('./Usuario.js');

class Administrativo extends Usuario {
  #cargo;
  #area;

  constructor(
    id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
    comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
    tipoUsuario, nickname, contrasena, cargo, area
  ) {
    super(
      id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
      comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
      tipoUsuario, nickname, contrasena
    );
    this.#cargo = cargo;
    this.#area = area;
  }

  getcargo() { 
    return this.#cargo;
 }
  setcargo(cargo) {
    this.#cargo = cargo;
 }

  getarea() {
    return this.#area;
    }

  setarea(area) {
 this.#area = area;
 }
}


module.exports = Administrativo;