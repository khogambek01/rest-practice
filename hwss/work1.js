// for (let i = 0; i <=10 ; i++) {
//     console.log(`${4}*${i} =${4*i}`);
    
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = []
// for(let i = 4 ; i >=0; i--){
//   newArr.push(countries[i].toUpperCase())
// }

// console.log(newArr);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     sum += numbers[i];
//   }
// }

// console.log(sum);




// 1

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// 2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// 3
let n = 10;

for (let i = 0; i <= n; i++) {
    console.log(i);
}
//4
for (let i = 0; i < 5; i++) {
    let lime = '';
    for (let j = 0; j <= i; j++) {
      lime += '*';
    }
    console.log(lime);
  }
  

//5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
  

//6
    console.log(" i    i^2   i^3");
    for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}    ${i ** 3}`);
    }


//7

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}


//8
console.log("TAQ:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 9
for (let i = 0; i <= 100; i++) {
    console.log(i);
  }



// 10
let san = 0;

for (let i = 0; i <= 100; i++) {
    san += i;
}

console.log(san);

// 11
let num = 0;
let num1 = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
       
        num += i;
    } else {
     
        san += i;
    }
}

console.log(num);
console.log( num1);


// 12
let a = 0;
let b = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    a += i;
  } else {
    b += i;
  }
}

const resultArray = [a, b];
console.log(resultArray);


// 13
const sum = [];

for (let i = 0; i < 5; i++) {
    sum.push(Math.floor(Math.random() * 100));
}

console.log(sum);

// 14
function generateRandomNumbersArray(count, min, max) {
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
      let random;
      do {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (randomNumbers.includes(random));
      randomNumbers.push(random);
    }
    return randomNumbers;
  }
  
  let randomArray = generateRandomNumbersArray(5, 1, 100);
  console.log(randomArray);

//15
function generateRandomId(length = 6) {
    const simvol = 'number';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += simvol[Math.floor(Math.random() * simvol.length)];
    }
    return id;
  }
  
  const randomId = generateRandomId();
  
  console.log(randomId);

