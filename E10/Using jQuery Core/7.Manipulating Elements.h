//Manipulating Elements

//==========Getting and Setting Information About Elements

// There are many ways to change an existing element. Among the most common tasks is changing the inner HTML or attribute of an element.

// For more information on getters and setters, see the Working with Selections section.

// Here are a few methods you can use to get and set information about elements:

.html() – Get or set the HTML contents.
.text() – Get or set the text contents; HTML will be stripped. HTML 将被剥离。
.attr() – Get or set the value of the provided attribute.
.width() – Get or set the width in pixels of the first element in the selection as an integer.
.height() – Get or set the height in pixels of the first element in the selection as an integer.
.position() – Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only.
.val() – Get or set the value of form elements.

// remember that the change will affect all elements in the selection. If you just want to change one element, be sure to specify that in the selection before calling a setter method.

// Changing the HTML of an element.
$( "#myDiv p:first" ).html( "New <strong>first</strong> paragraph!" );


//========== Moving, Copying, and Removing Elements
// While there are a variety of ways to move elements around the DOM, there are generally two approaches:

1.Place the selected element(s) relative to another element.
2.Place an element relative to the selected element(s).

// For example, jQuery provides .insertAfter() and .after(). The .insertAfter() method places the selected element(s) after the element provided as an argument. The .after() method places the element provided as an argument after the selected element. Several other methods follow this pattern: .insertBefore() and .before(), .appendTo() and .append(), and .prependTo() and .prepend()

// Moving elements using different approaches.
// Make the first list item the last list item:
var li = $( "#myList li:first" ).appendTo( "#myList" );
 
// Another approach to the same problem:
$( "#myList" ).append( $( "#myList li:first" ) );
// Note that there's no way to access the list item
// that we moved, as this returns the list itself.

//========== Cloning Elements
// Methods such as .appendTo() move the element, but sometimes a copy of the element is needed instead. In this case, use .clone() first:

// Making a copy of an element.
// Copy the first list item to the end of the list:
$( "#myList li:first" ).clone().appendTo( "#myList" );
// If you need to copy related data and events, be sure to pass true as an argument to .clone().

 

//========== Removing Elements
// There are two ways to remove elements from the page: .remove() and .detach(). 
1.Use .remove() when you want to permanently remove the selection from the page. While .remove() does return the removed element(s), those elements will not have their associated data and events
2.Use .detach() if you need the data and events to persist. Like .remove(), it returns the selection, but it also maintains the data and events associated with the selection, so you can restore the selection to the page at a later time.

The .detach() method is extremely valuable if you are doing heavy manipulation on an element. In that case, it's beneficial to .detach() the element from the page, work on it in your code, then restore it to the page when you're done.


//========== Creating New Elements
// jQuery offers a trivial and elegant way to create new elements using the same $() method used to make selections:

// Creating new elements from an HTML string.
$( "<p>This is a new paragraph</p>" );
$( "<li class=\"new\">new list item</li>" );

// Creating a new element with an attribute object.
$( "<a/>", {
    html: "This is a <strong>new</strong> link",
    "class": "new",  //Property names generally do not need to be quoted unless they are reserved words (as class is in this case).
    href: "foo.html"
});


//When you create a new element, it is not immediately added to the page. There are several ways to add an element to the page once it's been created.

// Getting a new element on to the page. 
var myNewElement = $( "<p>New element</p>" );
myNewElement.appendTo( "#content" );
myNewElement.insertAfter( "ul:last" ); // This will remove the p from #content!
$( "ul" ).last().after( myNewElement.clone() ); // Clone the p so now we have two



//In the following case, the drawback is : you can not get the reference of this inserted item
// Creating and adding an element to the page at the same time.
$( "ul" ).append( "<li>list item</li>" );


// there's a huge performance cost for adding to the DOM repeatedly. If you're adding many elements to the same container, you'll want to concatenate all the HTML into a single string, and then append that string to the container instead of appending the elements one at a time.

var myItems = [];
var myList = $( "#myList" );
 
for ( var i = 0; i < 100; i++ ) {
    myItems.push( "<li>item " + i + "</li>" );
}
 
myList.append( myItems.join( "" ) );

//========== Manipulating Attributes

// .attr() method can either set an explicit value, or set a value using the return value of a function. 
// When the function syntax is used, the function receives two arguments: 
// 1.the zero-based index of the element whose attribute is being changed, and 
// 2.the current value of the attribute being changed.

// Manipulating a single attribute.
$( "#myDiv a:first" ).attr( "href", "newDestination.html" );


// Manipulating multiple attributes.
$( "#myDiv a:first" ).attr({
    href: "newDestination.html",
    rel: "nofollow"
});


// Using a function to determine an attribute's new value.
$( "#myDiv a:first" ).attr({
    rel: "nofollow",
    href: function( idx, href ) {
        return "/new/" + href;
    }
});
 
$( "#myDiv a:first" ).attr( "href", function( idx, href ) {
    return "/new/" + href;
});












































