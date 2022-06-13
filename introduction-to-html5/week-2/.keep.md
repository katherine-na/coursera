# The Document Object Model (DOM)

Basis of HTML5 is "New features should be based on HTML, CSS, the DOM and JavaScript"  
DOM provides common tree-like structure that all pages should follow

## HTML Is Built On The DOM

![](https://miro.medium.com/max/461/1*XKhoU3EZcH9CrUfD5iztCw.png)

### Three parts of a well-formed document

- Doctype
  - Version of HTML that you will be using
- Head
  - Metadata
- Body
  - Displayable content

## Doctype

- HTML5
- Previous versions dictated backwards compatibility

## Head

- Aditional information used by the browser
  - Meta data - languaje, title
  - Supporting files - JavaScript, Styling
- Other than title, meta-data, is not displayed

## Body

- Bulk of your page
- Important to write well-formatted (tree-like) code
- Most of the content is displayed by the browser, but there may be some meta-data too

### Well-formed pages use the DOM structure

- Use beginning and end tags
- Close inner tags before outer ones
- Use valid attributes

# HTML5 Elements - Tags, Syntax, Semantics and Templates

- Tags have a beginning and an end
- Some tags have attributes (src, href, etc)

![](https://i.dlpng.com/static/png/7183819_preview.png)

## Display

- One of the most important attributes of an element is its display. The two most common are _*block*_ an _*inline*_
  - Block (can take width and height)
  - Inline (can not take width and height)

## Special Entities

| If you want... | Then use |
| :------------- | :------- |
| <              | &lt      |
| >              | &gt      |
| ©              | &copy    |
| black space    | &nbsp    |
| &              | &amp     |
| ¢              | &cent    |

# Semantic Tags

You need a clear picture of what you want to create, before you can begin coding
![](https://internetingishard.netlify.app/html-sectioning-elements-00c3fd.a9d1b00b.png)

## Header Tag

A group of introductory or navigational aids: title, navigation links, etc  
Not be consused with `<head>` or the different headings

## Nav Tag

A section of the page that links to other pages or to parts within the page  
Often found in the `<header>` tag

## Footer Tag

A section that contains info such as copyright data, related documents, and links to social media  
Typically at the bottom of the page, but not required

## Figure Tag

More semantics than `<img>`. Can include:

- Caption
- Multiple multi-media resources
- `<figcaption>`

## Other New Tags in HTML5

- Structural Elements
  - `<article>, <aside>, <main>, <menuitem>, <summary>, <section>`
- Form Elements
  - `<datalist>, <keygen>, <output>`
- Input Types
  - Color, date, email, list
- Graphics Elements
  - canvas, svg
- Media Elements
  - Audio, embed, source, track, video

# Images

Best practices for adding images, it's more than the tag

- Many file types are widely supported
  - jpeg, (.jpg and .jpeg) .gif and .png
  - svg and bmp are additional options
  - file extensions must be included
- Every image must be downloaded, so size can be a factor
- Every image requires and HTTP request

## Image Sizes

- When you link to an image the browser displays the image as big (or small) as the file
  - This size is rarely optimal
- "Quick" solutions - change file, use width/height attributes

## Favicons

- You can put image/logo/icon next to the title of your page (in the tab)
- Must go in `<head>` section

## Alternative Text Attribute

- Provides a textual alternative to non-text content
- Read by screen readers
- Displayed in place of images
- Provides semantic meaning for search engines

# Hyperlinks

## Links

- The `<a>` tag stands for anchor link
- Need a hyper-reference and content
  - `href`: reference to location of new content
  - content: the "clickable" part (text or image)

## Types of Links

- Absolute
- Relative
- Internal
- Graphical

## Targets

Anchors can take a target attribute

- \_self - default action
- \_blank - open in new tab or window
- \_top and \_parent

# Multimedia

## Video Element

- `<video>` tag uses a src attribute or embedded `<source>`
- Common attributes
  - height, width
  - autoplay
  - loop
  - controls
- Text inside `<video>...</video>` is displayed if browser can not support tag

## Audio Element

- `<audio>` tag uses a src attribute to link to audio file, typically .mp3 or .wav
- Common attributes
  - autoplay
  - buffered
  - muted
  - volume

![](https://disenowebakus.net/imagenes/articulos/elementos-sitio-web.jpg)

# Tables

## The tags

- `<table>` - the container tag
- `<tr>...</hr>` - the rows
- `<td>...</td>` - the columns
- `<th></th>` - table heading
- `rowspan="2"`
- `colspan="2"`
- `<caption>`
