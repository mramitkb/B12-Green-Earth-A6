# Questions:
1) What is the difference between var, let, and const?
2) What is the difference between map(), forEach(), and filter()?
3) What are arrow functions in ES6?
4) How does destructuring assignment work in ES6?
5) Explain template literals in ES6. How are they different from string concatenation?


# Answers:

### 1st Answer:

`var` = Functional Scope, Hoisted(Undefined-variable assigned but value not assigned, so undefined), Can Redeclare/Reassign. <br>

`let` = Block Scope, Hoisted(in Temporal Dead Zone), Can Reassign but not Redeclare. <br>

`const` = Block Scope, Hoisted(in Temporal Dead Zone), Can't Redeclare/Reassign.

<hr>

### 2nd Answer:

`map()` = map() will loop through every values/elements and give us an array in return. <br>

`forEach()` = forEach() will loop through every values/elements and execute it(not returned anything). <br>

`filter()` = filter() will loop through every values/elements in an array and apply condition for every values/elements which I have given to the function. Then, returned matched values/elements in a new array. <br>

<hr>

### 3rd Answer:

`Arrow Function`: Arrow Function(=>) is a cleanest and shorter way to write functions than normal functions in JavaScript. It has implicit return, but hasn't its own this, arguments.


##### Example:
```js
const arrowFunc = () => 3 + 6 + 9;
```

<hr>

### 4th Answer:
`Destructuring`: Destructuring comes in ES6 and it's very useful for [], {}, () = array, object & function values destructuring.

##### Example:
```js
const arr = [3, 6, 9];
const [a, b, c] = arr; // array destructuring
```

```js
const person = {
    name: "Jack", age: 30, isMarried: true
}
const {name, age, isMarried} = person; // object Destructuring
```

<hr>

### 5th Answer:
`String Concatenation`: We have to use multiple symbols (+, "") etc to show element in a line. It's looking like a messy code. <br>

`Template literals`: Template literals is very much useful for dynamic data load and to show simple line element(use backticks(``)).


##### Example:
```js
const name = "Jack";
const age = 30;
const withString = name + " is " + age + " years old."; // String Concatenation
const withBacktick = `${name} is ${age} years old.`
```