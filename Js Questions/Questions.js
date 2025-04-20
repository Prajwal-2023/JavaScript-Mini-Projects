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

    // let db = 0;

    // for (let i = num; i > 0; i--) {
    //     db = db + i;

    // }
    return console.log((num*(num+1))/2);  // In One Line
}
sumOfNumber(2);