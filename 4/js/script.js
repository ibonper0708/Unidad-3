function Calcular(){
    let a, b, c, d, e, f , g;
        a = parseInt(prompt("Introduce el primer número:"));
        b = parseInt(prompt("Introduce el segundo número:"));
        c = a + b;
        d = a - b;
        e = a * b;
        f = a / b;
        g = a % b;

        alert ("El primer número es: " + a + "\nEl segundo número es: " + b +
        "\nLa suma es: " + c + "\nLa resta es: " + d + "\nEl producto es: " + e +
        "\nLa división es: " + f + "\nEl resto es: " + g);
    }