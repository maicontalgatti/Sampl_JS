
function constructor_unshift() {
    var fruits = ["apples", "pears","pen", "pinneaple"];
    var fruits_before = fruits;
    fruits.reverse();
    document.write("<p>( REVERSE() )You picked my fruits: '" + fruits_before+"' and transform in '"+fruits+"'</p>");
};

constructor_unshift();

