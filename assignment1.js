    // 1
let s = 'Akorede';
let n = 15;
let b = true;
let o = [];
let u;
let g = null;

    // 2
console.log(typeof(s))
console.log(typeof (n))
console.log(typeof (b))
console.log(typeof (o))
console.log(typeof (u))
console.log(typeof (g))

    // 3
let a;
let h;

    // 4
const firstName = 'Sodiq';
const lastName = 'Mohammed';
let maritalStatus = 'single';
let country = 'Nigeria';
let age = 15;

    // 5
console.log(Boolean(s))
console.log(Boolean(n))
console.log(Boolean(o))

    // 6
let false1 = 0;
let false2 = '';
let false3;

console.log(Boolean(false1))
console.log(Boolean(false2))
console.log(Boolean(false3))

    /// OPERATORS
    // 7
let num1 = 8 + 3;
console.log(num1)

let num2 = 8 - 3;
console.log(num2)

let num3 = 8 * 3;
console.log(num3)

let num4 = 8 / 3;
console.log(num4)

let num5 = 8 % 3;
console.log(num5)

let num6 = 8 ** 3;
console.log(num6)

    // 8
function evenOrOdd(n) {
    if (n % 2 == 0) {
        return 'even';
    }
    if (n % 2 !== 0) {
        return 'odd';
    }
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(3))

    // 9
console.log(Boolean(4 > 3));
console.log(Boolean(4 >= 3));
console.log(Boolean(4 < 3));
console.log(Boolean(4 <= 3));
console.log(Boolean(4 == 4));
console.log(Boolean(4 === 4));
console.log(Boolean(4 != 4));
console.log(Boolean(4 !== 4));
console.log(Boolean(4 != '4'));
console.log(Boolean(4 == '4'));
console.log(Boolean(4 === '4'));
console.log(Boolean(4 > 3 && 10 < 12));
console.log(Boolean(4 > 3 && 10 > 12));
console.log(Boolean(4 > 3 || 10 < 12));
console.log(Boolean(4 > 3 || 10 > 12));
console.log(Boolean(!(4 > 3)));
console.log(Boolean(!(4 < 3)));
console.log(Boolean(!(false)));
console.log(Boolean(!(4 > 3 && 10 < 12)));
console.log(Boolean(!(4 > 3 && 10 > 12)));
console.log(Boolean(!(4 === '4')))

    // 10
const myArray = ['it', 'me', 'go', 'so', 'to', 'of']
console.log(myArray.length)
myArray[2] = 'third';
myArray[4] = 5;
// console.log(myArray)
console.log(myArray[1])

    // 11
let myObject = {
    firstName: 'Aliyah',
    lastName: 'Egems',
    maritalStatus: 'single',
    country: 'Nigeria',
    age: '15'
}

myObject.country = 'Jand'
// console.log(myObject.country)

    // 12
let meat = 2; // a
let fish = 2; // b
    // Using if else
function meatFish() {
    if (meat > fish) {
        return 'a is greater than b'
    } else if (meat < fish) {
        return 'b is greater than a'
    } else {
        return 'a is equal to b'
    }
}
    // Using ternary operators
meatFish = () => (meat > fish) ? [('a is greater than b')('b is greater than a')] : 'a is equal to b' // one liner is sweet. My first one liner. Just did trial by error for three condition.🙃

console.log(meatFish())

    // 13
function grades(score) {
    if (score <= 100 && score >= 90) {
        return 'A'
    } else if (score <= 89 && score >= 70) {
        return 'B'
    } else if (score <= 69 && score >= 60) {
        return 'C'
    } else if (score <= 59 && score >= 50) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(grades(90))






