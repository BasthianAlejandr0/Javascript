/*
1. Solicite al usuario tres valores numéricos (pueden ser enteros o decimales).
2. Solicite al usuario una operación matemática entre: +, -, *, /, ** (potencia) o % (módulo).
3. Determine automáticamente el tipo de dato de cada número ingresado y muéstralo en la consola.
4. vEjecute la operación seleccionada entre los tres valores siguiendo esta regla:
5. Si la operación es potencia (**), se debe aplicar así: num1 ** (num2 ** num3).
6. Si la operación es módulo (%), se debe aplicar así: num1 % num2 % num3.
7. En cualquier otro caso, la operación se aplicará de izquierda a derecha: ((num1 OP num2) OP num3).
8. nMuestre el resultado final de la operación.
9. Maneje errores como división por cero o ingreso de valores inválidos.
*/

let peticion1 = prompt('Ingrese un valor entero o decimal');
let peticion2 = prompt('Ingrese un valor entero o decimal');
let peticion3 = prompt('Ingrese un valor entero o decimal');
let operacion = prompt('Ingrese una operación matemática entre: +, -, *, /, ** (potencia) o % (módulo)');


function validador(entero, decimal) {
    if ((peticion1, peticion2, peticion3) === entero || (peticion1, peticion2, peticion3) === decimal) {
        console.log(`Los valores ingresado son ${peticion1}, ${peticion2}, ${peticion3}`);
        let suma = peticion1 + peticion2 + peticion3;
        let resta = peticion1 - peticion2 - peticion3;
        let multiplicacion = peticion1 * peticion2 * peticion3;
        let division = peticion1 / peticion2 / peticion3;
        let potencia = peticion1 ** (peticion2 ** peticion3);
        let modulo = peticion1 % peticion2 % peticion3;
        switch (operacion) {
            case '+':
                console.log(`El resultado de la suma es ${suma}`);
                break;
            case '-':
                console.log(`El resultado de la resta es ${resta}`);
                break;
            case '*':
                console.log(`El resultado de la multiplicación es ${multiplicacion}`);
                break;
            case '/':
                console.log(`El resultado de la división es ${division}`);
                break;
            case '**':
                console.log(`El resultado de la potencia es ${potencia}`);
                break;
            case '%':
                console.log(`El resultado del módulo es ${modulo}`);
                break;
            default:
                console.log('Operación no reconocida');
                break;
        }
    }
}
validador(entero, decimal);