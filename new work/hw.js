// //  1.
const countriesUpperCase = countries.map(country => country.length);
console.log(countriesLength);
// //    3. 
// countries.forEach(country => console.log(country));


// //4. 
// names.forEach(name => console.log(name));


// //5. 
// numbers.forEach(number => console.log(number));


// //6. 
// const countriesUpperCase = countries.map(country => country.toUpperCase());
// console.log(countriesUpperCase);


// //7. 
// const countriesLength = countries.map(country => country.length);
// console.log(countriesLength);


// //8. 
// const squaredNumbers = numbers.map(number => number * number);
// console.log(squaredNumbers);


// //9. 
// const namesUpperCase = names.map(name => name.toUpperCase());
// console.log(namesUpperCase);


// //10. 
// const productPrices = products.map(product => product.price);
// console.log(productPrices);


// //11. 
// const countriesContainingLand = countries.filter(country => country.includes('land'));
// console.log(countriesContainingLand);


// //12. 
// const countriesWithSixCharacters = countries.filter(country => country.length === 6);
// console.log(countriesWithSixCharacters);


// //13. 
// const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
// console.log(countriesWithSixOrMoreLetters);


// //14. 
// const countriesNotStartingWithE = countries.filter(country => !country.startsWith('E'));
// console.log(countriesNotStartingWithE);


// //15. 
// const pricesWithValues = products.filter(product => product.price !== '');
// console.log(pricesWithValues);


// //16. 
// function getStringLists(arr) {
//   return arr.filter(item => typeof item === 'string');
// }

// console.log(getStringLists([1, 'hello', 3, 'world']));


// //17. 
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// //18. 
// const sentence = countries.reduce((acc, country, index) => {
//   if (index === countries.length - 1) {
//     return acc + 'and ' + country + ' are north European countries';
//   } else {
//     return acc + country + ', ';
//   }
// }, '');
// console.log(sentence);

// LEVEL 2
//1
// const totalPrice = products
//   .map(product => product.price)
//   .filter(price => !!price && !isNaN(price))
//   .reduce((acc, curr) => acc + parseFloat(curr), 0);

// console.log(totalPrice);


//2
// const sumOfPrices = products.reduce((acc, curr) => {
//   const price = parseFloat(curr.price);
//   return !isNaN(price) ? acc + price : acc;
// }, 0);

// console.log(sumOfPrices);

//3

// function categorizeCountries(pattern) {
//   return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
// }

// const countriesWithLand = categorizeCountries('land');
// console.log(countriesWithLand);

//4
// function countInitialLetters() {
//   const countMap = {};
//   countries.forEach(country => {
//     const initial = country[0].toUpperCase();
//     countMap[initial] = (countMap[initial]  0) + 1;
//   });
//   return Object.entries(countMap).map(([letter, count]) => ({ letter, count }));
// }

// const letterCounts = countInitialLetters();
// console.log(letterCounts);

//5
// function getFirstTenCountries() {
//   return countries.slice(0, 10);
// }

// const firstTen = getFirstTenCountries();
// console.log(firstTen);

//6
// function getLastTenCountries() {
//   return countries.slice(-10);
// }

// const lastTen = getLastTenCountries();
// console.log(lastTen);

//7
// function mostUsedInitialLetter() {
//   const countMap = {};
//   countries.forEach(country => {
//     const initial = country[0].toUpperCase();
//     countMap[initial] = (countMap[initial]  0) + 1;
//   });

//   let maxCount = 0;
//   let mostUsedLetter = '';
//   for (const letter in countMap) {
//     if (countMap[letter] > maxCount) {
//       maxCount = countMap[letter];
//       mostUsedLetter = letter;
//     }
//   }
//   return mostUsedLetter;
// }

// const mostUsed = mostUsedInitialLetter();
// console.log(mostUsed);
// level 3
// 1
// const countries = {
//   Albania: {
//     name: 'Albania',
//     capital: 'Tirana',
//     population: 2.88,
//     languages: ['Albanian'],
//   },
//   American: {
//     name: 'American Samoa',
//     capital: 'Fagatogo',
//     population: 55,
//     languages: ['English', 'Samoan'],
//   },
//   Japan: {
//     name: 'Japan',
//     capital: 'Tokyo',
//     population: 126476461,
//     languages: ['Japanese'],
//   },
// };

// for (const country in countries) {
//   console.log(Country: ${countries[country].name});
//   console.log(Capital: ${countries[country].capital});
//   console.log(Population: ${countries[country].population});
//   console.log(Languages: ${countries[country].languages.join(', ')});
//   console.log('--------------------------');
// }

// 2
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]
// function mostSpokenLanguages(countries, n) {
//     const languageMap = new Map();
//     for (const country of countries) {
//       for (const language of country.languages) {
//         if (languageMap.has(language)) {
//           languageMap.set(language, languageMap.get(language) + 1);
//         } else {
//           languageMap.set(language, 1);
//         }
//       }
//     }
  
//     const languageArray = Array.from(languageMap.entries());
//     languageArray.sort((a, b) => b[1] - a[1]);
  
//     return languageArray.slice(0, n).map(([language, count]) => ({ country: language, count }));
//   }
  
//   const countries = [
//     { name: "Afghanistan", languages: ["Pashto", "Dari", "Uzbek"] },
//     { name: "Albania", languages: ["Albanian", "Greek"] },
//     { name: "Algeria", languages: ["Arabic", "French"] },
//     { name: "Andorra", languages: ["Catalan", "Spanish", "French"] },
//   ];
  
//   console.log(mostSpokenLanguages(countries, 10));
//   console.log(mostSpokenLanguages(countries, 3));
// 3
// function mostPopulatedCountries(countries, n) {
//   countries.sort((countryA, countryB) => countryB.population - countryA.population);

//   return countries.slice(0, n);
// }
// const countries = [
//     {country: 'China', population: 1377422166},
//     {country: 'India', population: 1295210000},
//     {country: 'United States of America', population: 323947000},
//     {country: 'Indonesia', population: 258705000},
//     {country: 'Brazil', population: 206135893},
//     {country: 'Pakistan', population: 194125062},
//     {country: 'Nigeria', population: 186988000},
//     {country: 'Bangladesh', population: 161006790},
//     {country: 'Russian Federation', population: 146599183},
//     {country: 'Japan', population: 126960000}
//     ]

// console.log(mostPopulatedCountries(countries, 10));
// console.log(mostPopulatedCountries(countries, 3  ));

