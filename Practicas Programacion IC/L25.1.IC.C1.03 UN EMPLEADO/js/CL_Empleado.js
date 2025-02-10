export default class Empleado{
    contructor(nombre, sueldoBase, añosServicio){
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
        this.añosServicio = añosServicio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set sueldoBase(sueldoBase){
        this._sueldoBase = sueldoBase;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }
    set añosServicio(añosServicio){
        this._añosServicio = añosServicio;
    }
    get añosServicio(){
        return this._añosServicio;
    }
    aumentoSueldo(){
            if(this.añosServicio > 5) {
                return this.sueldoBase * 15/100;
            }
        }
    sueldoFinal(){
        return this.sueldoBase + this.aumentoSueldo();
    }
}