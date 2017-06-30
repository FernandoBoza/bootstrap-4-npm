'use strict';

/*****************************************
 * Place here your custom javascript code
 **************************************/

// Enable Bootstrap 4 Tooltips
$('[data-toggle="tooltip"]').tooltip()


document.addEventListener('DOMContentLoaded', function(){

    Typed.new("#cmd-1", {
        stringsElement: document.getElementById('typed-strings-1'),
        typeSpeed: 30,
        startDelay: 0,
        // callback: function(){ foo(); },
    });
    
    Typed.new("#cmd-2", {
        stringsElement: document.getElementById('typed-strings-2'),
        typeSpeed: 130,
        startDelay: 2400,
        // callback: function(){ foo(); },
    });
    
    Typed.new("#cmd-3", {
        stringsElement: document.getElementById('typed-strings-3'),
        typeSpeed: 130,
        startDelay: 4500,
        // callback: function(){ foo(); },
    });
    
    Typed.new("#cmd-4", {
        stringsElement: document.getElementById('typed-strings-4'),
        typeSpeed: 130,
        startDelay: 5500,
        // callback: function(){ foo(); },
    });
});


// function foo(){ 
//     $("span#cmd-1").children('span').removeClass("cursor");
// }






















