export default class Cl_Laptop {
    constructor(precioVenta, numCuotas) {
        this.precioVenta = precioVenta;
        this.numCuotas = numCuotas;
    }

    set precioVenta(precioVenta) {
        this._precioVenta = +precioVenta;
    }

    get precioVenta() {
        return this._precioVenta;
    }

    set numCuotas(numCuotas) {
        this._numCuotas = +numCuotas;
    }

    get numCuotas() {
        return this._numCuotas;
    }

    montoInicial() {
        return this.precioVenta * 25 / 100;
    }

    montoPendiente() {
        return this.precioVenta - this.montoInicial();
    }

    montoCuotas() {
        return this.montoPendiente() / this.numCuotas;
    }
}

