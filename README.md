# learntypescript

How to write arrayes
--------------------
Here is the master rule to help you remember.
In almost all modern languages, square brackets represent a standard list or array.

Like key value pairs in javascript and python
Ex. user = { name: "Alex", age: 25 }

In java, we first create an array using square bracket and then assign values using curly braces
Ex. int[] numbers = {1, 2, 3};

How to write JSON array and JSON objects
-----------------------------------------
Is it a list of items? Use [].
Is it a single item with descriptive labels? Use {}.
JSON Array:
[
  { "name": "Alice", "age": 30 },
  { "name": "Bob", "age": 25 }
]
JSON Object:
{
  "name": "Alice",
  "hobbies": ["reading", "hiking", "coding"]
}

Arrow function anatomy
------------------------
const functionName = (parameters) => {
    // code
}

const square = (x: number) => x * x;

const greet = (name: string): string => {
    return `Hello ${name}`;
}

10. Arrow Functions in Arrays
const numbers = [1,2,3,4,5];
numbers.forEach(num => {
    console.log(num);
});

11. map()
const numbers = [1,2,3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

Output
[2,4,6]

12. filter()
const numbers = [10,20,30,40];
const result = numbers.filter(num => num > 20);
console.log(result);

Output
[30,40]

13. find()
const numbers = [10,20,30,40];
const result = numbers.find(num => num > 20);
console.log(result);

Output
30