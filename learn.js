// function fullName() {
//     console.log("khogambek");
//   }
  
//   fullName();
  
// //
// function fullName() {
//     let firstName = "John";
//     let lastName = "Doe";
//     let fullName = firstName + " " + lastName;
//     return fullName;
//   }
  
//   console.log(fullName());
//   //

// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
  

//   var result = addNumbers(5, 7);
//   console.log(result);
  
//   
// function Rectangle(length, width) {
//     const area = length * width;
    
//     return area;
//   }
  

//   let rectangleLength = 10;
//   let rectangleWidth = 5;
//   const area = Rectangle(rectangleLength, rectangleWidth);
//   console.log(area);
//   //
// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width);
//     return perimeter;
//   }
//   const rectangleLength = 10;
//   const rectangleWidth = 5;
//   const perimeter = perimeterOfRectangle(rectangleLength, rectangleWidth);
//   console.log(perimeter); 
//   //
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height;
//     return volume;
//   }
//   const prismLength = 10;
//   const prismWidth = 5;
//   const prismHeight = 3;
//   const volume = volumeOfRectPrism(prismLength, prismWidth, prismHeight);
//   console.log(volume);
//   //7
// function areaOfCircle(radius) {
//     const pi = Math.PI;
//     return pi * radius * radius;
//   }

//   const circleRadius = 5;
//   const circleArea = areaOfCircle(circleRadius);
//   console.log(circleArea);
// //8
// function circumOfCircle(radius) {
//     const pi = Math.PI;
//     return 2 * pi * radius;
//   }
//   const circleRadius = 5;
//   const circleCircumference = circumOfCircle(circleRadius);
//   console.log(circleCircumference);
// // // 9
// function calculateDensity(mass, volume) {
//     return mass / volume;
//   }
//   const substanceMass = 100; 
//   const substanceVolume = 50; 
//   const substanceDensity = calculateDensity(substanceMass, substanceVolume);
//   console.log(substanceDensity); 
// // 10
// function calculateSpeed(distance, time) {
//     return distance / time;
//   }
//   const distanceCovered = 200; 
//   const timeTaken = 10; 
//   const objectSpeed = calculateSpeed(distanceCovered, timeTaken);
//   console.log(objectSpeed);

// 11
// function calculateWeight(mass, gravity) {
//     const weight = mass * gravity;
//     return weight;
//   }
//   const weight = calculateWeight(10, 9.8);
// console.log(weight);

// 12
// function convert(celsius) {
//     return (celsius * 10/5) + 32;
// }
// const celsius = 55;
// const result = convert(celsius);
// console.log(result);

// 13
// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     if (bmi < 18.5) {
//       console.log("Underweight");
//     } else
   
//   if (bmi < 25) {
//       console.log("Normal weight");
//     } else
   
//   if (bmi < 30) {
//       console.log("Overweight");
//     } else {
//       console.log("Obese");
//     }
//     return bmi;
//   }
  
//   const weight = 80;
//   const height = 1.8;
  
//   const bmi = calculateBMI(weight, height);
//   console.log(bmi);

// 14
// function checkSeason(month) {
//     if (month >= 3 && month <= 5) {
//         return
 
// "Spring";
//     } else
 
// if (month >= 6 && month <= 8) {
//         return
 
// "Summer";
//     } else
 
// if (month >= 9 && month <= 11) {
//         return
 
// "Autumn";
//     } else {
//         return
 
// "Winter";
//     }
// }

// console.log(checkSeason(1)); // шығады: ҚЫС
// console.log(checkSeason(4)); // шығады: КӨКТЕМ
// console.log(checkSeason(7)); // шығады: ЖАЗ
// console.log(checkSeason(10)); // : КҮЗ


// 15
// function findMax(a, b, c) {
//     return Math.max(a, Math.max(b, c));
//   }
  
//   console.log(findMax(0, 10, 5)); // шығады: 10
//   console.log(findMax(0, -20, 5)); // шығады: 5

// level2

  // //1

//   function solveLinEquation(a, b, c, x, y) {
    
