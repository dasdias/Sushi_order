<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// echo "Privet";

$data = [ [
    id => 1,
    countItem => 1,
    image => "philadelphia.jpg",
    price => 300,
    title => "Филадельфия",
    weight => 180,
    quantity => 8
], [
    id => 2,
    countItem => 1,
    image => "california-hit.jpg",
    price => 250,
    title => "Филадельфия хит ролл",
    weight => 205,
    quantity => 6
], [
    id => 3,
    countItem => 1,
    image => "california-tempura.jpg",
    price => 350,
    title => "Калифорния темпура",
    weight => 205,
    quantity => 6
], [
    id => 4,
    countItem => 1,
    image => "zapech-california.jpg",
    price => 400,
    title => "Запеченый ролл «Калифорния»",
    weight => 182,
    quantity => 4
] ];

if($_POST[text] !== '') {
    echo json_encode($data);
}

?>