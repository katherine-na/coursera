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

# Positioning

## The 4 position properties are:

- static
- relative
- absolute
- fixed

Position are modified by the properties: top, right, bottom, left.

## Static

- Default value for elements
- Place in the available position
- No affected by the top, bottom, left and right properties

## Relative

- Positioned "relative to itself"
- Take the static position, but add offsets.

## Absolute

- Element is removed from the document flow and positioned relative to it's nearest
  ancestor (or the root)
- Other elements behave as if element does no exit
- Can end up on top of another element

## Fixed

- Positioned relative to the browser window
- Will not move, even if the window is scrolled

![](https://miro.medium.com/max/1200/1*3nHXvVEEbQziTats5DlZOA.png)
