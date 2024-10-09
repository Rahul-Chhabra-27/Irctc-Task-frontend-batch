## Types and Typeof Operator
```
JavaScript has typed values, not typed variables. The following built-in types are available:

        string

        number

        boolean

        null and undefined

        object

        symbol (new to ES6)

JavaScript provides a typeof operator that can examine a value and tell you what type it is:

var a;
typeof a;               // "undefined"

a = "hello world";
typeof a;               // "string"

a = 42;
typeof a;               // "number"

a = true;
typeof a;               // "boolean"

a = null;
typeof a;               // "object"--weird, bug

a = undefined;
typeof a;               // "undefined"

a = { b: "c" };
typeof a;  
```


"This is a long-standing bug in JS, but one that is likely never going to be fixed. Too much code on the Web relies on the bug, and thus fixing it would cause a lot more bugs!"
                    
Tweet By javascript team developer
## OBJECTS
```
    var obj = {
    a: "hello world",
    b: 42,
    c: true
};

obj.a;     
obj.b;     
obj.c;     

obj["a"];   
obj["b"];  
obj["c"]; 
```





This means that only one set of instructions is executed at any single time. It’s not doing multiple things. The best way to check if a language is single-threaded is if it has one call stack. We push and pop functions off the stack one by one. And so Javascript is synchronous — only one thing can happen at a time.

