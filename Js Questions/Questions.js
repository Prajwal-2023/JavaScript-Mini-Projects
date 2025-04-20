 // String Reverse 
 const stringReverser = (name) => {
     let store = '';
 
     for (let i = name.length - 1; i >= 0; i--) {
         store += name[i];
     }
     return console.log(store);
 }
 // stringReverser('Prajwal')
 