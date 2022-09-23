//Write a Parentheses Checker function to determine if the input string’s opening and closing brackets are properly nested.
// function balancedParentheses(str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {
//         // If character is an opening brace add it to a stack
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         //if closing brace, pop from stack
//         else {
//             let lastEle = stack.pop();
//             //Return false if the element popped doesn’t match the corresponding closing brace in the map 
//             if (str[i] !== map[lastEle]) {return false};
//         }
//     }
//     //if stack not empty at end, return false
//     if (stack.length !== 0) {return false};

//     return true;
// }
// console.log(balancedParentheses("{[]()}" ));
// console.log(balancedParentheses("{[(])}"));
// console.log(balancedParentheses("{[}"));

// passing value in function is Array or not?  return true or false
// function check(obj) {
//     if (Object.prototype.toString.call(obj) === "[object Array]") {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(check(123));  //false because [Object Number]
//   console.log(check("cat")); //false because [Object String]
//   console.log(check([1, 2, 3, 4])); //true because [Object Array] 
// console.log(Object.prototype.toString.call(new (function Custom(){})));    //[Object Object] 





