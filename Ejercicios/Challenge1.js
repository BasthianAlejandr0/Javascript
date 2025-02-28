/*Desafío de codificación 
# 1 Mark y John están tratando de comparar su IMC (Índice de Masa Corporal), que se calcula utilizando la fórmula: IMC = masa / altura ** 2 = masa / (altura * altura) (masa en kg y altura en metros). 
Sus tareas: 
    1. Almacene la masa y la altura de Mark y John en las variables 
    2. Calcule el IMC de ambos usando la fórmula (incluso puede implementar ambas versiones) 
    3. Cree una variable booleana 'markHigherBMI' que contenga información sobre si Mark tiene un IMC más alto que John. Datos de la prueba: § Dato 1: La marca pesa 78 kg y mide 1,69 m. John pesa 92 kg y mide 1,95 m. § Dato 2: La marca pesa 95 kg y mide 1,88 m. John pesa 85 kg y mide 1,76 m. BUENA SUERTE*/


// Datos de la prueba
markWeight = 78
markHeight = 1.69
johnWeight = 92
johnHeight = 1.95
let BMI_mark = (markWeight / (markHeight * markHeight)).toFixed(1);
console.log(`El BMI de Mark es: ${BMI_mark}`);
let BMI_jhon = (johnHeight / (johnWeight * johnWeight)).toFixed(5);
console.log(`El BMI de John es: ${BMI_jhon}`);
let markHigherBMI = BMI_mark > BMI_jhon;
console.log(`Mark tiene un IMC más alto que John: ${markHigherBMI}`);
