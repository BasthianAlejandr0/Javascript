//5 falsy: 0, "", undefined, null, NaN
//6 truthy: "0", " ", [], {}

//--------------------Falsy--------------------
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
//-------------------truthy--------------------
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true

const money = 0;//Valor que al pasar por el condicional arroja false
//A continuacion con el condicional if-else se realizara una coersion de tipo para ver si el valor es falsy o truthy
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');//Como arroja false en la condición, se ejecuta el else
}

let height;//Valor que al pasar por el condicional arroja false
//A continuacion con el condicional if-else se realizara una coersion de tipo para ver si el valor es falsy o truthy
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');//Como arroja false en la condición, se ejecuta el else
}