export default class CL_IEstudiante {

    leerCedula(){
        return prompt("Introduce la cedula");
    }
    
    leerNota1(){
        return prompt("Introduce la nota 1");
    }

    leerNota2(){
        return prompt("Introduce la nota 2");
    }
    leerNota3(){
        return prompt("Introduce la nota 3");
    }   

    reporteEstudiante(cedula, nota1, nota2, nota3,notaF){
        return `Cedula: ${cedula}
        <br> Nota 1: ${nota1}
        <br> Nota 2: ${nota2}
        <br> Nota 3: ${nota3}
        <br> Nota Final: ${notaF}`;
    }


    





}