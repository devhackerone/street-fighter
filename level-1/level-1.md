
## Comments

The syntax of comments is the same as in C++ and in many other languages. 
Comments behave like white space and are discarded during script execution.

```css
.chart {
  display: flex;
  flex-wrap: wrap;
  // dominant-baseline: central;  not supported by IE 9 :(
}
```

```javascript
/**
* returns the name of the lecture
* @param {string} course 'js' | 'php' | 'net'
* @returns {string} 
*/
function getLectureName(course) {
  switch(course) {
    case 'js': return 'Introduction to JavaScript';
    case 'php': return 'Laravel - The PHP Framework';
    case 'net': return 'C# and .NET framework';
  }
}
```
## Declarations

There are three kinds of declarations in JavaScript:
 - `var` - Declares a variable, optionally initializing it to a value.
 - `let`  - Declares a block-scoped, local variable, optionally initializing it to a value.
 - `const` - Declares a block-scoped, read-only named constant.

```javascript
  var message;
  message = 'Hello World'; 

  var name = 'Jhon', 
      age = 24;
```

```javascript
  let count = 10;
  if (count > 5) {
    let count = 5; // count = 5
  }
  // count here still equal 10

  alert(greeting); // error
  let greeting = 'Hello';
```

```javascript
  const user = {
    name: 'Jhon',
    age: 24
  };
  
  const PRIMARY_COLOR = '#ccc';
  ```

## Types
**ECMAScript** standard defines seven data types.

### Boolean
The boolean type has two values: `true`  and `false`.
```javascript
let isValid = true;
isValid = false;
```
### Number
An integer or floating point number.
```javascript
const  age  =  23;
const  coef  =  12.345;
```
```javascript
const  hex  =  0x00111; // hexadecimal, base 16 starts with 0x
const  octal  =  0o01; // octal, base 8 starts with 0o
const  binary  =  0b0011; // binary, base 2 starts with 0b
```
The number type has three symbolic values: `+Infinity`, `-Infinity`, and `NaN` (not-a-number).
```javascript
const  result  =  2  /  "text"; // NaN
isNaN(result); // true
```
### String
A sequence of characters that represent a text value.
JavaScript strings are **immutable**.
```JavaScript
let str = "Hello world"; 
str = 'new string';

let age = 23;
let newStr = `age - ${age}`;
console.log(`first line
second line`);
```
```javascript
str.length // 10
str.charAt(2) // w
str.toLowerCase() // "new string"
str.toUpperCase() // "NEW STRING"
str.indexOf('str') // 4
newStr.substring(11, 17) // second
newStr.substr(11, 6) // second
```
### null & undefined
`null`  a special keyword denoting a null value.
```javascript
let  x  =  null;
```
`undefined` a top-level property whose value is not defined.
```javascript
let  y; // undefined
```

### Symbol
A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

```javascript
let  isAdmin  =  Symbol('isAdmin');

let  user  = {
	name:  'Jhon',
	[isAdmin]:  true
}

user.isAdmin; // undefined
user[isAdmin]; // true
```
## Type Conversion
JavaScript variables can be converted to a new variable and another data type:
-   By the use of a JavaScript function
-   Automatically by JavaScript itself

Converting to **string**
```javascript
String(null) // "null"
false.toString();  // "false"
12 + 'px' // "12px"
```

Converting to **boolean**
```javascript
 0, '', null, undefined, NaN -> false
if (12) { }
Boolean(undefined) // false
console.log(!!'text'); // true
```

Converting to **numbers**
```javascript
Number(true) // 1
parseInt('3.14') // 3
parseFloat('3.14') // 3.14
12 - '4' // 8
12 + '4' // "124"
12 + +'4' // 16
```

## Control flow
-   Block statement
-   Conditional statements
	-   if...else statement
	-   switch statement

```javascript
if (age < 18) {
  ageCategory = 'young';
} else if (age > 50) {
  ageCategory = 'old';
} else {
  ageCategory = 'adult';
}
```

```javascript
switch(ageCategory) {
  case 'young': 
    console.log('less than 18');
  case 'adult': 
    console.log('from 18 to 50');
    break;
  case 'old': 
    console.log('older then 50'); 
    break;
  default: 
    console.log('unknown');
}
```

## Loops and iteration
Loops offer a quick and easy way to do something repeatedly.
The statements for loops provided in JavaScript are:

- `for` statement   
- `break` statement
- `continue` statement
```javascript
for (let step = 0; step < stepCount; step++) {
	const value = step * intervalComputed;

	if (value === 0) {
		labelsFromRange.push('0');
		continue;
	}
	
	const labelText = formatNumber(value, decimalSeparator);
	const labelWidth = getTextWidth(labelText);
	const isLastStep = step === stepCountWithMargin;

	if (isLastStep && remainingAxisLength < labelWidth) {
		break;
	}
	
	labelsFromRange.push(labelText);
}
```
-   `while` statement
```javascript
let level = currentLevel;

while(level >= 0) {
	// do something
	level--;
}
```
-   `do...while` statement
```javascript
do {
  // do something
  level--;
} while (lavel >= 0);
```
-   `for...in` statement
```javascript
Array.prototype.customFunction = function() {};

let weekends = ['Sat', 'Sun'];

for (let i in weekends ) {
  console.log(i); // 0, 1, "customFunction"
}
```
-   `for...of` statement
```javascript
Object.keys().forEach((key) => { ... });

const user = { firstName: 'Mike', lastName: 'Din' };  

for (let value of user) {  
  console.log(value); // Mike, Din  
}
```