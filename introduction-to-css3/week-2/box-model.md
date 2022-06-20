# Box Model

## Width and Height

- The default width of inline elements in the content
- Elements that are not inline can take width and height properties

  ```css
  header {
    width: 30px;
    height: 40px;
  }
  ```

## Border

- Any element can have a border around it
- Border property specifies style, width and color
- The border style must be specified
- Width
  - set in pixels or thin, medium or large

![](https://i.stack.imgur.com/gieW6.png)

```css
header {
  border: 30px;
}
```

## Margin

- Is additional space _outside_ your border - between you and neighbor

```css
header {
  margin: 40px;
}
```

## Padding

- Is additional space _between_ the element and its border

```css
header {
  padding: 10px;
}
```

# Styling Links

## States

- a:link : A normal, unvisited link
- a:visited : Has been visited
- a:hover : Actived by mouse
- a:focus : Actived with the keyboard

```css
a:hover {
  background-color: rgb();
  color: rgb();
}
```

![](https://webartdevelopers.com/blog/wp-content/uploads/2018/11/icons-hovering.gif)

# Styling Lists

## list-style-type

Ordered lists

| Options              |
| :------------------- |
| lower-roman          |
| upper-roman          |
| decimal              |
| decimal-leading-zero |
| upper-alpha          |
| lower-alpha          |
| hebrew               |
| armenian             |

```css
ul {
  list-style-type: upper alpha;
}
```

## list-style-image

Use a custom image instead of traditional marker

```css
list-style-image: square url("icon.gif");
```

<!-- ## list-style-position

## list-style -->

# Advance Selectors

- Some selectors follow the DOM
- Descendant selectors (nav a)
  - Style all of the anchor links inside a nav tag
- Child selector (nav > a)
  - The anchor elements must be a child of the nav, no intermediate tags, e.g. paragraph
- Adjacent sibling(hl + ol)
  - Elements must be at the same level and follow each other

## Id Selectors

- Used to identify a single element in the DOM.
- Was used extensively for `<div id="header">`
- There is a small movement to move the use of Id OUT of css

```html
<img src="#" id="main-logo-img" />
```

```css
#main-logo-img {
  border: 5px solid black;
  margin: ;0 auto;
}
```

## Class Selectors

- Use to identify and element in the DOM that is part of a special class of items

```html
<img src="#" id="thumb" />
<img src="#" id="thumb" />
<img src="#" id="thumb" />
```

```css
.thumb {
  border: 1px solid black;
  width: 20%;
}
```

## Class vs. Id

- Syntax is "." and "#"
- Classes can be used multiple times
- Id should be unique

# Browser Capabilites

## Browser Prefixes

- -webtik-: Android, Chrome, ¡OS, Safari
- -moz-: Firefox
- -ms-: Internet Explore
- -o-: Opera
