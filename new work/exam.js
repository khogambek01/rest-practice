// // level 1
// 1.b
// 2.d
// 3.c
// 4.b
// 5.a
// 6.a
// 7.c
// 8.c
// 9.b
// 10.c
// 11.b
// 12.a
// 13.c
// 14.c
// 15.c
// // level2
// // 1
// function calculateMathExpression(expression) {
//     try {
//       const result = eval(expression);
//       return result;
//     } catch (error) {
//       return "";
//     }
//   }
//   console.log(calculateMathExpression("3 * (4 + 2) / 7")); 
// // 2
// function computerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// function determineWinner(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         return "It's a tie!";
//     } else if (
//         (playerChoice === 'rock' && computerChoice === 'scissors') ||
//         (playerChoice === 'paper' && computerChoice === 'rock') ||
//         (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         return 'You win!';
//     } else {
//         return 'Computer wins!';
//     }
// }

// function playGame() {
//     const playerChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();
    
//     if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
//         alert('Invalid choice. Please choose rock, paper, or scissors.');
//         return;
//     }

//     const computer = computerChoice();
//     alert(`Computer chose ${computer}`);

//     const result = determineWinner(playerChoice, computer);
//     alert(result);
// }

// playGame();


// // 3
// function generatePascalsTriangle(rows) {
//     const pascalsTriangle = [];
//     for (let i = 0; i < rows; i++) {
//       pascalsTriangle[i] = new Array(i + 1);
//       for (let j = 0; j <= i; j++) {
//         if (j === 0 || j === i) {
//           pascalsTriangle[i][j] = 1;
//         } else {
//           pascalsTriangle[i][j] = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
//         }
//       }
//     }
//     return pascalsTriangle;
//   }
  
//   function printPascalsTriangle(triangle) {
//     for (let i = 0; i < triangle.length; i++) {
//       console.log(triangle[i].join(" "));
//     }
//   }
  
//   const pascalsTriangle = generatePascalsTriangle(10);
//   printPascalsTriangle(pascalsTriangle);

// 5
// function fibonacci(n, memo = {}) {
//     if (n in memo) {
//       return memo[n];
//     }
//     if (n <= 2) {
//       return 1;
//     }
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
//   }
  
//   const n = 5;
//   const result = fibonacci(n);
//   console.log(result); 
// // // 9
// function fibonacciFirstTenNumbers() {
//     let count = 0;
//     let a = 0, b = 1;
    
//     while (count < 10) {
//       console.log(a);
//       const next = a + b;
//       a = b;
//       b = next;
//       count++;
//     }
//   }
  
//   fibonacciFirstTenNumbers();
  


  