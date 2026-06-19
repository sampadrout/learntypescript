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