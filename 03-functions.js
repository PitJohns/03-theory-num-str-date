// Function Declaration 
function greet(name) {
    console.log('Hello - ', name)
}
// Function Expression можно использовать 
//  функцию только после объявления
const greet2 = function (name) {
    console.log('2 Hello - ', name)
}

greet('Vladilen')
greet2('Vladilen')

//console.dir(greet.toString())

/*setTimeout(function() {
     greet('Vladilen2')
}, 1500)*/

/*setInterval(function () {
    console.log(1)
}, 2000)*/