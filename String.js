//Write a function that takes a string as input and returns the reverse of that string.
var rev=''
function reverse(org_String){
    rev = org_String.split('').reverse().join('')
    console.log(rev)
}
reverse('HEllo')

// Create a function that takes a string and a number `n`, and returns a new string that repeats the input string `n` times.
function str(string, number){ 
    return string.repeat(number)
}
let res = str('hello',4)
console.log(res)

//Write a function that takes a string and removes all the spaces from it.
function rem(string){
    //return string.replace(/ /g,'')//Global match
    return string.replaceAll(' ','')
}
console.log(rem('He l l o'))

//Create a function that takes two strings and checks if they are anagrams of each other (contain the same characters in a different order).
function anagram(a,b){
    let len1 = a.length
    let len2 = b.length
    if (len1 != len2 ){
        console.log("invalid input")
    }
    let str1 = a.split('').sort().join('')
    let str2 = b.split('').sort().join('')
    if ( str1 == str2  ){
        console.log("anagram")
    }
    else{
        console.log("not an anagram")
    }
}
anagram('hello','oelhl')

//Write a function that takes a string and returns the number of vowels (a, e, i, o, u) present in the string.
function getVowelsCount(str){
    var count = 0
    const vowels = ['a','e','i','o','u']
    for(let char of str){
        if ( vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(getVowelsCount('education'))

//Create a function that capitalizes the first letter of each word in a sentence.
const mySentence = "this is a sentence";
const words = mySentence.split(" ");
const a =words.map((word) => { 
    return word[0].toUpperCase() + word.slice(1); 
}).join(' ')
console.log(a)


//Write a function that takes a string and returns the characters in even positions.
function char_even(str){
    let res = ''
    for ( let i = 0;i<str.length;i++)
    {
        if ( i%2==0){
            res = res+str[i]
        }
    }
    return res
}
console.log(char_even('Hello'))  


//Create a function that takes a string and replaces all occurrences of a specified word with another word.
function repl(str){
    return str.replaceAll('is','no')
}
console.log(repl("This is a sentence"))


// //Write a function that takes two strings and returns true if the first string ends with the second string, otherwise false.
function end(a,b){
    if(a.length < b.length){
        return false
    }
    const start_index = a.length - b.length
    for (let i =0;i<b.length;i++){
        if(a[start_index+i] !== b[i]){
            return false
        }
    }
    return true
}
console.log(end('hello World','World'))

//Create a function that takes a string and returns the middle character(s) of the string.
function mid(str){
    const len = str.length 
    const mid = (len/2) 
    console.log(mid)
    if (len %2 === 0){
        console.log(str.slice(mid-1,mid+1))
    }
    else{
        console.log(str.charAt(mid))
    }
}
mid("helloo")


//Write a function that takes a string and returns the character with the highest ASCII value.
function ascii(str){
    let highest = ""
    let highest1 = 0
    for ( let i =0;i<str.length-1;i++){
        res = str.charCodeAt(i)
        if (res>highest1){
           highest1 = res
           highest = str.charAt(i)
        }
        console.log(highest)
    }
}
ascii("salma")


// Create a function that takes a string and returns the same string with every consonant doubled.
function double(str){
    const vowels = ['a','e','i','o','u']
    let res = ''
    for (let i =0;i<str.length;i++){
        const char = str[i]
        if ( vowels.includes(char)){
            res += char
        }
        else{
            res += char + char
        }
    }
    return res
}
console.log(double("hello world"))

//Write a function that takes a string and a substring, and counts how many times the substring appears in the string.
function occ(orgstr, substr) {
    let s = orgstr
    let f = substr
    let r = s.split(f).length-1
    console.log(r);
}
occ('geeks geeks for','geeks')

//Create a function that takes a string and returns the string with the characters in reverse order, but keeps the position of spaces unchanged.
function rev1(str){
    let rev = ''
    rev = str.split('').reverse()
    return rev
    }
console.log(rev1('hello world'))

//Write a function that takes a string and returns the string with all the letters shifted by a specified number of positions in the alphabet.
function f15(str,shift){
    let res = []
    for (let i =0;i<str.length;i++){
        let code = str.charCodeAt(i) + shift
        while( code>122){
            code = (code - 122)+96
        }
        res.push(String.fromCharCode(code))//a function from String Object
    }
    return res.join('')
}
console.log(f15('abc',3))

//Create a function that takes a string and removes all non-alphanumeric characters.
function f16(str){
    return str.replace(/\W/g,'')//W ->Metacharacter
}
console.log(f16("he^%23llo#2)1!>world"))

//Write a function that takes a string and returns the longest word in the string
function f17(str){
    let res = str.split(' ')
    let longword = ''
    for ( let i =0 ; i<res.length;i++){
        if (res[i].length>longword.length){
            longword = res[i]
        }
    }
    return longword
}
console.log(f17("This is a sentence"))

//Create a function that takes a sentence and replaces each word with its length.
function f18(str){
    let res = str.split(' ')
    let words = res.map(res => res.length)
    return words.join(' ')
}
console.log(f18('This is a sentence'))

//Write a function that takes a string and a pattern, and replaces all occurrences of the pattern with a specified replacement string.
function f19(str,pattern,replace){
    return str.replaceAll(pattern,replace)
}
console.log(f19("This is a sentence","is","no"))

// Create a function that takes two strings and returns the common characters between them, without duplicates.
function f20(str1,str2){
    let res = []
    let new1 = str1.replace(' ','').toLowerCase()
    let new2 = str2.replace(' ','').toLowerCase()
    for (let i =0;i<new1.length;i++){
        for ( let j =0;j<new2.length;j++){
            if ( new1[i]==new2[j]){
                res.push(new1[i])
            }
        }
    }
    return res
}
console.log(f20('Hello world','Lord'))

