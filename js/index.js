'use strict';

/*****************************************
 * Place here your custom javascript code
 **************************************/

// Enable Bootstrap 4 Tooltips
$('[data-toggle="tooltip"]').tooltip()


document.addEventListener('DOMContentLoaded', function(){

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 130,
        backDelay: 0,
        startDelay: 0,
        loop: false,
        contentType: 'html', 
        loopCount: null,
        callback: function(){ foo(); },
    });
});


function foo(){ 
    $("span.typed-cursor").removeClass("typed-cursor");
}






















