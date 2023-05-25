
let newWord = `Moonday`


// function hasUniqChar (str) {
//     for(let i= 0; i < str.length; i++){
//         if (str[i] === str[i + 1]) {
//             return false 
//         } 
//     }
//     return true 
// }

// console.log(hasUniqChar(newWord))


function hasUniqChar(str) {
    for (let i = 0; i<str.length; i++){
        for (let x = i + 1; x <str.length; x++) {
            if (str[i] === (str[x])){
                return false 
             }
        }
        return true 
    }
}

console.log(hasUniqChar(newWord))