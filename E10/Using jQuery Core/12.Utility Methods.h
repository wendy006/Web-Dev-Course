// Utility Methods 实用方法

// jQuery offers several utility methods in the $ namespace. These methods are helpful for accomplishing routine programming tasks. For a complete reference on jQuery utility methods, visit the utilities documentation on api.jquery.com.

// Below are examples of a few of the utility methods:

$.trim()

// Removes leading and trailing whitespace:

// Returns "lots of extra whitespace"
$.trim( "    lots of extra whitespace    " );


//================================

$.each()

// Iterates over arrays and objects:
// 遍历数组【提供index 和 value】
$.each([ "foo", "bar", "baz" ], function( idx, val ) {
    console.log( "element " + idx + " is " + val );
});
 
//遍历字典【提供key 和 value】
$.each({ foo: "bar", baz: "bim" }, function( k, v ) {
    console.log( k + " : " + v );
});

// The method .each() can be called on a selection to iterate over the elements contained in the selection. .each(), not $.each(), should be used for iterating over elements in a selection.


//================================
$.inArray()

// Returns a value's index in an array, or -1 if the value is not in the array:
var myArray = [ 1, 2, 3, 5 ];
 
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}


//================================
$.extend()
// Changes the properties of the first object using the properties of subsequent objects:

var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( firstObject, secondObject );
 
console.log( firstObject.foo ); // "baz"
console.log( newObject.foo ); // "baz"

// If you don't want to change any of the objects you pass to $.extend(), pass an empty object as the first argument:
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( {}, firstObject, secondObject );
 
console.log( firstObject.foo ); // "bar"
console.log( newObject.foo ); // "baz"


//================================
$.proxy()
// Returns a function that will always run in the provided scope — that is, sets the meaning of this inside the passed function to the second argument.

var myFunction = function() {
    console.log( this );
};

var myObject = {
    foo: "bar"
};
 
myFunction(); // window
 
//将一个函数赋给另外一个函数。似乎是传入this指针，不清楚。
var myProxyFunction = $.proxy( myFunction, myObject );
 
myProxyFunction(); // myObject


// If you have an object with methods, you can pass the object and the name of a method to return a function that will always run in the scope of the object.
var myObject = {
    myFn: function() {
        console.log( this );
    }
};
 
////这种用法不太清楚具体的意思和用途
$( "#foo" ).click( myObject.myFn ); // HTMLElement #foo
$( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject



//================  Testing Type
// Sometimes the typeof operator can be confusing or inconsistent, so instead of using typeof, jQuery offers utility methods to help determine the type of a value.

// First of all, you have methods to test if a specific value is of a specific type.

$.isArray([]); // true
$.isFunction(function() {}); // true
$.isNumeric(3.14); // true




// Additionally, there is $.type() which checks for the internal class used to create a value. You can see the method as a better alternative for the typeof operator.

$.type( true ); // "boolean"
$.type( 3 ); // "number"
$.type( "test" ); // "string"
$.type( function() {} ); // "function"
 
$.type( new Boolean() ); // "boolean"
$.type( new Number(3) ); // "number"
$.type( new String('test') ); // "string"
$.type( new Function() ); // "function"
 
$.type( [] ); // "array"
$.type( null ); // "null"
$.type( /test/ ); // "regexp"
$.type( new Date() ); // "date"





































































