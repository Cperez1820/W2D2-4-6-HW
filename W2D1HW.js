//=======================================================================
//2.  Define a function, as a function expression, maxOfThreethat takes three numbers
// as arguments and returns the largest of them. Again, the Math.max method is not allowed.
//==========================================================================

// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));



//=========================================================================================
// 2. Define a function, as a function expression, 
// maxOfThreethat takes three numbers as arguments and returns the largest of them. Again,
//  the Math.max method is not allowed.
//  =======================================================================================

// const maxOfThree = (x, y, z) => {
// if (x >= y, x >= z) {
//     return x;
// }
// else if(y >= x, y >= z) {
//     return y;
// } 
// else if(z >= x, z >= y) {
//     return z;
// }
// else {
//     return "Nothing"
//     console.log("Nothing")
// }
// }
// console.log(maxOfThree(2, 1, 9))



//=================================================================================
//3.  Define a function, as a function declaration, 
//isCharAVowel that takes a character as an argument and returns true if it is a vowel, 
//false otherwise.
//==================================================================================

 
// function isCharAVowel(vowelCheck) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let i = 0; i < vowels.length;i++) {
//       if (vowelCheck.toLowerCase() === vowels[i]) {
//         return true;
//       }
//   }
//   return false;
//   }
//   console.log(isCharAVowel("a"))
  

//========================================================================================
//4.  Define a function, as a function expression, sumArraythat takes an array of numbers
// and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
//========================================================================================


// const sumArray = function(nums) {
//     let sum = 0;

//     nums.forEach(function(num) {
//         sum += num;

//     });

//     return sum;
// }
// console.log(sumArray([2, 12, 1, 9, 96]));
// //    the console log should show: 120



//==========================================================================================
//5.  Define a function, as a function declaration, multiplyArraythat takes an array of numbers
//  and returns the product of those numbers. For example,
//   multiplyArray([2, 4, 5]);would return 40.
//==========================================================================================
// function multiplyArray(numb){
//     let prod = 1;
//     for(let x = 0;x < numb.length; x++) {
//         prod *=numb[x];

//     }
//     return prod;

// }
// console.log("Answer" + multiplyArray([5, 4, 3, 2, 1]));

//==========================================================================================
//6.  Define a function, as a function expression, numArgs that returns the number of arguments
// passed to the function when called.
//==========================================================================================

// const numArgs = (...args) => {
//     return args.length
//   }
//   console.log(numArgs(1,2,3,4))
  

//=========================================================================================
//7. Define a function, as a function declaration, reverseStringthat takes a string, reverses
// the characters, and returns it. For example, reverseString('rockstar');would return the
//  string "ratskcor".
//==========================================================================================


// function reverseString(str) {
//     let reversed = ""
//     for(let i = str.length - 1; i >=0; i--) {
//        // console.log(str[i])
//         reversed += str[i];
//     }

//     return reversed

// }
//   //reverseString("superrrr")
// console.log("I'm " + reverseString("Rockstar"))


//==========================================================================================
//8.  Define a function, as a function expression, longestStringInArraythat takes an array of
// strings as an argument and returns the length of the longest string.
//=========================================================================================

// let longestStringInArray = (ArrOfNum) => {
//     let arr1 = ArrOfNum[0].length
//     console.log(arr1)
//     let arr2 = ArrOfNum[0]
//     console.log(arr2)

//     for (i = 1; i < ArrOfNum.length; i++) {
//         let wordC = ArrOfNum[i].length
//         if (wordC > arr1) {
//             arr1 = wordC
//             arr2 = ArrOfNum[i]
//         }
//     }
//     return arr2
// }


// console.log(longestStringInArray(['stark', 'Targ', 'lanister']))



//==========================================================================================
//9.  Define a function, as a function declaration, stringsLongerThan 
//that takes an array of strings and a number as arguments,
//   and returns an array of the strings that are longer than the number passed in.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
//===========================================================================================


function stringsLongerThan(num1, num2) {
    let X = [];
        num1.forEach((function(str) {
            if(str.length > num2) {
                X.push(str);
            }
        }));
        return X;

        // console.log(X) 
}
console.log(stringsLongerThan(['Stark', 'tyrell', 'targ'], 4))





// function stringsLongerThan(num1, num2){
//     let x = []
//      num1.forEach((check) => {
//         if (check.length > num2){
//             x.push(check)
//         }
//     })
// console.log(x)
// }


// stringsLongerThan(['one piece', 'Tokyo Ghoul', 'Five1'], 5)

