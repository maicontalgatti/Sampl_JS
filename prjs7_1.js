 

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