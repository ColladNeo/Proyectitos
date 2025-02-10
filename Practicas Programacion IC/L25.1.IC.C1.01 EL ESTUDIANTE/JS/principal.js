/**Analisis
 * Se tienen los siguientes datos de un estudiante\
 * cedula,nota1,nota2,nota3,.Se desea conocer la nota final del estudiante
 * que es la suma de las tres notas..El programa debe mostrar un reporte con
 *  la cedula,las tres notas y la nota final
 */

//importar la clase Estudiante
import CL_IEstudiante from "./CL_IEstudiante.js";
import Estudiante from "./CL_Estudiante.js";

let IEstud = new CL_IEstudiante(),
    c = IEstud.leerCedula(),
    n1 = IEstud.leerNota1(),
    n2 = IEstud.leerNota2(),
    n3 = IEstud.leerNota3(),

    estud = new Estudiante(c, n1, n2, n3),

    salida = document.getElementById("salida");
    salida.innerHTML = IEstud.reporteEstudiante(estud.cedula, estud.nota1, estud.nota2, estud.nota3, estud.notaFinal());

