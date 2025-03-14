// Function Declaration 
/*function greet(name) {
    console.log('Hello - ', name)
}
// Function Expression можно использовать 
//  функцию только после объявления
const greet2 = function (name) {
    console.log('2 Hello - ', name)
}

greet('Vladilen')
greet2('Vladilen')*/

//console.dir(greet.toString())

/*setTimeout(function() {
     greet('Vladilen2')
}, 1500)*/


/*let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
      clearInterval(interval)
    } else {
        console.log(++counter)
    }    
}, 2000)*/

//Arrow function

function greet(name) {
    console.log('Hello - ', name)
}
 
const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}

const arrow2 = (name) => console.log('Hello - ', name)

function pow(num, exp) {
    return Math.pow(num, exp)
}
const pow2 = (num, exp) =>  Math.pow(num, exp)

console.log(pow2(2, 3))

// ==== Default Parameters
const sum = (a, b) => a + b

console.log(sum(40, 2))