function comprobar(){
    let nota;
    nota = parseInt(document.getElementById("nota").value, 10);
    if (nota>0 && nota<10) {
        if (nota>=5){
        document.getElementById("mensaje").innerHTML="Aprobado";
        }
        if (nota<5){
        document.getElementById("mensaje").innerHTML="Suspenso";
    }
}
    else {
        document.getElementById("mensaje").innerHTML="No es válido";
    }
}