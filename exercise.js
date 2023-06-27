// function removeAllSpaces(str){
//     const nospace = str.replace(/ /g, '');
//     return nospace;
//     const wordsArray = str.split(' ')
//     const nospace = wordsArray.join('');
//     return nospace;
// }



// console.log('removeAllSpaces', removeAllSpaces("pippo")== "pippo");
// console.log('removeAllSpaces', removeAllSpaces(" ") === "");
// console.log ('removeAllSpaces', removeAllSpaces ("le mutande di mia nonna"))



function calculateBMI(weight, height){
    const proportion = weight/(height**2);
    if (proportion <= 18.5) {
        return 'Underweight';
    } else if (proportion > 18.5 && proportion <= 25){
        return 'Normal';
    } else if (proportion > 25 && proportion <= 30) {
        return 'Overweight'
    } else {
        return 'Obese';
    }
}

console.log('calculateBMI', calculateBMI(170, 1.60) )
console.log ('calculateBMI', calculateBMI(57, 1.66)) 