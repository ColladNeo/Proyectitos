/*UN EMPLEADO
De un empleado se conocen los siguientes datos: nombre, sueldo base y años de servicio; el
empleado recibirá un aumento del 15% de su sueldo base si tiene más de 5 años de servicio.
Desarrolle un programa que muestre el nombre, el aumento y el nuevo sueldo del empleado.*/

import IEmpleado from "./CL_IEmpleado.js";
import Empleado from "./CL_Empleado.js";

let Iemple = new IEmpleado(),
    n = Iemple.leerNombre(),
    sb = Iemple.LeerSueldoBase(),
    as = Iemple.LeerAñosServicio(),

    emple = new Empleado(n, sb, as),
    salida = document.getElementById("salida");
    salida.innerHTML = Iemple.reporteEmpleado(emple.nombre, emple.sueldoBase, emple.añosServicio, emple.aumentoSueldo(), emple.sueldoFinal());