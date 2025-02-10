export default class CL_IVendedor {
    leerCedula(){
        return prompt("Ingrese la cedula del vendedor")
    }
    LeerMontoVenta(){
        return prompt("Ingrese el monto de ventas del vendedor")
    }
    leerSueldoBase(){
        return prompt("Ingrese el sueldo base del vendedor")
    }

    reporteVendedor(cedula, com, sueldoF){
        return `Cedula ${cedula}
        <br>Comision ${com} 
        <br>Sueldo Final ${sueldoF}
        `
    }
    }
