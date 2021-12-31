

// Event setup using a convenience method
// It is important to note that .on() can only create event listeners on elements that exist at the time you set up the listeners. Similar elements created after the event listeners are established will not automatically pick up event behaviors you've set up previously. For example:
 

//$( document ).ready(function(){} --> has  deprecated!
$(function(){

    $( "p.p_click_info" ).on( "click", function() {
        console.log( "You clicked a paragraph!"  );
    });



    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $( "button.alert" ).on( "click", function() {
        console.log( "see console msg: A button with the alert class was clicked!" );
    });
 



    // Now create a new button element with the alert class. This button
    // was created after the click listeners were applied above, so it
    // will not have the same click behavior as its peers
    // $( "<button class='alert'>no info in console</button>" ).appendTo( document.body );


//---------------

 // Event setup using the `.on()` method with data --2
 $( "input.on_change" ).on(
    "change",
    { foo: "bar" }, // Associate data with event binding
    function( eventObject ) {
        console.log("An input value has changed! ", eventObject.data.foo);
    }
    );

//---------------

// Preventing a link from being followed ----3
$( "a" ).click(function( eventObject ) {
    var elem = $( this );
    if ( elem.attr( "href" ).match( /google/ ) ) {
        eventObject.preventDefault();
        elem.addClass( "google" );
    }
});

//Setting Up Multiple Event Responses

// Multiple events, same handler ---4
$( "button.single_events" ).on(
    "click change", // Bind handlers for multiple events
    function() {
        console.log( "A button was clicked !" );
    }
);


// Binding multiple events with different handlers --- 5
$( "button.multi_events" ).on({
    "click": function() { console.log( "clicked!" ); },
    "mouseover": function() { console.log( "hovered!" ); }
});

//Tearing Down Event Listeners ---6
// Tearing down a particular click handler, using a reference to the function
var foo6 = function() { console.log( "foo" ); };
var bar6 = function() { console.log( "bar" ); };
 
$( "button.b6" ).on( "click", foo6 ).on( "click", bar6 );
$( "button.b6" ).off( "click", bar6 ); // foo is still bound to the click event

//Setting Up Events to Run Only Once --7

// Switching handlers using the `.one()` method
$( "button.button_once" ).one( "click", firstClick );
 
function firstClick() {
    console.log( "You just clicked this for the first time!" );
 
    // Now set up the new handler for subsequent clicks;
    // omit this step if no further click responses are needed
    $( this ).click( function() { console.log( "You have clicked this before!" ); } );
}

//----------------3.2 Event Helpers
// The hover helper function
// #是jquery选择器的一种形式，匹配任意html中id的对象。 $("#idvalue")：这个代码选中html文档中，即<任意id="idvalue"></任意>；
$( "#event_helper" ).hover(function() {
    console.log( "hover!" );
    // toggleClass() 函数用于切换当前jQuery对象所匹配的每一个元素上指定的css类名。 所谓"切换"，就是如果该元素上已存在指定的类名，则移除掉；如果不存在，则添加该类名。 该函数属于 jQuery 对象(实例)。 参数 switch 用于指定是只添加还是只移除指定的css类名
    $( this ).toggleClass( "hover" );
});


//----------- 3.3
// Event binding using addEventListener  -- b
var helloBtn = document.getElementById( "helloBtn" );
 
helloBtn.addEventListener( "click", function( event ) {
    alert( "Hello." );
}, false );

// Event binding using a convenience method
// $( "#helloBtn" ).click(function( event ) {
//     alert( "Hello." );
// });


// Binding a named function
// function sayHello( event ) {
//     alert( "Hello." );
// }
// $( "#helloBtn" ).on( "click", sayHello );



// Preventing a default action from occurring and stopping the event bubbling --3.3.2
$( "form.prevent_submit_default" ).on( "submit", function( event ) {
    //console.log( "hover!" );
    // Prevent the form's default submission.
    event.preventDefault();
 
    // Prevent event from bubbling up DOM tree, prohibiting delegation
    event.stopPropagation();
 
    // Make an AJAX request to submit the form data
});


//------------------- 3.4
//3.4.1
$( "button.btn_341" ).on( "click", function( event ) {
    console.log( "event object:" );
    console.dir( event );
});

//3.4.2
$( "button.btn_342" ).on( "click", {
    foo: "bar"
}, function( event ) {
    console.log( "event data: " + event.data.foo + " (should be 'bar')" );
});


//3.6.1
// When an anchor in our #list group is clicked, we want to log its text to the console. Normally we could directly bind to the click event of each anchor using the .on() method:

// While this works perfectly fine, there are drawbacks. Consider what happens when we add a new anchor after having already bound the above listener:

// Since we know how events bubble, we can create a delegated event:

// Attach a delegated event handler
$( "#list_361" ).on( "click", "a", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});

//3.6.2
// Attach a delegated event handler with a more refined selector
$( "#list_362" ).on( "click", "a[href^='http']", function( event ) {
    $( this ).attr( "target", "_blank" );
});


//3.7.1

// This will not change the current page
$( "a.a_event_handler" ).trigger( "click" );

//3.7.2
// Triggering a native browser event using the simulate plugin
// $( "a.a_mimic" ).simulate( "click" );

//3.7.2
// Triggering an event handler the right way
var foo372 = function( event ) {
    if ( event ) {
        console.log( event );
    } else {
        console.log( "(from test3.7.2)this didn't come from an event!" );
    }
};
$( "button.btn372" ).on( "click", foo372 );
foo372(); // instead of $( "p" ).trigger( "click" )

//3.8
$( ".lightbulb" ).on( "light:toggle", function( event ) {
    var light = $( this );
    if ( light.is( ".on" ) ) {
        light.trigger( "light:off" );
    } else {
        light.trigger( "light:on" );
    }
}).on( "light:on", function( event ) {
    $( this ).removeClass( "off" ).addClass( "on" );
}).on( "light:off", function( event ) {
    $( this ).removeClass( "on" ).addClass( "off" );
});
 
$( ".switch, .clapper" ).click(function() {
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle" );
});
 
$( "#master_switch" ).click(function() {
    var lightbulbs = $( ".lightbulb" );
 
    // Check if any lightbulbs are on
    if ( lightbulbs.is( ".on" ) ) {
        lightbulbs.trigger( "light:off" );
    } else {
        lightbulbs.trigger( "light:on" );
    }
});

//3.9.1
jQuery.event.special.multiclick = {
    delegateType: "click",
    bindType: "click",
    handle: function( event ) {
        var handleObj = event.handleObj;
        var targetData = jQuery.data( event.target );
        var ret = null;
 
        // If a multiple of the click count, run the handler
        targetData.clicks = ( targetData.clicks || 0 ) + 1;
 
        if ( targetData.clicks % event.data.clicks === 0 ) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply( this, arguments );
            event.type = handleObj.type;
            return ret;
        }
    }
};
 
