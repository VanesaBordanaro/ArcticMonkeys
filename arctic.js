function saludar(){
    var nombre= prompt("Ingrese su nombre por favor:");
    alert(`Hola ${nombre}, ¡Gracias por haber elegido esta página!`);
}
saludar();


let edad = Number (prompt ("Introduce tu edad"));
if (edad >=18){
    alert ("Podes ingresar");
} else { 
    alert ("Al acceder queda bajo su entera responsabilidad");
}


var preguntar = true;
     
    onbeforeunload = preguntarAntesDeSalir;
     
    function preguntarAntesDeSalir()
    {
      if (preguntar)
        return "Está saliendo del sitio";
    }