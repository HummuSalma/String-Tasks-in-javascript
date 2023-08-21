Create tasks
//Write a function to add a new element to an array.
let arr = ['apple','orange','kiwi']
function c1(arr,value){
   arr.push(value)
   return arr
}
console.log(c1(arr,'strawberry'))

//Create a function to add a new key-value pair to an object.
let arr ={ item : "apple" , price :30}
function c2 (arr){
    arr.quantity = 3
    return arr
}
console.log(c2(arr))

// Implement a function to create a new object with specified properties and values.
function c3(arr){
    const newObj = {};
    for ( const prop in arr){
        if(arr.hasOwnProperty(prop)){
            newObj[prop] = arr[prop]
        }
    }
    return newObj
}
const arr = c3({name: "John",age: 30,occupation: "Developer"});
console.log(arr); 


//Write a function to add a new item to a shopping cart array, including quantity and price.
let cart = []
function c4(itemname, quantity, price){
    const item = {
        name :itemname,
        quantity : quantity,
        price : price
    }
    cart.push(item)
}
c4('apple',4,30)
c4('banana',3,20)
console.log(cart)


//Create a function to add a new user object to a list of users.
let user = [
    { username : "isabele", email : "isabelle@gmail.com"}
]
function c5(username, email){
    const item = {
        username : username,
        email : email
    }
    user.push(item)
}
c5("salma","salma@gmail.com")
console.log(user)

Retrieve tasks
//Write a function to retrieve a specific element from an array by its index.
let arr = ['grapes','strawberry','orange','apple']
function r1(arr,index){
    console.log(arr[index])
}
r1(arr,1)

//Create a function to retrieve the value of a specific property from an object.
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
function r2(arr,property){
   return arr.map ( (item)=> item[property])
}
console.log(r2(arr,'price'))

// Implement a function to find and return the average of numbers in an array.
let arr = [1,2,6,5,43]
function r3(arr){
    let avg =0,sum=0
    for ( let i =0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    avg = sum/arr.length
    return avg
}
console.log(r3(arr))

//Write a function to search and return all items with a specific keyword in an array of objects.
let arr = [
    { item : "Laptop", brand : "Dell"},
    { item : "Mobile", brand : "Apple"},
    { item : "Laptop", brand : "Apple"},
    { item : "Mobil", brand : "Redmi"}
]
function r4 (arr, keyword){
    keyword = keyword.toLowerCase()
    return arr.filter((item)=> item.item.toLowerCase().includes(keyword) || item.brand.toLowerCase().includes(keyword))
} 
console.log(r4(arr,'Apple'))

//Create a function to display the details of a specific user object.
let user = [
    { username : "isabele", email : "isabelle@gmail.com"},
    { username : "salma", email : "salma@gmail.com"}
]
function r5(arr,username){
    return arr.filter((item)=> item.username.includes(username))
}
console.log(r5(user,'salma'))

update tasks
//Implement a function to update the quantity of a specific item in a shopping cart array.
let cart = [
    { name: 'apple', quantity: 4, price: 30 },
    { name: 'banana', quantity: 3, price: 20 }
]
function u1(arr,itemname,value){
    let res = arr.map((item)=>{
    if(item.name === itemname){
        return {...item,quantity: value}
    }
    return item
})
return res
}
console.log(u1(cart,'apple',7))

//Write a function to update the value of a specific property in an object.
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
function u2(arr,itemname,value){
    let res = arr.map((item)=>{
        if ( item.productName === itemname){
            return {...item, price : value}
        }
        return item
    })
    return res
}
console.log(u2(arr,'Lenovo',40000))

// Create a function to update the information of a specific user in a list of users.
let user = [
    { username : "isabele", email : "isabelle@gmail.com", age : 20},
    { username : "salma", email : "salma@gmail.com", age : 30}
]
function u3(arr,username,value){
    let res = arr.map ((item)=>{
        if ( item.username === username){
            return {...item, age : value}
        }
        return item
    })
    return res

}
console.log(u3(user,'salma',20))

// Implement a function to mark a task as completed in an array of to-do tasks.
let todoList = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Finish homework", completed: false },
    { id: 3, task: "Call friend", completed: false }
];
function u4(arr,id){
    let res = arr.findIndex((item)=>item.id === id)
    arr[res].completed = true
    return arr
}
console.log(u4(todoList,2))

//Write a function to update the price of a specific product in an array of products.
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
function u5(arr,name,value){
    let res = arr.map((item)=>{
        if ( item.productName === name){
            return {...item, price :value}
        }
        return item
    })
    return res

}
console.log(u5(arr,'Dell',50000))

Delete tasks
//Create a function to remove an element from an array by its index.
let arr = [2,35,654,3,2]
function d1(arr,index){
    arr.splice(index,1)
    return arr
}
console.log(d1(arr,2))

//Implement a function to remove a key-value pair from an object.
let arr = {
    id : 2,
    age : 30,
    mail : "unknown@gamil.com"
}
function d2(arr,property){
if ( arr.hasOwnProperty(property)){
    delete arr[property]
}
return arr
}
console.log(d2(arr,'age'))

//Write a function to delete a specific user object from a list of users.
let user = [
    { username : "isabele", email : "isabelle@gmail.com", age : 20},
    { username : "salma", email : "salma@gmail.com", age : 30}
]
function d3(arr,username){
    let res =  arr.findIndex((item)=> item.username === username)
    arr.splice(res,1)
    return arr
}
console.log(d3(user,'salma'))

//Create a function to remove completed tasks from an array of to-do tasks.
let todoList = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Finish homework", completed: true },
    { id: 3, task: "Call friend", completed: false }
]
function d4(arr){
    let res = arr.findIndex((item)=> item.completed === true)
    arr.splice(res,1)
    return arr
}
console.log(d4(todoList))

//Implement a function to remove a product from an array of products by its ID.
let todoList = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Finish homework", completed: true },
    { id: 3, task: "Call friend", completed: false }
]
function d5 (arr, id){
    let res = arr.findIndex((item)=> item.id === id)
    arr.splice(res, 1)
    return arr
}
console.log(d5(todoList,3))

