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
