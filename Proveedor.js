const Usuario = require('./Usuario.js');

class Proveedor extends Usuario {
  #empresa;

  constructor(
    id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
    comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
    tipoUsuario, nickname, contrasena, empresa
  ) {
    super(
      id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo,
      comuna, barrio, direccionDomicilio, numeroTelefono, redSocial,
      tipoUsuario, nickname, contrasena
    );
    this.#empresa = empresa;
  }

  getempresa() { return this.#empresa; }
  setempresa(empresa) { this.#empresa = empresa; }
}


module.exports = Proveedor;