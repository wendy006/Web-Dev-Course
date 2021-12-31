//==========================================
// Selecting Elements
// The most basic concept of jQuery is to "select some elements and do something with them."

// Selecting Elements by ID
$( "#myId" ); // Note IDs must be unique per page.

// Selecting Elements by Class Name
$( ".myClass" );

// Selecting Elements by Attribute
$( "input[name='first_name']" );

// Selecting Elements by Compound CSS Selector
$( "#contents ul.people li" );

// Selecting Elements with a Comma-separated List of Selectors
$( "div.myClass, ul.people" );

// Pseudo-Selectors
$( "a.external:first" );
$( "tr:odd" );
 
// Select all input-like elements in a form (more on this below).
$( "#myForm :input" );
$( "div:visible" );
 
// All except the first three divs.
$( "div:gt(2)" );
 
// All currently animated divs.
$( "div:animated" );

//=================================
//choosing selector
// check if the div contains foo

// 1.Doesn't work!
if ( $( "div.foo" ) ) {
    ...
}

//2. This one works
// Testing whether a selection contains elements.
if ( $( "div.foo" ).length ) {
    ...
}

//Saving Selections
var divs = $( "div" );



//==================
//Refining & Filtering Selections
//Sometimes the selection contains more than what you're after. jQuery offers several methods for refining and filtering selections.
// Refining selections.
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );              // the sixth

//=======================  Selecting Form Elements

//The :checked pseudo-selector works when used with checkboxes, radio buttons and selects.
$( "form :checked" );

// Using the :disabled pseudo-selector targets any <input> elements with the disabled attribute:
// Using the :disabled pseudo-selector targets any <input> elements with the disabled attribute:
$( "form :disabled" );

// Using the :input selector selects all <input>, <textarea>, <select>, and <button> elements:
$( "form :input" );


// Using the :selected pseudo-selector targets any selected items in <option> elements:
// In order to get the best performance using :selected, first select elements with a standard jQuery selector, then use .filter( ":selected" ), or precede the pseudo-selector with a tag name or some other selector.

$( "form :selected" );


// Selecting by type
// jQuery provides pseudo selectors to select form-specific elements according to their type:
:password
:reset
:radio
:text
:submit
:checkbox
:button
:image
:file





