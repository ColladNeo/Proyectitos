export default class Clase_iLaptop {
    leerPrecioVenta() {
        return prompt("Ingrese el precio de venta del la laptop");
    }
    leerNumCuotas() {
        return prompt("Ingrese el número de cuotas ");
    }

    reporteLaptop(mInicial,mPendiente,nCuotas,mCuotas) {
        return `
        <br> Monto inicial: ${mInicial}$
        <br> Monto pendiente: ${mPendiente}$
        <br> Numero de cuotas mensuales: ${nCuotas}$
        <br> Monto de cada cuota: ${mCuotas}$`;
    }
}


