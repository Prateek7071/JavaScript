- HTML is not an array by default it is a collection, it can be converted to one. So properties like map,forEach are not available.
- Although as it is like an array we can access some properties like array 
ex console.log(document.links(2)), and can manipulate a lot of things.
---------------------------------------------------------------------------------
Document Object Model

>[!Diagram](../assets/DOM.png)
---------------------------------------------------------------------------------
Manipulating html tags
> using tool to find id
[!Diagram](../assets/1.png)

> using id tag to find and replace innerHTML working
[!Diagram](../assets/2.png)

------------------------------------------------------------
HTML
- use document.getElementById("title")
 output provides <h1 id="title" class="heading">Dom learning JS </h1>

 then we can get other elements using .
 document.getElementById("title").id
 'title'

 document.getElementById("title").getAttribute("class")
 "heading"

similarly we can use set

 document.getElementById("title").setAttribute("class", "test") # this will always override the previous attribute 

![setAttribute](image.png)

![class changes from heading to test](image-1.png)

can also do both

 document.getElementById("title").setAttribute("class", "test , heading")

 ![set both](image-2.png)

some oother changes: 
![alt text](image-3.png)

difference between innerText and textContent 
![alt text](image-4.png)

innerHTML gives all the html if present
![alt text](image-5.png)

document.querySelector("h2") # gives the first query
![alt text](image-6.png)

can also use css selectors like # and , # used for id and . for class
![alt text](image-7.png)

also use input and other css selectors here example
![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)   

![alt text](image-11.png)

When using querySelectorAll we dont get pure array as there is no map option 
example: ![alt text](image-12.png)

example of pure array 
![map available](image-13.png)

node list
![alt text](image-14.png)

even if there is just one element we need to specify it so as to specify
![nodelist](image-15.png)

using forEach properties
![alt text](image-16.png)

in case of htmlCollectiona and node list we need to convert it to array to use looping and stuff as it doesnt provide one 
![alt text](image-17.png)

converted to array from html Collection
![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

changes in js wiki page using querySelectorAll

![alt text](image-22.png)