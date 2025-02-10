/* Analisis de datos   
un negocio ofrece adquirir una laptop a credito.
Se debe pagar un monto inicial equivalente al 25% del precio de venta,
y el monto pendiente se pagara en cueotas iguales mensuales.
El plan de pagos permite un maximo de 4 cueotas mensales.Muestre 
a)Monto inicial
b)Monto pendiente
c)Numero de cueotas mensuales
d)Monto de cada cuota
*/
import Cl_iLaptop from "./Cl_iLaptop.js";
import Cl_Laptop from "./Cl_Laptop.js";

let iLaptop = new Cl_iLaptop(),
    pV = iLaptop.leerPrecioVenta(),
    nC = iLaptop.leerNumCuotas(),

    laptop = new Cl_Laptop(pV,nC),
    
    salida = document.getElementById("salida")
    salida.innerHTML = iLaptop.reporteLaptop(laptop.montoInicial(), laptop.montoPendiente(),
    laptop.numCuotas, laptop.montoCuotas())

