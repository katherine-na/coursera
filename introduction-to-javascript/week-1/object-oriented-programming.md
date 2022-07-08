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


## JavaScript OUTPUT

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

## Variables 
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