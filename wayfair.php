<?php
$shoes = [   ['id'       => 100,
              'category' => 'high heel',
              'color'    => 'yellow',
              'price'    => 45.35,
              'sizes'    => '5,6,6.5,7,8,9'],

             ['id'       => 101,
              'category' => 'high heel',
              'color'    => 'purple',
              'price'    => 65,
              'sizes'    => '5,5.5,6.5,7,8,9'],

             ['id'       => 102,
              'category' => 'sneaker',
              'color'    => 'blue',
              'price'    => 17],

             ['id'       => 103,
              'category' => 'sneaker',
              'color'    => 'red',
              'price'    => 36.02,
              'sizes'    => '5,6.5,7,8']
         ];

$lines_to_print = get_lines_to_print($shoes);

// Fill this out
//array[0]
var_dump('A yellow high heel in all sizes ' === $lines_to_print[0]);
var_dump('A blue sneaker in sizes ' === $lines_to_print[1]);
var_dump('A red sneaker in sizes 5 - 6.5 - 7 - 8' === $lines_to_print[2]);

/
//echo 'Shoes Under $50:' . PHP_EOL . implode(PHP_EOL, $lines_to_print);
 // iterate through products -sizes
function get_lines_to_print($products) {
  $sizes = [];
  foreach ($products as $product) {
    if (isset($product['sizes'])) {
      $sizes[$product['id']] = preg_split('/,/', $product['sizes']);
    } else {
      $sizes[$product['id']] = [];
    }
  }
 //iterate through producs and price
  /*
  ['id'       => 110,
              'category' => 'sandal',
              'color'    => 'green',
              'price'    => 65.44,
              'sizes'    => '5,6.5,7,8,9,10,11,12,13']
  */
  // mciarletto@wayfair.com

  $lines = [];
  foreach ($products as $product) {
//if price is >=50 block of code will be skipped.
    if ($product['price'] >= 50) {
      continue;
      //Skip

    }

    //if true text specify product + color + category. After iteration
    $text = 'A ' . $product['color'] . ' ' . $product['category'];
    // A green sandal

    $size_array = $sizes[$product['id']];

    if (count($size_array) > 5) {
      $text .= ' in all sizes';
      // A green sandal in all sizes
    } else {
      $text .= ' in sizes ' . implode(' - ', $size_array);  // implode(', ' []) => ''
    }

    $lines[] = $text;
  }
  // ['A green sandal in all sizes']
  return $lines;
}
?>
