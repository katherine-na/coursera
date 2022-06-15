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

## Development tools

## Color

![](https://freebiesui.com/wp-content/uploads/2017/03/sketch-gradients-color-palette-modern-ui-resource.jpg)

## Font

- font-family
- font-style
- font-size
- font-variant
- color and background
- alignment
- line-height
