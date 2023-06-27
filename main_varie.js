// console.log('looog');



//SCOPE--------------------------------


//scope globale è dichiarato fuori da qualsiasi graffa.

// let pippo = 10; // scope globale 


// if (pippo < 20){
//    pippo = pippo + 3;
//    let pluto = 4; errore perche non puoi mettere la variabile dentro alla madre scope.

// }


// pluto = pluto +1;

// console.log(pippo);
// console.log(pluto);




//SCOPE NESTATI --------------------------------

// const i = ' sono la i';

// function createEvenArray(max){
    
//     const tempArray = [];
//     const i  = 40;
   
//     for (let i = 0; i <= max; i++) {
        
//         if (i % 2 === 0) {

//             tempArray.push(i);
//         }
//     }
//     return tempArray;
// }

// console.log(createEvenArray(1000))




// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 20; i++) {
    
//         for (let i = 0; i < 30; i++) {
            
//             console.log(i);
           
            
//         }
// }   }



//FUNZIONE PARAMETRI ARGS----------

// function mean(){  //puoi anche togliere i parametri la funzione funziona comunque.

    // console.log(arguments)

    // const sum = v1 + v2 + v3;

    // const mean = sum / 3;

    // return mean;

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         const value = arguments[i];
//         sum = sum + value;
        
//     }
//     const mean = sum/arguments.length;
//     return mean;
// }

// console.log(mean(3,4,5))



// function sumAll(...args){

//   let sum = o;

//   for (let i = 0; i < args.length; i++) {
//     const value = args[i];
//     sum = sum + value;
    
//      }

//   return sum; 
// } 

// }

// console.log(sumAll(3,4,5));



// function pippo(v1, v2, ....args)


// {
            
//     console.log('arguments', arguments);
//     console.log('v1',v1);
//     console.log('v2',v2);
//     console.log('args', args);

// }

// pippo(2,4,6,8,0);


//REDUCE ----------------------------------------------------------------


// function sumAllArray(arrayToSum){
//     let accumulator = 1;

//     for (let i = 0; i < arrayToSum.length; i++) {
//         const current = arrayToSum[i];

//         //put your code here;
//         accumulator = accumulator * current;
        
//     }

//     return accumulator;
// }

// console.log(sumAllArray([2,3,4,5]));




// function join(arrayToJoin){
//     let accumulator = '';

//     for (let i = 0; i < arrayToJoin.length; i++) {
//         const current = arrayToJoin[i];

//         //put your code here;
//         accumulator = accumulator + current;
        
//     }

//     return accumulator;
// }

// console.log('join', join(['qui','quo','qua']));



// function sumEvenAndOdd(arrayToReduce){
//     let accumulator = {sumOfEven: 0, sumOfOdd: 0};

//     for (let i = 0; i < arrayToReduce.length; i++) {
//         const current = arrayToReduce[i];

//         //put your code here;

//         if (current % 2 === 0) {
//             accumulator.sumOfEven += current;
//         } else {
//             accumulator.sumOfOdd += current;
//         }

//     }
        
        
//      return accumulator;

// }




// console.log('sumEvenAndOdd', sumEvenAndOdd([1,2,3,4,5,6]));



//RICORSIONE ------------------------------------------

//FATTORIALE (!)

// 5! = 5*4*3*2*1 = 120!

//definizione
// 1)  1! = 1; 
// 2) n! = n * (n-1)!



// 5! =  5  * 4!
//     4*3!
//       3*2!
//         2*1!
//            1

// function fattoriale(n){
//     if( n===1){
//         return 1;
//     } else {
//         return n* fattoriale(n- 1);
//     }
// }


// console.log(fattoriale(5));





// ex 2.
function isEven(number) {
    if (number < 0) {
        return isEven(-number);
    } else if (number == 1) {
        return false;
    } else if  (number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false




// function min2(...arg){

//     let accumulator = -Infinity;

//     for (let i = 0; i < args.length; i++) {
//         const current = args[i];

//         if (i===0) {
//             accumulator = current;
//         } else if (accumulator < current){
//             accumulator = current;
//         }


//     }
//     return accumulator;
// }


// console.log('min2', min2());
// console.log('min2', min2(-2));


// function countBs(s) {
//     var count = 0; 
//     for (var i = 0; i < s.length; i += 1) {
//       if (s.charAt(i) === "B")
//         count += 1;
//     }
//     return count;
//   }
  
//   function countChar(s, c) {
//     var count = 0; 
//     for (var i = 0; i < s.length; i += 1) {
//       if (s.charAt(i) === c)
//         count += 1;
//     }
//     return count;
//   }
  
//   console.log(countBs("BBC"));
//   // → 2
//   console.log(countChar("kakkerlak", "k"));

