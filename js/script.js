$( "document" ).ready(function() {
$("#button").click(function(){
        //Step One: select the user input so that in can be used in...
        var userInput=$(".input").val();
        //...Step Two: the userInput is the parameter (input) for our pigLatinizer function!
        var pigLatinWord=pigLatinizer(userInput);
        //Step Three: display the output of our pigLatinizer function!
        $(".output").text(pigLatinWord);
});

//We need to define the pigLatinizer function and write the code to make it work!
function pigLatinizer (userInput) {
    //Think about: if "banana" goes in, what comes out?
    //Think about: if "elephant" goes in, what comes out?
    };




