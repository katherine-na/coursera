# Cascading Style Sheets

CSS defined generic rules that can apply to multiple elements

## The Syntaxis

- Brackets and semicolons are very important

![](https://cdn.devdojo.com/guides/css/css-syntax-1469106898.png)

## Internal Style Sheet

They are defined within the `<style>` element, within the `<head>...</head>` section of an HTML page:

```html
<head>
  <meta charset="UTF-8" />
  <title>Tittle here</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

## External Style Sheet

- You can put rules in a external file with extension `.css`
- A link to the style sheet is put in the head section

```html
<link rel="stylesheet" href="mystyle.css" />
```

- Styles are applied to all elements in all files that links to the style sheet

# Color

## Color conventions

- Color names (blue, red, yellow, green, etc) work, but should be avoided.
- Hexadecimal is common convention

  ```
  #0000FF, #FF0000, #FFFF00;
  You can use from 0 to 9 but also A B C D E F
  F is the strongest number
  ```

- rgb
  ```
  (0,0,1) (1,0,0) (1,1,0)
  ```
  ![](https://freebiesui.com/wp-content/uploads/2017/03/sketch-gradients-color-palette-modern-ui-resource.jpg)

# Stylling Your Text

## font-family

Options

- verdana
- cursive
- courier
- hervica
- arial
- etc

```css
h1 {
  font-family: helvica;
}
```

## font-size

Options

- xx-small, x-small, small, smaller
- medium
- large, x-large, xx-large, large
- use pixel or porcent

```css
h1 {
  font-size: medium;
}
```

## font-style

Options

- normal
- italic
- oblique

```css
h1 {
  font-style: italic;
}
```

## font-variant

Options

- normal
- small-caps

```css
h1 {
  font-variant: normal;

```

## color

The color atributte is the color of the foreground

```css
h1 {
  color: black;
}
```

## background

The background-color is the color of the background

```css
h1 {
  background-color: white;
}
```

## text-align

Options

- left
- right
- center
- justify

```css
h1 {
  text-align: center;
}
```

## line-height

Adjust the space between the lines of text

```css
h1 {
  line-height: 50%;
}
```

# Display and Visibility

- Every element is a box
- Display affects the layount of neighboring elements

  ## Common Values

  - inline

    - Sits next to other elements
    - Take up "just enough" width and height

  - block

    - Forces the line break
    - Default: take up all horizontal width

  - inline-block

    - Same as inline, but accepts height and width and "just enough" height
    - Rules can set height and width

  - none: removed from page

![](https://blog.4psa.com/wp-content/uploads/block-inline1.png)

## display

## float

- Reposition elements to the right or left
- Elements are aware of one another and will not overlap
- Values: left, right

## clear

- Use to keep floating elements away
- Values: left, right, both
