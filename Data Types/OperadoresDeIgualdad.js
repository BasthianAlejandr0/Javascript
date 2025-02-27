// (---) significa exactamente igual

const age = 18;
if (age === 18) console.log('Eres un adulto');
console.log(18 === '18');//Operador estricto por que no realiza coersion de tipo
console.log(18 == '18');//Operador flexible por que realiza coercion de tipo
const numFavorite = Number(prompt('cual es tu numero favoritos'));
console.log(typeof (numFavorite));
console.log(19 != '19');//Operador flexible por que realiza coercion de tipo
console.log(19 !== '19');//Operador estricto por que no realiza coersion de tipo