// console.log ('oggetti')

// // l'oggetto si inizializza con le parentesi graffe, abbiamo una stringa di base che è
// // associata ad una etichetta, 'nome', e un eitchetta anno con il quale associamo un numero
// // e un'altra etichetta alla quale associamo un dato booleano.

// const studente = {nome: 'Damiano', anno: 1993, sposato: false};

// console.log(studente);

// console.log(studente.nome);

// console.log(studente['anno']);





// studente.indirizzo = 'taggia';

// console.log(studente); // richiama l'oggetto

// console.log(studente.conto); // valore che non ce e risulta undefined


// console.log(Object.keys(studente)); // array per prendere tutte le etichette di un oggetto

// console.log(Object.values(studente)); //tutti i valori




// forin per ciclare dentro gli oggetti, ricorda 'in' come sintassi che e differente da of

// for (const key in studente) {
        
//     const value = studente[key];

//     console.log(key, value);
        
 
// }



const studente2 = {
    name: 'Manuela',
    yob: 1988,
    isMarried: false,
    address: 'Genova',
    marks: [8, 9, 7, 8, 10],
    dog: {
        name: 'Nala',
        breed: 'lupo cecoslovacco',
        yob: 2017
    }
}

console.log(studente2);



function calculateAge(student){

    const actualYear = new Date().getFullYear();
    
    const age = actualYear - student.yob;

    return age;
}



console.log(calculateAge(studente2));






const studente3 = {
    name: 'Cesare',
    yob: 2003,
    isMarried: false,
    address: 'Genova',
    marks: [8, 9, 7, 8, 10],
    dog: {
        name: 'Luna',
        breed: 'bull terrier',
        yob: 2016

    }
}

console.log(calculateAge(studente3));


const studente4 = {
    name: 'Stefano',
    yob: 1998,
    isMarried: false,
    address: 'Genova',
    marks: [9, 10, 6, 8, 6],
    dog: null
}

console.log(calculateAge(studente4));






function calculateDogAge(student){

    if(student.dog){
    const actualYear = new Date().getFullYear();

    const dogAge = (actualYear - student.dog.yob ) *7;

    return dogAge;

} else {
    return -1;
}
}

console.log(calculateDogAge(studente2));
console.log(calculateDogAge (studente3));
console.log(calculateDogAge(studente4));



function calculateMean(student){
    let sum = 0;
    
    for (const mark of student.marks) {
        sum += mark;
        
    }

    const mean = sum/student.marks.length;
    
    return mean;
}

console.log(calculateMean(studente2));
console.log(calculateMean(studente3));
console.log(calculateMean(studente4));