//     const result = a * x + b * y + c;
//     return result;
// }

// const aCoefficient = 2;
// const bCoefficient = 3;
// const constantTerm = -5;
// const xValue = 4;
// const yValue = 1;

// const equationResult = solveLinEquation(aCoefficient, bCoefficient, constantTerm, xValue, yValue);
// console.log(`The result of the linear equation is ${equationResult}.`);

  ////2
  
//   function solveQuadratic(a, b, c) {

//     const discriminant = b**2 - 4*a*c;

    
//     if (discriminant > 0) {
//         const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [root1, root2];
//     } else if (discriminant === 0) {
//         const root = -b / (2 * a);
//         return [root];
//     } else {
        
//         const realPart = -b / (2 * a);
//         const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
//         const root1 = `${realPart} + ${imaginaryPart}i`;
//         const root2 = `${realPart} - ${imaginaryPart}i`;
//         return [root1, root2];
//     }
// }


// console.log(solveQuadratic()); 
// console.log(solveQuadratic(1, 4, 4));
// console.log(solveQuadratic(1, -1, -2)); 
// console.log(solveQuadratic(1, 7, 12)); 
// console.log(solveQuadratic(1, 0, -4));
// console.log(solveQuadratic(1, -1, 0)); 

////3

// function printArray(array) {
//   for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//   }
// }

// const myArray = [1, 2, 3, 4, 5];
// printArray(myArray);

// //4
// function showDateTime() {
//   const currentDate = new Date();
//   const day = String(currentDate.getDate()).padStart(2, '0');
//   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
//   const year = currentDate.getFullYear();
//   const hours = String(currentDate.getHours()).padStart(2, '0');
//   const minutes = String(currentDate.getMinutes()).padStart(2, '0');


//   const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;

//   console.log(formattedDateTime);
// }


// showDateTime();
// // 5
// function swapValues(x, y) {
//   console.log(`Before swapping: x => ${x}, y => ${y}`);

//   let temp = x;
//   x = y;
//   y = temp;

//   console.log(`After swapping: x => ${x}, y => ${y}`);
// }


// swapValues(3, 4);
// swapValues(4, 5);
// // 6
// function reverseArray(arr) {
  
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// }


// console.log(reverseArray([1, 2, 3, 4, 5])); 
// console.log(reverseArray(['A', 'B', 'C'])); 

// // 7
// function capitalizeArray(arr) {

//   let capitalizedArray = [];

//   for (let i = 0; i < arr.length; i++) {

//       capitalizedArray.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//   }

//   return capitalizedArray;
// }


// console.log(capitalizeArray(['apple', 'banana', 'juice'])); 
// console.log(capitalizeArray(['hoie', 'doe', 'haha'])); 
// // 8
// function addItem(item, originalArray) {
//   let newArray = [...originalArray];
//   newArray.push(item);

//   return newArray;
// }

// const originalArray = ['apple', 'banana', 'orange'];
// const newArray1 = addItem('grape', originalArray);
// const newArray2 = addItem('kiwi', newArray1);

// console.log(originalArray); 
// console.log(newArray1); 
// console.log(newArray2);
// // 9
// function removeItem(index, originalArray) {
//   let newArray = [...originalArray];
//   if (index >= 0 && index < newArray.length) {
//       newArray.splice(index, 1);
//   } else {
//       console.error('Invalid index. No item removed.');
//   }

//   return newArray;
// }

// const originalArray = ['apple', 'banana', 'orange'];
// console.log(originalArray); 
// // 10
// function sumOfNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       sum += i;
//   }

//   return sum;
// }

// console.log(sumOfNumbers(5));
// // 11
// function sumOfOdds(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       if (i % 2 !== 0) {
//           sum += i;
//       }
//   }

//   return sum;
// }

// console.log(sumOfOdds(10));
// // 12
// function sumOfEven(n) {

//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//           sum += i;
//       }
//   }

//   return sum;
// }

