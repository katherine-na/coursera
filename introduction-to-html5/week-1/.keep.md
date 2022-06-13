# What is HTML?

HTML stands for HyperText Markup Language.  
Markup languages are not the same as programming languages, they use tags to annotate documents.  
In HTML the tags indicate where headings, images, lists, links, line breaks, and other components should go.

## .html Files

When your computer opens a .html file, it knows to open it in an Internet browser (Chrome, Firefox, Safari, etc)  
The browser can read this file and know how to display it on the screen.
Screen readers and other assistive devices can also utilize the HTML tags to present the information is special ways.

# History and Evolution

HTML(I) was created in 1990 as a way to electronically connect documents via hyperlinks.  
It is required that HTML be a common language between all plataforms. This implies no device-specific markup, or anything.  
which requires control over fonts or colors, for example.

## Mosaic

In 1993, Mosaic emerged as the first graphical browser.  
Mosaic had challengers though in the form of Netscape (1994), Internet Explore (1995) and others.

## The Browser Wars

Browsers had proprietary tags. Tags that only work on the browser.  
Other tags that went against the spirit of the original tenets of HTML.  
Origination of "Best viewed on" messages.

### Web Standards

No one "runs" the Internet or the web, some groups do take proactive roles
Internet Engineering Task Force (IETF)  
World Wide Web Consortium (W3C)  
The Web Accessibility Initiative (WAI)

| 1990 - 1994 | HTML was simple, content was primarily text-based              |
| :---------- | :------------------------------------------------------------- |
| 1993        | Mosaic enters the scene with images and... BOOOM!              |
| 1995 - 1999 | Cross-Browser compatibility falls apart                        |
| 2000 - 2005 | Browsers move toward separating content from style             |
| 2005 - 2008 | Using HTML files in coordination with CSS becomes new standard |

## Evolution of HTML

| 1993 | HTML 1.0 - Developed by Tim-Berners-Lee to link document                                        |
| :--- | :---------------------------------------------------------------------------------------------- |
| 1995 | HTML 2.0 - Developed by Internet Engineering Task Force RFC to include stylized text and tables |
| 1996 | CSS 1                                                                                           |
| 1997 | HTML 3.2 - Developed by W3C and included browser specific features                              |
| 1997 | HTML 4.0 - A move back to normalizing the pages across platforms                                |
| 1998 | CSS 2                                                                                           |
| 1999 | HTML 4.1 - Introduced different document types                                                  |
| 2012 | HTML 5 - Back to HTML plus multimedia and semantic tags                                         |

### Where are Now?

- HTML5 is a cooperation between W3C and the Web HyperText Application Technology Working Group
- Established Guidelines
  - New features should be based on HTML, CSS, the DOM and JavaScript
  - Reduce the need for external plugins
  - More markup to replace scripting
  - HTML5 should be device independent

# How It Works

## Client/Server Relationship

- Servers
  - Machines that hold shared resources
  - Always connected to the network
- Clients
  - Machines for personal use (laptops, phones, etc)

## Networks

- LAN
  Local Area Network
- WAN
- Wide Area Network

![](<https://www.lifewire.com/thmb/dY5LcDZ4wuM2wFdXGOOhFoB7LJg=/1500x844/smart/filters:no_upscale()/lans-wans-and-other-area-networks-817376-6e07f1a4121a4e13ac43660ea41ef9b9.png>)

This is what happens when your computer (the client) requests a page and a server responds with the appropriate files

## Uniform Resource Locator

- URL - three parts
  - protocol - how to connect
  - domain - the server
  - (optional) document - the specific file needed

### Protocols

- HTTP - Hypertext Transfer Protocol
- HTTPS - Secure Hypertext Transfer Protocol
- FTP - File Transfer Protocol

### Domain Names

- Identifies the entity you want to connect to
- Each has different top-level domain
  - Determined by Internet Corporation for Assigned Names and Numbers (ICAAN)

### Document

- URL can specify a specific document

![](https://tooit.com/wp-content/uploads/SUB-e1598572929723.png)

### The Request

Once the IP address is determined, the browser creates an HTTP request

### The Response

The server returns files, not "web pages"  
If the server can't fulfill the request it will send back files wih error codes: 404, 500, etc.

## Tools and Tips

### Differing browsers

- Different browsers have their pros and cons
- Most people have a preferred browser
- You need to test your site on multiple browsers

![](https://blog.ivrpowers.com/postimages/technologies/ivrpowers-web-browser.007.jpeg)

### Creating and Editing Your Files

- Decide how you will organize your files
- Decide on a naming convention
- Decide on an editor
