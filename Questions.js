// String Reverse 
const stringReverser = (name) => {
    let store = '';

    for (let i = name.length - 1; i >= 0; i--) {
        store += name[i];
    }
    return console.log(store);
}
// stringReverser('Prajwal')


// sum of 1 to n number

const sumOfNumber = (num) => {

    let db = 0;

    for (let i = num; i > 0; i--) {
        db = db + i;

    }
    return console.log(db);
}
// sumOfNumber(2,);

// Number Factorial

const factorialOfNumber = (userNum) => {
    let fact = 1;
    if (userNum === 0 || userNum === 1)
        console.log('Factorial is One');

    for (let i = userNum; i > 0; i--) {
        fact = fact * i
    }
    return fact;
}

// console.warn(factorialOfNumber(1));

// Prime Number 

const primeNumber = (numIn) =>{
    if(numIn < 2){
        console.log('Prime is Nt Possible')
    }
    if(numIn % 2 != 0){
        console.log(`${numIn} is a Prime Number`)
    }
}

primeNumber(4)