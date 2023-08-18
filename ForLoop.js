//Write a `for` loop to print numbers from 1 to 10.
for( let i =1;i<=10;i++){
    console.log(i)
}

//Create a `for` loop to calculate the sum of numbers from 1 to 100.
let sum = 0;
for ( let i =1;i<=100;i++){
    sum = sum +i
}
console.log(`The sum of 1st 100 natural numbers is: ${sum}`)

//Implement a `for` loop to print even numbers between 1 and 20.
for ( let i =1;i<=20;i++){
    if( i%2==0){
        console.log(`Even number: ${i}`)
    }
}

//Write a `for` loop to print the multiplication table of a given number.
let n = 23
let mul =1
for (let i =1;i<=10;i++){
    mul = i*n
    console.log(`${n} * ${i} = ${mul}`)
}

//Create a `for` loop to calculate the factorial of a given number.
let n = 3
let fact = 1
for ( let i =1;i<=n;i++){
    fact = fact *i
}
console.log(fact)

//Implement a `for` loop to print numbers in reverse order from 10 to 1.
for(let i = 10;i>0;i--){
    console.log(i)
}

//Write a `for` loop to generate and print the Fibonacci sequence up to a certain limit.
let  n = 10
let n1 =0,n2=1,n3=0;
console.log(n1 +"\n"+ n2)
for ( let i =0;i<n;i++){
    n3 = n1 + n2
    console.log(n3)
    n1 = n2
    n2 = n3
}

// Create a `for` loop to find and print the prime numbers between 1 and 50.
for ( let i =2; i<=50;i++){
    let isprime = true
    for ( let j=2;j<i ;j++){
        if ( i% j ===0){
            isprime = false
            break
        }
    }
    if (isprime == true){
        console.log(i)
    }
}

//Implement a `for` loop to find the maximum value in an array of numbers.
let arr = [23,45,32,121]
let largest = 0
for (let i =0;i<arr.length;i++){
    if (arr[i]>largest){
        largest =arr[i]
    }
}
console.log(`The maximum valus present in the array is ${largest}`)

//Write a `for` loop to calculate the average of numbers in an array.
let arr = [2,3,5,4,8,6,4]
let avg =0,sum =0
for (let i =0;i<arr.length;i++){
    sum = sum +arr[i]
}
avg = sum/arr.length
console.log(avg)