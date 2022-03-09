// 1. How to declare a variable using let and const
// const fatherName = 'Arnold';
// let season = 'rainy'



// 2
// 6 basic condition condition >,<, ===, !==, <=, >=
// multiple condition: && ||

if(fatehrName === 'arnold' || season || 'rainy'){

}
else if (fatehrName === 'aronld'){

}
else{}

// 3. array
const numbers = [23, 34.6354, 343];
numbers[0] = 56;
// index
// length, push

// 4. for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}

// 5. function
function multiple(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiple(43, 76);

// 6. Object
// 3 ways to access property by name
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mustan']
}

const myVariable = 'age';
console.log(student.name);
console.log(student.age);// access via property name string
console.log(student['age']);// access via property name string
console.log(student[myVariable]);// access via property name in a variable.
