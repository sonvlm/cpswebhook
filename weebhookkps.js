<?php

header('Access-Control-Allow-Origin: *');

$headers = "From: tilda@contactplus.kz";​

$message = "";

foreach($_POST as $key => $value) {
  if($key == "one") {
    $message .= "1. Чем вы занимаетесь?"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "two") {
    $message .= "2. В чем ваша задача?"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "three") {
    $message .= "3. Решение задачи"; 
  } else { 
    $message .= $key; 
  }

  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "four") {
    $message .= "4. Ожидания"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 


foreach($_POST as $key => $value) {
  if($key == "five") {
    $message .= "5. Бюджет"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "name") {
    $message .= "имя"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "phone") {
    $message .= "Телефон"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "mail") {
    $message .= "почта"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 

foreach($_POST as $key => $value) {
  if($key == "company") {
    $message .= "компания"; 
  } else { 
    $message .= $key; 
  }
  $message .= ": " . $value . "\n"; 
} 






$message = ​print_r($message, true);

@mail('hello@contactplus.kz', 'Tilda application', $message, $headers);

echo "ok";

?> 