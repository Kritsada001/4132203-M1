<?php

echo "Hello World";
$name = "John Doe";
$age = 25;

$array = array(1,2,3,"Frank",5);
$assoc_arr = ["name" => "John Doe", "age" => 25];

echo $arr;
echo "<br>";
var_dump($arr);
echo "<br>";
echo "Hello $name";
echo 'Hello $name';

$object = (object)$assoc_arr;
echo $object->name;
echo $assoc_arr["name"];

echo json_encode($object);
function sayHello($name) {
    echo "Hello $name";
}

$plus_fn = function ($a,$b) {
    return $a + $b;
}

// $car = [
//     "brand" => "Toyota",
//     "model" => "Corolla",
//     "year" => $plus_fn
// ];

// echo $car["year"](2020, 5);
// function sayHello($name) {
//     echo "Hello $name";
// }

// $plus_fn = function ($a, $b) {

// } -->



?>


<?php
//database
phpinfo()





?>
