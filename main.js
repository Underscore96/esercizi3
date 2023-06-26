



// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) mapping function che prende in input un array di numeri
// //    e restituisce un array con tutti i numeri diminuiti di uno


// es 1.


// function subArraymin(selectedArray){

//     const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const numbersArray = selectedArray[i];

//         const newElement = numbersArray - 1;

//         newArray.push(newElement);
//     }

//     return newArray;
// }

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// console.log('sub array', subArraymin(numbersArray));








// 2-----------------



// function absolute(selectedArray){

// // const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// const newArray = [];

// for (let i = 0; i < selectedArray.length; i++) {
// const numero = selectedArray[i];

// let newElement;
//         if (numero < 0) {
//             newElement = -numero;
//         } else {
//             newElement = numero;
//         }

//         newArray.push(newElement);
//     }
//     return newArray;
// }


// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// console.log('absolute', absolute(numbersArray));




// 3-------------------------


// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// function mapPariDispari(selectedArray) {
//   const element = numbersArray[i];
    
//     let newElement;
//     if (element % 2 === 0) {
//       newElement = 'PARI';
//     } else {
//       newElement = 'DISPARI';
//     }
//   };
//   return mappedArray;
// }

// console.log('mapped array', mapPariDispari(numbersArray));




// 4-----------------------------


// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// function lowerCaseAll(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         const newElement = element.toLowerCase();

//         newArray.push(newElement);
//     }
//     return newArray;
// }

// console.log('LowerCaseAll', lowerCaseAll(stringsArray));


// ----------------------------------------------------------------


// 5 ---------------------------------------------------


// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// function lenghtArray(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         const newElement = element.length;

//         newArray.push(newElement);
//     }
//     return newArray;
// }

// console.log('LowerCaseAll', lenghtArray(stringsArray));



// 6----------------------------------------------------


// function toFirstCase(selectedWord) {
//     const firstChar = selectedWord[0];
//     const firstCharUpper = firstChar.toUpperCase();
//     const restOfTheString = selectedWord.slice(1);
//     return firstCharUpper + restOfTheString;
    
// }

// function toCamelCase(selectedString){
//     const lowerString = selectedString.toLowerCase();
//     const wordsArray = lowerString.split(' ');
//     if (wordsArray.length === 1) {
//         return lowerString;
//     } 
    
//  let camelString = '';
//  for (let i = 0; i < wordsArray.length; i++){
//     const element = wordsArray[1];
//     if (i === 0){
//         camelString += element;

//     } else {
//         camelString += toFirstCase(element);
//     }
//  }

//  return camelString;
// }

// function toCamelCaseAll(arrayOfStrings){
//     const tempArray = [];

//     for (let i= 0; i < arrayOfStrings.length; i++){

//         const element = arrayOfStrings[i];

//         const newElement = toCamelCase(element);

//         tempArray.push(newElement);
//     }

//     return tempArray;

// }


// const arrayOfStrings = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// console.log(toCamelCaseAll(stringsArray));









// --------------------------------------------------






// 7---input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri


// function removeLetters(selectedArray){
//         const newArray = [];
//         for (let i = 0; i < selectedArray.length; i++) {
            
//             const element = selectedArray[i];
            
//             if(element.length > 3){
//                 newArray.push(element);
//             }
    
//         }
//         return newArray;
//     }

//     const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
    
//     console.log('remove letters', removeLetters(stringsArray));








// 8----------------------------------------------------
// filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'




// function removeP(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         if (element.toUpperCase().includes('P')) {
//             newArray.push(element);
//         }

//     }
//     return newArray;
// }

// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// console.log('removeP', removeP(stringsArray));






// 9. transofrma questa funzione in una funzione che filter che prende in input un array di numeri e restituisce i positivi divisibili per 3


// function filterPositiveandDivisiblenumbersby3(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         if (element > 0 && element %3 === 0) {
//             newArray.push(element);
//         }

//     }
//     return newArray;
// }

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// console.log('removeP', filterPositiveandDivisiblenumbersby3(numbersArray));







