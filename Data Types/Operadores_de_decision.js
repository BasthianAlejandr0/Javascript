//IF-ELSE

const agePerson = 17;
if (agePerson >= 18) {
    console.log(`La persona cumple con la edad para conducir`)
} else {
    console.log(`La persona no cumple con la edad para conducir,
        ya que su edad es ${agePerson} y le falta ${18 - agePerson}
        año(s) para cumplir con la edad minima.`);
}
