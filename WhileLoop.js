// Create a `while` loop to print numbers from 1 to 10.
let n =1
while(n<=10){
    console.log(n)
    n++
}

//Implement a `while` loop to calculate the sum of numbers from 1 to 100.
let n =1,sum =0
while(n<=100){
    sum = sum +n
    n++
}
console.log(sum)

Write a `while` loop to print even numbers between 1 and 20.
let n =1
while (n<=20){
    if( n%2==0){
        console.log(n)
    }
    n++
}

//Create a `while` loop to find and print the prime numbers between 1 and 50.
let n = 2,m =2
while (n<=50){
    let isprime = true
    for ( let j=2;j<n ;j++){
        if ( n% j ===0){
            isprime = false
            break
        }
    }
    if (isprime == true){
        console.log(n)
    }
    n++
}

//Implement a `while` loop to reverse the digits of a given number.
let n = 10
while(n>0){
    console.log(n)
    n--
}

//Write a `do...while` loop to print numbers from 1 to 10.
let n =1
do {
    console.log(n)
    n++
} while (n<=10);

// Create a `do...while` loop to calculate the sum of numbers from 1 to 100.
let n =1,sum =0
do {
    sum = sum + n
    n++
} while (n<=100);
console.log(sum)

//Implement a `do...while` loop to print odd numbers between 1 and 20.
let n =1
do {
    if(n%2==1){
        console.log(n)
    }
    n++
} while (n<=20);

//Write a `do...while` loop to repeatedly ask the user for input until they provide a valid number.
let num
do {
    num = prompt("Enter the Negative number",0)
} while (num>=0 && num);

//Create a `do...while` loop to validate a password provided by the user against a predefined password.
let prepass = "Password"
do {
    userpass = prompt('Please enter the password...')
} while (userpass !== prepass );