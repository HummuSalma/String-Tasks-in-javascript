//Write a function to find the sum of all even numbers in an array.
let arr = [2,5,6,23,2,5,6]
function sum(arr){
    for ( let i =0;i<arr.length;i++){
    if ( arr[i]%2==0){
        console.log(`Even element: ${arr[i]}`)
    }
}
}
sum(arr)

//Create a function to remove the first and last elements from an array.
function f2(arr){
    arr.shift()
    console.log("After removing the first element:"+arr)
    arr.pop()
    console.log("After removing the last element: " +arr)
}
f2(arr)

//Implement a function to find the second smallest number in an array.
function f3(arr){
    let sort = arr.sort()
    return arr[1]
}
console.log(f3(arr))

//Write a function to shuffle the elements of an array.
function f4(arr){
    return arr.sort(()=>
        0.5 - Math.random()
    )
}
console.log(f4(arr))

//Create a function to return a new array with only unique values.
function f5(arr){
    let unique =[]
    arr.forEach(element =>{
        if ( !unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}
console.log(f5(arr))

// Implement a function to find the intersection of two arrays.
let arr1 = ['apple','banana','orange','kiwi']
let arr2 = ['apple','grapes','orange','kiwi']
function f6(arr1,arr2){
    for( let i =0;i<arr1.length;i++){
        for ( let j =0;j<arr2.length;j++){
            if ( arr1[i].includes(arr2[j])){
                console.log(arr1[i])
            }
        }
    }
}
f6(arr1,arr2)

//Write a function to check if an array is sorted in ascending order.
let arr = [1,2,3,9,220,234]
function f7(arr){
    let count=0
    let res 
    for ( let i =0;i<arr.length;i++){
        if (arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
console.log(f7(arr))

// Create a function to flatten a nested array (convert 2D array to 1D).
let arr = [1,2,[2,4,5],13,[15]]
function f8(arr){
    return arr.flat()//to flaten the array into specified dimension
}
console.log(f8(arr))

// Implement a function to find the longest word in an array of strings.
let arr = ['grapes','strawberry','orange','apple']
function f9 (arr){
    let longestWord = []
    for ( let i =0;i<arr.length;i++){
        if (arr[i].length>longestWord.length){
                longestWord=arr[i]
        }
    }
    return longestWord
}
console.log(f9(arr))

//Write a function to insert an element at a specified index in an array.
let arr = [1,2,3]
function f10(arr,index,value){
   arr.splice(index,0,value)
   return arr
}
console.log(f10(arr,0,34))

// Create a function to sort an array of objects based on multiple properties
let arr =[
    {
        productName : "Dell",
        price : 25000,
        Manufactured : new Date('2019-02-09')
    },
    {
        productName : "Lenovo",
        price : 30000,
        Manufactured : new Date('2023-08-10')
    },
    {
        productName : "Hp",
        price : 20000,
        Manufactured : new Date('2022-10-26')
    },
]
function f11(arr){
    return arr.sort((a,b)=> (a.price>b.price)? 1 : (a.price<b.price)? -1 : 0).sort((a,b)=>(a.Manufactured>b.Manufactured)? 1 : (a.Manufactured<b.Manufactured)? -1 :0)
}
console.log(f11(arr))

//Write a function to filter an array of objects and return objects with a specific property value.
let arr = [
    { item : "Laptop", brand : "Dell"},
    { item : "Mobile", brand : "Apple"},
    { item : "Laptop", brand : "Apple"},
    { item : "Mobil", brand : "Redmi"}
]
function f12(arr){
    var res =arr.filter ( function (arr){
        return arr.item == "Laptop"
    })
    return res
}
console.log(f12(arr))

//Implement a function to calculate the total cost of items in an array of product objects.
let arr =[
    {
        productName : "Dell",
        price : 25000,
        Manufactured : new Date('2019-02-09')
    },
    {
        productName : "Lenovo",
        price : 30000,
        Manufactured : new Date('2023-08-10')
    },
    {
        productName : "Hp",
        price : 20000,
        Manufactured : new Date('2022-10-26')
    },
]
function f13(arr){
    let res =arr.reduce(function(accumulator,current_value){
        return accumulator + current_value.price
    },0)
    return res
}
console.log(f13(arr))

// Create a function to group an array of objects by a range of property values.
let arr = [
    { item : "Laptop", brand : "Dell"},
    { item : "Mobile", brand : "Apple"},
    { item : "Laptop", brand : "Apple"},
    { item : "Mobil", brand : "Redmi"}
]
function f14(arr,property){
    return arr.reduce(function(accumulator,current_value){
        let key = current_value[property]
        if ( !accumulator[key]){
            accumulator[key]=[]
        }
        accumulator[key].push(current_value)
        return accumulator
    },{})
}
console.log(f14(arr,'brand'))

//Write a function to find the object with the shortest name in an array of person objects.
let person = [
    {name :"Isabele",age : 20},
    {name :"Andrew",age :21},
    {name :"SteveMathew",age :30}
]
function f15 ( arr){
    let shortest = arr[0]
    for ( const person of arr){
        if (person.name.length < shortest.name.length){
            shortest = person
        }
    }
    return shortest
}
console.log(f15(person))

// Implement a function to remove duplicate objects from an array of objects (based on a property).
let arr = [
    { item : "Laptop", brand : "Dell"},
    { item : "Mobile", brand : "Apple"},
    { item : "Laptop", brand : "Apple"},
    { item : "Mobile", brand : "Redmi"}
]
function f16(arr){
    const unique = []
    const res = arr.filter(function(element){
        if (!unique.includes(element.brand)){
            unique.push(element.brand)
            return true
        }
        return false
    })
    console.log(res)
}
f16(arr)

//Create a function to update the quantity of a specific item in an array of cart objects.
let arr =[
    {
        productName : "Dell",
        price : 25000,
        Manufactured : new Date('2019-02-09')
    },
    {
        productName : "Lenovo",
        price : 30000,
        Manufactured : new Date('2023-08-10')
    },
    {
        productName : "Hp",
        price : 20000,
        Manufactured : new Date('2022-10-26')
    },
]
function f17(arr,itemname,value){
   const res = arr.map(item=>{
    if (item.productName === itemname){
        return {...item,price:value}
    }
    return item
   })
   return res
}
console.log(f17(arr,'Hp',45000))

//Write a function to extract and return specific properties from an array of objects.
let arr = [
    { item : "Laptop", brand : "Dell"},
    { item : "Mobile", brand : "Apple"},
    { item : "Laptop", brand : "Apple"},
    { item : "Mobile", brand : "Redmi"}
]
function f18(arr,property){
    return arr.map((item)=> item[property])
}
console.log(f18(arr,'brand'))

//Implement a function to find the oldest person in an array of person objects
let person = [
    {name :"Isabele",age : 20},
    {name :"Andrew",age :45},
    {name :"SteveMathew",age :30}
]
function f19(arr){
    let res =arr.reduce(function(acc,curr){
        return acc.age>curr.age ? acc : curr
    })
    return res
}
console.log(f19(person))

//Create a function to merge two arrays of objects while avoiding duplicates.
let arr1 = [
    {name :"Isabele",age : 20},
    {name :"Andrew",age :45},
    {name :"SteveMathew",age :30},
]
let arr2 = [
    {name :"Isabele",age : 20},
    {name :"Sofia",age :22},
    {name :"SteveMathew",age :30}
]
function f20(arr1,arr2){
    let res = [...arr1]
    for (const ele2 of arr2){
        if (!res.some((ele1)=> ele1.name === ele2.name)){
            res.push(ele2)
        }
    }
    return res
}
console.log(f20(arr1,arr2))