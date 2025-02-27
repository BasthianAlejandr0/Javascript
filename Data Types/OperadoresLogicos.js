const esConductor = true;
const tieneVision = true;
console.log(esConductor && tieneVision);//Se tiene que verificar que los dos variables se cumplan
console.log(esConductor || tieneVision);//Una de las dos sentencias se tienen que cumplir
console.log(!esConductor);//Negacion de un valor
const debeManejar = esConductor && tieneVision;

//Flujo condicional de si puede manejar 
if (debeManejar === true) {
    console.log('Puede manejar');
} else {
    console.log('Puede manejar');
}