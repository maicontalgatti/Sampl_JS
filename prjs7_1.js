function line() {
    document.writer("<p>--/-----/-----/-----/-----/-----/-----/--</p>");
};

function constructor_array() {
    var computer_parts = new Array("Monitors", "Motherboards", "Chips", "Hard Drives", "DVD-ROMs", "Cases", "Power Supplies")
    document.write("<table class='table_class'>");
    document.write("<tr><td colspan='2'>Array</td></tr>");
    for (var i = 0; i < computer_parts.length; i++) {
        document.write("<tr><td class='td_class' >" + [i] + "</td><td class='td_class'>" + computer_parts[i] + "</td></tr>");
    }
    document.write("</table>");
};

function constructor_join() {
    var fruits = ["oranges", "apples", "pears"];
    var fruit_string = fruits.join(",");
    document.write("<p>The new string is " + fruit_string+"</p>");
};


constructor_array();
line();
constructor_join();

