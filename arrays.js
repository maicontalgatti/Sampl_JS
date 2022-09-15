
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
    document.write("<p>( JOIN() )The new string is " + fruit_string + "</p>");
};

constructor_join();

function constructor_pop() {
    var fruits = ["oranges", "apples", "pears"];
    var fruit_string = fruits.pop();
    document.write("<p>( POP() )You picked my " + fruit_string + "</p>");
};

constructor_pop();

function constructor_push() {
    var fruits = ["oranges", "apples"];
    var new_length = fruits.push("pears", "grapes");
    document.write("<p>( PUSH() )The array now has " + new_length + " items and the array contain " + fruits + "</p>");
};

constructor_push();

function constructor_sort() {
    var fruits = ["apples", "pears", "pen", "pinneaple"];
    fruits.sort();
    document.write("<p>( SORT() )You picked my fruits: '" + fruits + "'</p>");
};

constructor_sort();


function constructor_unshift() {
    var fruits = ["apples", "pears", "pen", "pinneaple"];
    var fruits_before = fruits;
    fruits.reverse();
    document.write("<p>( REVERSE() )You picked my fruits: '" + fruits_before + "' and transform in '" + fruits + "'</p>");
};

constructor_unshift();

function constructor_shift() {
    var fruits = ["oranges", "apples", "pears"];
    var picked_fruit = fruits.shift();
    document.write("<p>( SHIFT() )You picked my " + picked_fruit + "</p>");
};

constructor_shift();

function constructor_unshift() {
    var fruits = ["apples", "pears"];
    fruits.unshift("oranges", "grapes");
    document.write("<p>( UNSHIFT() )You picked my fruits: " + fruits + "</p>");
};

constructor_unshift();


function constructor_reverse() {

    var fruits = [2, 3, 1, 20];
    function mysort(first_value, second_value) {
        if (first_value > second_value) {
            return 1;
        } else if (first_value < second_value) {
            return -1;
        } else {
            return 0;
        };
    };
    fruits.sort(mysort);
    document.write("<p>( REVERSE() )The array is " + fruits + "</p>")
};

constructor_reverse();

function constructor_concat() {
    var fruits = ["apples", "pears", "pen", "pinneaple"];
    var same_fruits = fruits.concat();
    document.write("<p>( CONCAT() )The array is " + same_fruits + " </p>");
};

constructor_concat();

function constructor_slice() {
    var fruits = ["apples", "pears", "pen", "pinneaple"];
    var same_fruits = fruits.concat();
    document.write("<p>( SLICE() )The array is " + same_fruits + " </p>");
};

constructor_slice();

function constructor_splice() {
    var fruits = ["oranges", "apples", "pears", "grapes"];
    var somefruits = fruits.splice(2, 2);
    document.write("<p>( SPLICE() )Before " + fruits + " - After - " + somefruits + "</p>");
};

constructor_splice();

function IndexOf() {
    var fruits = ["oranges", "apples", "pears", "apples"];
    var found_apples = fruits.indexOf("apples");

    document.write("<p>( INDEXOF() ) Array e '" + fruits + "' ,Apples esta na posicao " + found_apples);


};

IndexOf();

function constructor_every() {

    function pass_grades(item_value, item_index, arr_name) {
        return (item_value >= 70);
    };

    var grades = [94, 65, 71, 84, 99];
    var the_result = grades.every(pass_grades);

    document.write("<p>( EVERY() )"+the_result+"</p>");

};

constructor_every();


//nested arrays
function nested() {

    document.write("<p>  NESTED  </p>");

    var students = [["Thomas", 92, 90], ["Roger", 87, 78], ["Amber", 81, 85], ["Jennifer", 99, 100]];
    var i = 0;
    var j = 0;
    for (i = 0; i < students.length; i++) {
        for (j = 0; j < students[i].length; j++) {
            if (j === 0) {
                document.write(students[i][j] + ": ");
            } else if (j === students[i].length - 1) {
                document.write(students[i][j] + "<br>");
            } else {
                continue;
            }
        }
    }



    var computer_parts = [["Monitors", "LCD Screens", "Vibrant Colors"],["Motherboards", "Fast"],["Chips", "Pentium", "Very Fast"],["Hard Drives", "100-500 GB", "Fast Reading"],["DVD-ROMs", "Burn CDs", "Burn DVDs", "Listen to both!"],["Cases", "All Sizes", "Choice of Colors"],["Power Supplies", "We can get one for any computer!"]];
    var i = 0;
    var j = 0;
    for (i = 0; i < computer_parts.length; i++) {
        for (j = 0; j < computer_parts[i].length; j++) {
            if (j === 0) {
                document.write(computer_parts[i][j] + ": ");
            } else if (j === computer_parts[i].length - 1) {
                document.write(computer_parts[i][j] + "<br>");
            } else {
                document.write(computer_parts[i][j] + ", ");
            }
        }
    }
};

nested();
 


