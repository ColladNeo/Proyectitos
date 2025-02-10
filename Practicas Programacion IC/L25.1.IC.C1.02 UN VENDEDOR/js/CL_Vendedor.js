export default class CL_Vendedor {
    constructor(cedula, montoVentas, sueldoBase){
        this.cedula = cedula;
        this.montoVentas = montoVentas;
        this.sueldoBase = sueldoBase;
    }
    set cedula(cedula){
        this._cedula = cedula;
    }
    get cedula(){
        return this._cedula;
    }
    
    set montoVentas(montoVentas){
        this._montoVentas = +montoVentas;
     }
    get montoVentas(){
        return this._montoVentas;
}
    set sueldoBase(sueldoBase){
        this._sueldoBase = +sueldoBase;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }
    comision(){
        return this.montoVentas * 20/100
    }
    sueldoFinal(){
        return this.sueldoBase + this.comision()
    }
}