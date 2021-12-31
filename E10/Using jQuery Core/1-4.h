//Chapter 1: using the jQuery Core
// $ vs $()
// h1 is the variable, $("h1") is the jQuery Object
// Most jQuery methods are called on jQuery objects as shown above;
// these methods are said to be part of the $.fn namespace, or the "jQuery prototype,"
// and are best thought of as jQuery object methods.

$("h1").remove();

// A page can 't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.

// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
});
// Experienced developers sometimes use the shorthand $() for $(document).ready().
// If you are writing code that people who aren 't experienced with jQuery may see, it' s best to use the long form.
// Shorthand for $( document ).ready()
$(function() {
    console.log("ready!");
});
// You can also pass a named function to $(document).ready() instead of passing an anonymous function.

// Passing a named function instead of an anonymous function.
function readyFn(jQuery) {
    // Code to run when the document is ready.
}

$(document).ready(readyFn);
// or:
$(window).on("load", readyFn);

// The example below shows $( document ).ready() and $( window ).on( "load" ) in action. The code tries to load a website URL in an <iframe> and checks for both events: 
<
html >
    <
    head >
    <
    script src = "https://code.jquery.com/jquery-1.9.1.min.js" > < /script> <
script >
    $(document).ready(function() {
        console.log("document loaded");
    });

$(window).on("load", function() {
    console.log("window loaded");
}); <
/script> < /
head > <
    body >
    <
    iframe src = "https://www.google.com" > < /iframe> < /
body > <
    /html>


//3.Avoiding Conflicts with Other Libraries
// one caveat: by default, jQuery uses $ as a shortcut for jQuery. Thus, if you are using another JavaScript library that uses the $ variable, you can run into conflicts with jQuery. In order to avoid these conflicts, you need to put jQuery in no-conflict mode immediately after it is loaded onto the page and before you attempt to use jQuery in your page.

// When you put jQuery into no-conflict mode, you have the option of assigning a new variable name to replace the $ alias.

<!-- Putting jQuery into no-conflict mode. -->
<
script src = "prototype.js" > < /script> <
script src = "jquery.js" > < /script> <
script >

    var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional.

$j(document).ready(function() {
    $j("div").hide();
});

// The $ variable now has the prototype meaning, which is a shortcut for
// document.getElementById(). mainDiv below is a DOM element, not a jQuery object.
window.onload = function() {
    var mainDiv = $("main");
}

<
/script>

// Attributes
// An element's attributes can contain useful information for your application, so it's important to be able to get and set them.

// The .attr() method
// The .attr() method acts as both a getter and a setter. As a setter, .attr() can accept either a key and a value, or an object containing one or more key/value pairs.

// .attr() as a setter:

$("a").attr("href", "allMyHrefsAreTheSameNow.html");

$("a").attr({
    title: "all titles are the same too!",
    href: "somethingNew.html"
});

// .attr() as a getter:

$("a").attr("href"); // Returns the href for the first a elem












