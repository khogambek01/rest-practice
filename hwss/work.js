// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

////

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)

////  
// let lastIndex = animalProducts.length - 1;
// console.log(animalProducts[lastIndex])

////

// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10      // changing 1 at index 0 to 10
// numbers[1] = 20
// numbers[2] = 30
// numbers[3] = 40
// numbers[4] = 50  // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]


// ////
// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]

// //
// const arr = Array(8).fill ('a')
// console.log(arr);

///
// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = secondList.concat(firstList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//
// 1

// let emptyArray = [];
// console.log(emptyArray);

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);

// let arrayLength = array.length;
// console.log(arrayLength);



// let firstElement = array[0];
// let middleElement = array[Math.floor(arrayLength / 2)];
// let lastElement = array[arrayLength - 1];
// console.log(firstElement);
// console.log(middleElement);
// console.log(lastElement);

// // Объявите массив mixedDataTypes, поместите в массив различные типы данных и найдите длину массива
// let mixedDataTypes = [1, 'two', true, null, { name: 'John' }];
// let mixedDataTypesLength = mixedDataTypes.length;
// console.log(mixedDataTypes);
// console.log(mixedDataTypesLength);

// // Объявите массив переменных name itCompanies и присвойте начальные значения
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // Распечатайте массив с помощью console.log()
// console.log(itCompanies);

// // Выведите количество компаний в массиве


// // Распечатайте каждую компанию
// for (let company of itCompanies) {
//   console.log(company);
// }

// // Поочередно переведите название компании в верхний регистр и распечатайте их
// for (let i = 0; i < itCompanies.length; i++) {
//   itCompanies[i] = itCompanies[i].toUpperCase();
//   console.log(itCompanies[i]);
// }

// // Выведите массив как предложение
// let companiesSentence = itCompanies.join(', ') + ' — крупные IT-компании.';
// console.log(companiesSentence);

// // Проверьте, существует ли определенная компания в массиве itCompanies
// function findCompany(companyName) {
//   if (itCompanies.includes(companyName)) {
//     return companyName;
//   } else {
//     return 'Компания не найдена';
//   }
// }

// console.log(findCompany('Apple')); // Пример существующей компании
// console.log(findCompany('Tesla')); // Пример отсутствующей компании

// // Отфильтруйте компании, в которых есть более одной буквы «о» без метода фильтрации
// let companiesWithMultipleOs = [];
// for (let company of itCompanies) {
//   let count = 0;
//   for (let char of company) {
//     if (char.toLowerCase() === 'o') {
//       count++;
//     }
//   }
//   if (count > 1) {
//     companiesWithMultipleOs.push(company);
//   }
// }

// console.log('Компании с более чем одной буквой "о":', companiesWithMultipleOs);

// // Отсортируйте массив с помощью метода sort()
// itCompanies.sort();
// console.log('Сортированный массив:', itCompanies);

// // Реверсирование массива с помощью метода reverse()
// itCompanies.reverse();
// console.log('Реверсированный массив:', itCompanies);

// // Вырежьте из массива первые 3 компании
// let firstThreeCompanies = itCompanies.splice(0, 3);
// console.log('Вырезанные первые 3 компании:', firstThreeCompanies);

// // Вырезаем из массива последние 3 компании
// let lastThreeCompanies = itCompanies.splice(-3);
// console.log('Вырезанные последние 3 компании:', lastThreeCompanies);

// // Выделите из массива промежуточную ИТ-компанию или компании
// let middleCompanyIndex = Math.floor(itCompanies.length / 2);
// let middleCompany = itCompanies.splice(middleCompanyIndex, 1);
// console.log('Выделенная промежуточная компания:', middleCompany);

// // Удалить первую IT-компанию из массива
// itCompanies.shift();
// console.log('Массив после удаления первой компании:', itCompanies);

// // Удаление промежуточной ИТ-компании или компаний из массива
// let indexToRemove = Math.floor(itCompanies.length / 2);
// itCompanies.splice(indexToRemove, 1);
// console.log('Массив после удаления промежуточной компании:', itCompanies);

// // Удаление последней IT-компании из массива
// itCompanies.pop();
// console.log('Массив после удаления последней компании:', itCompanies);

// // Удалить все IT-компании
// itCompanies.length = 0;
// console.log('Массив после удаления всех компаний:', itCompanies);
