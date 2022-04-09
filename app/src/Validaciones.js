export const ValidarNombre = (nombre)=>{
    return !/\d/.test(nombre);
}
export const ValidarApellido = (apellido)=>{
    return !/\d/.test(apellido);
}
export const ValidarEmail = (email) =>{
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email);

}
//    /\d/.test(nombre) (compara lo que recibe como parametro contra una exprecion regular)
// /\d/ es una cadena de caracteres(numeros)
//mayor a un millon y max10