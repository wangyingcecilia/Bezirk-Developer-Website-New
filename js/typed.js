/**
 * Created by yingwangbosch on 10/24/16.
 */

$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 25,
        backDelay: 9500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }

