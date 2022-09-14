 
function constructor_array() {
    var computer_parts = new Array("Monitors", "Motherboards", "Chips", "Hard Drives", "DVD-ROMs", "Cases", "Power Supplies")
    document.write("<table class='table_class'>");
    document.write("<tr><td colspan='2'>Array</td></tr>");
    for (var i = 0; i < computer_parts.length; i++) {
        document.write("<tr><td class='td_class' >" + [i] + "</td><td class='td_class'>" + computer_parts[i] + "</td></tr>");
    }
    document.write("</table>");
};
 

constructor_array(); 

function constructor_join() {
    var fruits = ["oranges", "apples", "pears"];
    var fruit_string = fruits.join(",");
    document.write("<p>( JOIN() )The new string is " + fruit_string+"</p>");
};
 
constructor_join();

function constructor_pop() {
    var fruits = ["oranges", "apples", "pears"];
    var fruit_string = fruits.pop();
    document.write("<p>( POP() )You picked my " + fruit_string+"</p>");
};
 
constructor_pop();

function constructor_push() {
    var fruits = ["oranges", "apples"];
    var new_length = fruits.push("pears", "grapes");
    document.write("<p>( PUSH() )The array now has " + new_length + " items and the array contain "+fruits+"</p>");
};

constructor_push();

function constructor_sort() {
    var fruits = ["apples", "pears","pen", "pinneaple"]; 
    fruits.sort();
    document.write("<p>( SORT() )You picked my fruits: '" + fruits+"'</p>");
};

constructor_sort();


function constructor_unshift() {
    var fruits = ["apples", "pears","pen", "pinneaple"];
    var fruits_before = fruits;
    fruits.reverse();
    document.write("<p>( REVERSE() )You picked my fruits: '" + fruits_before+"' and transform in '"+fruits+"'</p>");
};

constructor_unshift();

function constructor_shift() {
    var fruits = ["oranges", "apples", "pears"];
    var picked_fruit = fruits.shift();
    document.write("<p>( SHIFT() )You picked my " + picked_fruit+"</p>");
};

constructor_shift();

function constructor_unshift() {
    var fruits = ["apples", "pears"];
    fruits.unshift("oranges", "grapes");
    document.write("<p>( UNSHIFT() )You picked my fruits: " + fruits+"</p>");
};

constructor_unshift();


