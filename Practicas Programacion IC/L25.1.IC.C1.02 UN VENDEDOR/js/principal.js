/*Analisis 
UN VENDEDOR
De un vendedor se conoce su cedula del monto total de sus ventas,sueldo base.
Se sabe que el vendedor se gana una comision del 20% del total de sus ventas.
Se requiere un progreso que reporte:
a)La cedula del vendedor
b)Monto a cobrar por comisiones
c)Monto del sueldo Final
*/

import CL_IVendedor from './CL_IVendedor.js'
import CL_Vendedor from './CL_Vendedor.js'

let iVendedor = new CL_IVendedor(),
    ced = iVendedor.leerCedula(),
    mont = iVendedor.LeerMontoVenta(),
    suelBase = iVendedor.leerSueldoBase(),

    vendedor = new CL_Vendedor(ced, mont, suelBase),

    salida = document.getElementById("salida")
    salida.innerHTML = iVendedor.reporteVendedor(vendedor.cedula, vendedor.comision(), vendedor.sueldoFinal())
