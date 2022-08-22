const numbers = [5,3,4,7,2,1,9,7,7,9,10]
let suma = 0;
let promedio = 0;
for (let i = 0; i < numbers.length; i++) {
    suma = suma + numbers[i];
    
}
promedio = suma / numbers.length
console.log(suma)
console.log(promedio)