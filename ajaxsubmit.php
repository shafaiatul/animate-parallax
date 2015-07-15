<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From:" . $email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
$header .= "Mime Version: 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "This message has been sent by " . $name . "\r\n";
$comment .= "Email is: " . $email . "\r\n";
$comment .= "His message is: " . $message . "\r\n";

$for = "shafaiatul@gmail.com";
$subject = "Contact from website";

mail($for, $subject, utf8_encode($comment), $header );

echo json_encode(array(
        'Message' => sprintf("Your Message Has Been Sent %s", $name);
));
