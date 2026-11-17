// 1.-------------------------------------

console.log(Number("123") + 7)

// 2.-------------------------------------

let value = 0
if (!value) {
    console.log("Invalid")
}

// 3.-------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

// 4.-------------------------------------

const numbers = [1, 2, 3, 4, 5]
const result = numbers.filter(num => num % 2 === 0)
console.log(result)

// 5.-------------------------------------

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const result1 = [...arr1, ...arr2]
console.log(result1)

// 6.------------------------------------



let day = 2
switch (day) {
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Invalid Day")
}

// 7.-------------------------------------

const strings = ["a", "ab", "abc"]
const result2 = strings.map(str => str.length)

console.log(result2)

// 8.-------------------------------------

function check(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both"
    } else {
        return "Not divisible by both"
    }
}
console.log(check(15))

// 9.-------------------------------------

const square = num => num * num
console.log(square(5))

// 10.-------------------------------------

const person = { name: "John", age: 25 }
function getPerson({ name, age }) {
    return `${name} is ${age} years old`
}
console.log(getPerson(person))

// 11.-------------------------------------

function sum(a, b, c, d, e) {
    return a + b + c + d + e
}
console.log(sum(1, 2, 3, 4, 5))

// 12.-------------------------------------

function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success")
        }, 3000)
    })
}
getMessage().then(message => console.log(message))

// 13.-------------------------------------

function largestNumber(numbers) {
    let largest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest
}
console.log(largestNumber([1, 3, 7, 2, 4]))

// 14.-------------------------------------

function getKeys(obj) {
    return Object.keys(obj)
}
const person1 = {
    name: "John",
    age: 30
}
console.log(getKeys(person1))

// 15.-------------------------------------

function split_Words(str) {
    return str.split(" ")
}
console.log(split_Words("The quick brown fox"))
