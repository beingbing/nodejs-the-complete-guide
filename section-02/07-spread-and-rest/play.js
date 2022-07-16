const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// spread operator usage: pulling out and spreading
const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);


// rest operator usage: clubbing into one
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
