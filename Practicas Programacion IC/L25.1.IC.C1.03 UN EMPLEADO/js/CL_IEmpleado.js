export default class IEmpleado{
    leerNombre(){
        return prompt("Ingrese el nombre del empleado");
    }
    LeerSueldoBase(){
        return prompt("Ingrese el sueldo base del empleado");
    }
    LeerAñosServicio(){
        return prompt("Ingrese los años de servicio del empleado");
    }
    reporteEmpleado(nombre, sueldoBase, añosServicio, aumento, sueldoFinal){
       return `Nombre ${nombre}
         <br>Sueldo Base ${sueldoBase}
         <br>Años de Servicio ${añosServicio}
         <br>aumento de sueldo ${aumento}
         <br>Sueldo Final ${sueldoFinal}`;
    }
    }