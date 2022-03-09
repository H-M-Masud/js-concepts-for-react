const numbers = [23, 34.6354, 343];
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mustan']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`

// 2. arrow function
const getFiftyFive = () =>55;
const addSixtyFive = num => num + 65;
const isEvent = x => x % 2 == 0;
const addThree = (x,y,x) => x + y+ z;
const doMath = (num1, num2) =>{
    const sum = sum1 + sum2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
numbers.push(45);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];