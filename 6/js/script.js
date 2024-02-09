function comprobar() {
    let numero;
    numero=parseInt(document.getElementById("numero").value, 10);
    if ((numero % 2) == 0) {
        document.getElementById("mensaje").innerHTML="Es par";
    }
    else{
        document.getElementById ("mensaje").innerHTML="Es impar";
    }
}
    