// Sample usage
$( "button.btn39" ).on( "multiclick", {
    clicks: 3
}, function( event ) {
    alert( "clicked 3 times" );
});



//4.1
// Hide all paragraphs using a fade out animation over 1.5 seconds
$( "p.p_fadeout" ).fadeOut( 300 );
 
// Show all hidden divs using a fade in animation over 0.75 seconds
// $( "p.hidden" ).fadeIn( 3000 );

//4.2
// Custom effects with .animate()
$( "div.funtimes" ).animate(
    {
        left: "+=50",
        opacity: 0.25
    },
    // Duration
    300,
    // Callback to invoke when the animation is finished
    function() {
        console.log( "(from test 4.2)animation done!" );
    }
);

// // Per-property easing
// $( "div.funtimes" ).animate({
//     right: [ "+=50", "swing" ],
//     opacity: [ 0.25, "linear" ]
// }, 300 );

//4.3.1
$( "div.box431" )
    .animate( {
        height: 30
    }, "slow")
    .queue( function() {
        $( "#p431_title" ).html( "We're in the animation!" );
 
        // This tells jQuery to continue to the next item in the queue
        $( this ).dequeue();
    } );

//4.3.2
$( "div.box432" )
    .animate( {
        height: 30
    }, "slow")
    .queue( "steps", function( next ) { 
        console.log( "(from test 4.3.2)We're in step 1!" );
        
        $( "#p432_title" ).html( "We're in step 1!" )
        next();
    } )
    .queue( "steps", function( next ) { 
        console.log( "(from test 4.3.2)We're in step 2!" );
        $( "#p432_title" ).html( "We're in step 2!" );
        next();
    } )
    .dequeue( "steps" );


