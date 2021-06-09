<?php

header('Access-Control-Allow-Origin: *');

$headers = "From: from@contactplus.kz"; 

 $message = print_r($_POST,true);
 @mail('hello@contactplus.kz', 'Tilda form', $message, $headers);

echo"ok";

?>
