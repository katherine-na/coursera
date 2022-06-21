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

# Designing For Accessibility

## Follow the POUR guidelines

## Perceivable

- Provide text alternatives for images
- Provide captions and transcripts for video and audio
- Use correct semantic markup so content can be presented in different ways
- Make it easier for users to see content by using good color contrast

## Operable

- All functionality available from the keyboard!
- Users have control over timing and limits
- Do not cause seizures (don't flash content)
- Provide ways to help users navigat, find content, and determine where they are

## Understandable

- Text supplemented with ilustration, videos and other formats where appropriate
- Navigation, information structure are discernable and consistent
- Make pages operate in predictable ways

## Robust

- Syntax errors that don't affect visual presentation may hamper assistive technology and accessibility tools

# Pseudo Classes and Elements

- Elements that are dynamically populated or dependent on tree structure

| Types of pseudo clases |                               |
| :--------------------- | :---------------------------- |
| Link                   | :link, :visited               |
| User action            | :hover, :active, :focus       |
| Forms (interfaces)     | :enabled. :checked, :disabled |

# Transitions

- When elements transition from one state to another, you can alter their appearance
  - If you hover over the link, change the color
  - If an imagen comes into focus, change the size

| The properties      |                                                             |
| :------------------ | :---------------------------------------------------------- |
| transition-property | what is it you want to change? (size, color, position, etc) |
| transition-duration | how long should each transition last?                       |
| transition-timing   | should it be a smooth transition (linear)? or different?    |
| transition-delay    | how long should the wait be before the transition begins?   |

## seting up

1. Define your element
2. Choose the elements for transition
3. Define the new values
   - You must combine this step with a pseudo-class

```css
div {
  color: #000000;
  background: #ffffff;
  line-height: 200px;
  text-align: center;
  width: 250px;
  height: 200px;
  border-radius: 6px;
  transition-property: color, width, background, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition-delay: 0.5s;
}
```

```css
div:hover {
  color: ffffff;
  width: 350px;
  background: #2d31b3;
  border-radius: 50%;
}
```

```css
div:active {
  color: #000000;
  width: 150px;
  background: #00ddb3;
}
```

![](https://www.rithmschool.com/content/intermediate_css_bootstrap/transition.gif)

# Transforms

## Traslate

- transform:translate(x, y);
  - move x pixels to the left/right and y pixel up/down
  - transform:traslate(100,75);

## Rotate

- transform:rotate(deg);
  - rotate/"spin" the element a certain number of degrees
  - transform:rotate(30deg);

## Scale

- transform:scale(width and height);
  - change the width and height of the element
  - transform:scale(2,3)

## Skew

- transform:skew(x-angle, y-angle);
  - rotate the element a certain number of degrees along the x and y axis
  - transform:skew(30deg, 15deg);

## Matrix

- matrix();
-
