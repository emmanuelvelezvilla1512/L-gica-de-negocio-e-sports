class Usuario{
    #id;
    #tipoDocumento;
    #numeroDocumento;
    #nombreCompleto;
    #edad;
    #sexo;
    #comuna;
    #barrio;
    #direccionDomicilio;
    #numeroTelefono;
    #redSocial;
    #tipoUsuario;
    #nickname;
    #contrasena;
   

    constructor(id, tipoDocumento, numeroDocumento, nombreCompleto, edad, sexo, comuna, barrio, direccionDomicilio, numeroTelefono, redSocial, tipoUsuario, nickname, contrasena) {
        this.#id = id;
        this.#tipoDocumento = tipoDocumento;
        this.#numeroDocumento = numeroDocumento;
        this.#nombreCompleto = nombreCompleto;
        this.#edad = edad;
        this.#sexo = sexo;
        this.#comuna = comuna;
        this.#barrio = barrio;
        this.#direccionDomicilio = direccionDomicilio;
        this.#numeroTelefono = numeroTelefono;
        this.#redSocial = redSocial;
        this.#tipoUsuario = tipoUsuario;
        this.#nickname = nickname;
        this.#contrasena = contrasena;
    

    }

    getid(){
        return this.#id;
    }

    setid(id){
        this.#id = id;
    }
   
    gettipoDocumento(){
        return this.#tipoDocumento;
    }

    settipoDocumento(tipoDocumento){
       this.#tipoDocumento = tipoDocumento; 
    }

    getnumeroDocumento(){
        return this.#numeroDocumento;
    }

    setnumeroDocumento(numeroDocumento){
        this.#numeroDocumento = numeroDocumento;
    }

    getnombreCompleto(){
        return this.#nombreCompleto;
    }

    setnombreCompleto(nombreCompleto){
        this.#nombreCompleto = nombreCompleto;
    }

    getedad(){
        return this.#edad;
    }

    setedad(edad){
        this.#edad = edad;
    }

    getsexo(){
        return this.#sexo;
    }

    setsexo(sexo){
        this.#sexo = sexo;
    }

    getcomuna(){
        return this.#comuna;
    }

    setcomuna(comuna){
        this.#comuna = comuna;
    }

    getbarrio(){
        return this.#barrio;
    }

    setbarrio(barrio){
        this.#barrio = barrio;
    }

    getdireccionDomicilio(){
        return this.#direccionDomicilio;
    }

    setdireccionDomicilio(direccionDomicilio){
        this.#direccionDomicilio = direccionDomicilio;
    }

    getnumeroTelefono(){
        return this.#numeroTelefono;
    }

    setnumeroTelefono(numeroTelefono){
        this.#numeroTelefono = numeroTelefono;
    }

    getredSocial(){
        return this.#redSocial;
    }
    
    setredSocial(redSocial){
        this.#redSocial = redSocial;
    }

    gettipoUsuario(){
        return this.#tipoUsuario;
    
    }
    
    settipoUsuario(tipoUsuario){
        this.#tipoUsuario = tipoUsuario;
    }

    getnickname(){
        return this.#nickname;
    }

    setnickname(nickname){
        this.#nickname = nickname;
    }

    getcontrasena(){
        return this.#contrasena;
    }

    setcontrasena(contrasena){
        this.#contrasena = contrasena;
    }

   

    crearUsuario() {
        console.log("Usuario registrado con éxito.");
    }

    actualizarUsuario() {
        console.log("Datos del Usuario actualizados.");
    }

    



}

    module.exports = Usuario;
 

