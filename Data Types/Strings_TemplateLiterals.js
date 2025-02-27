const firstName = 'Dakota';
const rol = 'Mascota';
const birthYear = '2022';
const Dakota = "Soy " + firstName + " y soy la " + rol + " de Basthian y tengo " + (2025 - birthYear) + " años";
console.log(Dakota);
console.log("-------------Ahora utilicemos template string--------------------")
//Template literals
const dakotaNew = `Soy ${firstName} y soy la ${rol} de Basthian y tengo ${2025 - birthYear} años.`;
console.log(dakotaNew);