// console.log(sumOfEven(15)); 
// // 13
// function evensAndOdds(number) {
//   if (Number.isInteger(number) && number > 0) {
//       const numberString = number.toString();
//       let evenCount = 0;
//       let oddCount = 0;
//       for (let i = 0; i < numberString.length; i++) {
//           const digit = parseInt(numberString[i]);
//           if (digit % 2 === 0) {
//               evenCount++;
//           } else {
//               oddCount++;
//           }
//       }

//       console.log(`The number of odds are ${oddCount}.`);
//       console.log(`The number of evens are ${evenCount}.`);
//   } else {
//       console.error('Please provide a positive integer as input.');
//   }
// }
// evensAndOdds(100);
// // 14 
// function sum(...args) {
//     return args.reduce((total, current) => total + current, 0);
//   }
//   console.log(sum(1, 2, 3));  
// // 15
// function generateRandomUserIp() {
//   const segment1 = Math.floor(Math.random() * 256);
//   const segment2 = Math.floor(Math.random() * 256);

//   const ipAddress = `${segment1}.${segment2}`;

//   return ipAddress;
// }

// const randomUserIp = generateRandomUserIp();
// console.log(randomUserIp);
// // // 16
// function generateRandomMacAddress() {
//   function getRandomHexDigit() {
//       const hexDigits = '0123456789ABCDEF';
//       return hexDigits[Math.floor(Math.random() * 16)];
//   }
//   const macSegments = [];
//   for (let i = 0; i < 6; i++) {
//       const segment = `${getRandomHexDigit()}${getRandomHexDigit()}`;
//       macSegments.push(segment);
//   }
//   const macAddress = macSegments.join(':');
//   return macAddress;
// }

// const randomMacAddress = generateRandomMacAddress();
// console.log(randomMacAddress);

// // // 17
// function randomHexaNumberGenerator() {
//   function getRandomHexDigit() {
//       const hexDigits = '0123456789ABCDEF';
//       return hexDigits[Math.floor(Math.random() * 16)];
//   }
//   const hexNumber = ['#'];
//   for (let i = 0; i < 6; i++) {
//       hexNumber.push(getRandomHexDigit());
//   }
//   const result = hexNumber.join('');
//   return result;
// }
// const randomHexaNumber = randomHexaNumberGenerator();
// console.log(randomHexaNumber);
// // // 18
// function userIdGenerator() {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let userId = '';

//   for (let i = 0; i < 7; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       userId += characters.charAt(randomIndex);
//   }

//   return userId;
// }
// const generatedUserId = userIdGenerator();
// console.log(generatedUserId);

// // leve 3
// Function to generate user IDs based on user input
// 1
function userIdGeneratedByUser() {
  const numCharacters = parseInt(prompt("Enter the number of characters:"));
  const numIds = parseInt(prompt("Enter the number of IDs to generate:"));
  
  for (let i = 0; i < numIds; i++) {
      let userId = '';
      for (let j = 0; j < numCharacters; j++) {
          userId += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      console.log(userId);
  }
}
// 2
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());
// 3
function arrayOfHexaColors(numColors) {
  const hexaColors = [];
  for (let i = 0; i < numColors; i++) {
      const hexaColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      hexaColors.push(hexaColor);
  }
  return hexaColors;
}
console.log(arrayOfHexaColors(3));

// 4
function arrayOfRgbColors(numColors) {
  const rgbColors = [];
  for (let i = 0; i < numColors; i++) {
      rgbColors.push(rgbColorGenerator());
  }
  return rgbColors;
}
console.log(arrayOfRgbColors(3));
// 5
const hexColor = '#1a2b3c';

function convertHexaToRgb(hexColor) {
    const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    if (!hexRegex.test(hexColor)) {
        return 'Invalid hex color format';
    }

    hexColor = hexColor.replace('#', '');

    if (hexColor.length === 3) {
        hexColor = hexColor.split('').map(char => char + char).join('');
    }

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    return `rgb(${r},${g},${b})`;
}

const rgbColor = convertHexaToRgb(hexColor);
console.log(rgbColor);  
// 6











