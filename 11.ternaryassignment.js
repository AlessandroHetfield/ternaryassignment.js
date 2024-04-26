//ASSIGNMENT 1 PART 2 SUBIDO A GITHUB
/* Aqui lo primero que hizo fue establecer una funcion para realizar esta operacion y 
llamarlas para ambos equipos */
const calcAverage = (a, b, c) => (a+b+c)/3;
console.log (calcAverage(3,4,5));
// Aqui es cuando llama a la funcion para aplicarlo con los Dolphins
//Test Dolphins
const scoreDolphins = calcAverage (101, 100, 100)
console.log (scoreDolphins);
const scoreKoalas = calcAverage (65, 54, 49);
console.log (scoreKoalas);
// tambien pueden ser juntos en uno mismo
console.log (scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas){
        console.log ( `Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
    } 
    else {
        console.log ( `Koalas win ${scoreKoalas} vs ${scoreDolphins}` );
    }
    