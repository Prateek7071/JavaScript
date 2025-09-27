For Call.js(/10_classes_and_oop/Call.js):

Example we have;
```
function(){
    callme();
}
```
for function call the execution context is created and pushed to the call stack.
![EC for function, call stack](image.png)

When callme() is called another execution context is created and pushed to the call stack.
![Execution context for callme](image-1.png)

Here callme() needs the context for this function, so it looks for it in the call stack.

so this point to the window object when in browser.
and nodejs it points to an empty object.