//5.1

//this will not work
// var response;
// $.get( "https://www.sfu.ca", function( r ) {
//     response = r;
// });
// console.log( response ); // undefined


//this will work
$.get( "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0", function( response ) {
    // $("div.div_51").html(response.data);
    var data = JSON.parse(response);
    // console.log( data.dataseries[0]); // server response data item 0
    var firstItem = data.dataseries[0].cloudcover;
    $("div.div_51").html("<p> --- first item from <b>response data</b> -- > cloudcover: |||  " + firstItem + "  ||| </p>");
});


//5.2
// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    // url: "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0",
    url:"https://dog.ceo/api/breeds/image/random",
 
    // The data to send (will be converted to a query string)
    data: {
        //id: 123
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
    //  $( "<h1>" ).text( json.title ).appendTo( "div.div_52" );
    //  $( "<div class=\"content\">").html( json.html ).appendTo( "div.div_52" );
    // var data = JSON.parse(json);
    //console.log(  json.message); // server response data item 0
    var firstItem = json.message;
    // firstItem = "https://images.dog.ceo/breeds/stbernard/n02109525_7982.jpg";
    var html = "<img src="  + firstItem + ">";
    //console.log( html);
     $("div.div_52").html(html);

  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    console.log( "(from test 5.2)The request is complete!" );
  });



  //5.3
  // Validate a phone number field
$( "form.form53" ).submit(function( event ) {
    var inputtedFirstName = $( "#first_name53" ).val();
 
    // Match only numbers
    // var phoneNumberRegex = /^\d*$/;
 
    // If the phone number doesn't match the regex
    if ( inputtedFirstName.length < 4 ) {
 
        // Usually show some kind of error message here
 
        // Prevent the form from submitting
        alert('the first name length should be more than 3')
        event.preventDefault();
    } else {
        event.preventDefault(); // avoid to execute the actual submit of the form. --> this is a must, otherwise, the ajax will not run

        // var form = $(this);
        var first_name = $( "#first_name53" ).val();
 
        // Run $.ajax() here
        $.ajax({
            
 
            // The URL for the request
            // url: "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0",
            url:"https://api.agify.io",
         
            // The data to send (will be converted to a query string)
            data: {
                name:first_name
            },
         
            // Whether this is a POST or GET request
            type: "GET",
         
            // The type of data we expect back
            dataType : "json",
            // dataType : "jsonp",

            // success:function() {
            //     console.log(  "json");  
            // },

            // error:function() {
            //     console.log(  "json");  
            // }

        }) 
          // Code to run if the request succeeds (is done);
          // The response is passed to the function
          .done(function( json ) { 
            //  $( "<h1>" ).text( json.title ).appendTo( "div.div_52" );
            //  $( "<div class=\"content\">").html( json.html ).appendTo( "div.div_52" );
            // var data = JSON.parse(json);
            console.log(  json); // server response data item 0
            // var firstItem = json.message;
            // firstItem = "https://images.dog.ceo/breeds/stbernard/n02109525_7982.jpg";

            var html = "<span></span> "
            if(json.age != null){
                 html = "<span> for "+json.name +" is: "  + json.age + "</span>";
            }else{
                 html = "<span> for "+json.name +" is: "  + json.age + ", because our database has no information for this person! </span>";

            }
            //console.log( html);
             $("span.span53").html(html);
        
          })
          // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        .fail(function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        })
        // Code to run regardless of success or failure;
        .always(function( xhr, status ) {
            console.log( "(from test 5.3)The request is complete!" );
        });


    }
});


//5.4
// Using YQL and JSONP
// $.ajax({
//     url: "http://query.yahooapis.com/v1/public/yql",
 
//     // The name of the callback parameter, as specified by the YQL service
//     jsonp: "callback",
 
//     // Tell jQuery we're expecting JSONP
//     dataType: "jsonp",
 
//     // Tell YQL what we want and that we want JSON
//     data: {
//         q: "select title,abstract,url from search.news where query=\"cat\"",
//         format: "json"
//     },
 
//     // Work with the response
//     success: function( response ) {
//         console.log( response ); // server response
//     }
// });





//5.5
// Setting up a loading indicator using Ajax Events
// $(document ) 
//     .ajaxStop(function() {
//         alert( "Ajax Stop "); 
//     }); 

})