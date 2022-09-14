
function constructor_push() {
    var fruits = ["oranges", "apples"];
    var new_length = fruits.push("pears", "grapes");
    document.write("<p>( PUSH() )The array now has " + new_length + " items and the array contain "+fruits+"</p>");
};

constructor_push();

