// CSS, Styling, & Dimensions
// jQuery includes a handy way to get and set CSS properties of elements:

// Getting CSS properties.
$( "h1" ).css( "fontSize" ); // Returns a string such as "19px".
$( "h1" ).css( "font-size" ); // Also works.

// Setting CSS properties.
$( "h1" ).css( "fontSize", "100px" ); // Setting an individual property.
// Setting multiple properties.
$( "h1" ).css({
    fontSize: "100px",
    color: "red"
});


// CSS properties that normally include a hyphen need to be camelCased in JavaScript. For example, the CSS property font-size is expressed as fontSize when used as a property name in JavaScript. However, this does not apply when passing the name of a CSS property to the .css() method as a string – in that case, either the camelCased or hyphenated form will work.

//======================== Using CSS Classes for Styling
// As a getter, the .css() method is valuable. However, it should generally be avoided as a setter in production-ready code, because it's generally best to keep presentational information out of JavaScript code. Instead, write CSS rules for classes that describe the various visual states, and then change the class on the element.

// Working with classes.
var h1 = $( "h1" );
h1.addClass( "big" );
h1.removeClass( "big" );
h1.toggleClass( "big" );
 
if ( h1.hasClass( "big" ) ) {
    ...
}


//======================== Dimensions

// jQuery offers a variety of methods for obtaining and modifying dimension and position information about an element.

// The code below shows a brief overview of the dimensions functionality in jQuery
// Basic dimensions methods.
 
// Sets the width of all <h1> elements.
$( "h1" ).width( "50px" );
 
// Gets the width of the first <h1> element.
$( "h1" ).width();
 
// Sets the height of all <h1> elements.
$( "h1" ).height( "50px" );
 
// Gets the height of the first <h1> element.
$( "h1" ).height();
 
// Returns an object containing position information for
// the first <h1> relative to its "offset (positioned) parent".
$( "h1" ).position();










































































