<h1 align="center"> The DOM and JavaScript </h1>

- Page content is represented by the DOM
- JavaScript use the DOM to interact with the document

## How Does It Work?
- Accessing the DOM is done with an API
  - No  matter which browser, no matter which scripting languaje, the API is the same

## The DOM Objects/Elements

- document - the root of the page
- element - a node in the tree
- nodeList - group of elements 
- attribute 

## Specific APIs

- document.getElementById(id)
- document.getElementByClassName(class)
- element.innerHTML
- element.style
- element.setAttribute(attribute, value)
- element.removeAttribute(attribute)

## What Can JavaScript Do?
- Real and write HTML elements
- Reacts to events (mouse events, keyboard events,etc)
- Create cookies


<h2 align="center">JavaScript Output</h2>

Data is displayed via
- alert box usinf window.alert()
- prompt using window.prompt()
- HTML output using document.write()
- HTML element using innerHTML()
- the browser console using console.log

### alert()
In JS, an alert is a pop-up window thar displays information
```js
    alert("My Message Here");
```

### prompt()
Very similar to alert, but wants input
```js
    prompt("Enter your name");
```

### document.write()
Writes directly to the page
```js
    document.write("Time to learn JavaScript")
```

### innerHTML
To change the contents of the DOM, use innerHTML combined with the element you want to change
```js
    element.innerHTML="Time to learn JavaScript";
```

### console.log
Write the data to the browser console
```
console.log("Leave a secret message")
```

<h2 align="center">Variables</h2> 
- In JavaScript, data is a stored in Variables
- To ouse a variable, you have to declare it 
```
var name;
```

### Variable Names
- Consists of letters, digits, underscores, and dollar sign($)
- Can not start with a digit
- Are case-sensitive...
  - name Name, naMe, NAME, are all different variables

### Variable Assigments
- You cant assign values using the = operator
    ```
        var name = "Katherine";
    ```

### Assignment Statements

- LHS - the variable being updated 
- RHS - the new value that will be stored in the variable

### Using a Variable 

```
var name=prompt("What is your name?")
document.write(name);
var date=Date();
document.write(date);
var location=window.location;
document.write(location);
```

<h2 align="center">Data Types</h2>
In JavaScript, a variable can take on many different types

### Number 
Numerical values 
- with or without decimals

### String 
- Is a collection of characters (letters, numbers, ...)
- To create a string you put the value in quotes "..."

### Boolean
A boolean value is one that is either true or false

### Objects 

### Array 

<h2 align="center">Operator and Expressions</h2> 

### Statements
-Statements have been using to excute our JavaScript code.
- Statements often have expressions 
- Expressions produce values

### Assignment Operators

| Operator | Example | Value stored in x|
|:----| :---- | :-----|
| = | x = 5 | 5 |
| = | y = 12 | |
| | x = y | 12 |

### Arithmetic Operators

| Operator | Example | Value stored in x |
|:----- | :---- | :----- |
| + | x = 2 + 5 | 7 |
| - | x = 5 - 2 | 3 |
| * | x = 2 * 5 | 10 |
| / | x = 5/2 | 2.5 |
| % | x = 5 % 2 | 1 |


| Operator | Example | Value stored in x |
|:----|:-----|:----|
| ++ | x =5; | 5|
|  | x++; | 6 | 
| -- |x = 12; | 12 |
| | x--; |11 |
| += | x=2; | 2 |
| | x +=5; | 7|

### String Operators

| Operator | Example | Value stored in x |
|:-----|:----|:-----|
| + | x = "Hi"+"There" | "HiThere" |
| + | x = "Hi" + 5 | "Hi5" |
| += | x = "Hi" | |
| | x + "There" | "HiThere" |

### Boolean Operators 
We can also use operators to compare values

| Operator | Example | Returns |
|:----|:----|:----|
| == | x==5 | false |
| === | x==12 | true |
| !== | x !==5 | true|