```
javascript:( function () {
    var new_script = document.createElement("script");
    new_script.src = "http://mydomain.com/myscript.js";
    document.body.appendChild(new_script);
    do_stuff('Hello World!');
} ) ();
```
