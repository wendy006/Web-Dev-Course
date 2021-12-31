Working with Selections
//============== Getters & Setters
// When the method is called with a value as an argument, it's referred to as a setter because it sets (or assigns) that value. When the method is called with no argument, it gets (or reads) the value of the element.

// Setters affect all elements in a selection, whereas getters return the requested value only for the first element in the selection, with the exception of .text(), which retrieves the values of all the elements.

// The .html() method sets all the h1 elements' html to be "hello world":
$( "h1" ).html( "hello world" );

// The .html() method returns the html of the 'first' h1 element:
$( "h1" ).html();
// > "hello world"

// Setters return a jQuery object, allowing you to continue calling jQuery methods on your selection. 

// Getters return whatever they were asked to get, so you can't continue to call jQuery methods on the value returned by the getter
 
// Attempting to call a jQuery method after calling a getter.
// This will NOT work:
$( "h1" ).html().addClass( "test" );//XXXXXXXXXXXXX

//============== Chaining
// If you call a method on a selection and that method returns a jQuery object, you can continue to call jQuery methods on the object without pausing for a semicolon. This practice is referred to as "chaining":

$( "#content" ).find( "h3" ).eq( 2 ).html( "new text for the third h3!" );

// help code readability to break the chain over several lines:
$( "#content" )
    .find( "h3" )
    .eq( 2 )
    .html( "new text for the third h3!" );

// eq() 方法返回带有被选元素的指定索引号的元素。
// 索引号从 0 开头，所以第一个元素的索引号是 0（不是 1）。
$(selector).eq(index)

// html() 方法设置或返回被选元素的内容（innerHTML）。
// 当该方法用于返回内容时，则返回第一个匹配元素的内容。
// 当该方法用于设置内容时，则重写所有匹配元素的内容。
// 提示：如只需设置或返回被选元素的文本内容，请使用 text() 方法。
// 1.返回内容：
$(selector).html()
// 2.设置内容：
$(selector).html(content)
// 3.使用函数设置内容：
$(selector).html(function(index,currentcontent))


// jQuery also provides the .end() method to get back to the original selection should you change the selection in the middle of a chain:
$( "#content" )
    .find( "h3" )
    .eq( 2 )
        .html( "new text for the third h3!" )
        .end() // Restores the selection to all h3s in #content
    .eq( 0 )
        .html( "new text for the first h3!" );







