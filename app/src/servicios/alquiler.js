export default class ServicioAlquiler {
    static consultarDisponibilidad(cantidadDePersonas, fechaIngreso, fechaEgreso){
        return Promise.resolve(true);
    }

    static calcularAlquiler(cantidadDePersonas, fechaIngreso, fechaEgreso) {
        let precioPorDia = 0;
        let cantidadDeDias = fechaEgreso - fechaIngreso;

        if (cantidadDePersonas <= 2){
            precioPorDia = 2000;
        }
        if (cantidadDePersonas > 2 && cantidadDePersonas <= 4 ){
            precioPorDia = 3000;
        }
        if (cantidadDePersonas > 4 && cantidadDePersonas <= 6){
            precioPorDia = 4000;
        }
        return Promise.resolve(precioPorDia * cantidadDeDias);
    }

    static calcularMontoFinal(montoDeAlquiler, valorDeSenia) {
        return Promise.resolve(montoDeAlquiler - valorDeSenia);
    }

    static guardarReserva(){
        return Promise.resolve(true);
    }
}
