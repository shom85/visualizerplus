
<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)||empty($message)) 
{
  echo "Name, email and message are mandatory!";
  exit;
}

if(IsInjected($visitor_email))
{
  echo "Bad email value!";
  exit;
}



$to = "shomit@marble.com";
$subject = "Visualizer Plus - Contact information submission";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n" . "\r\n";
// More headers
$headers .= 'Contact information sent from www.visualizerplus.com' . "\r\n" . "\r\n";
$headers .= 'From: ' . "$name" . "\r\n";
$headers .= 'Email: ' . "$visitor_email" . "\r\n";
$headers .= 'Company: ' . "$company" . "\r\n";
$headers .= 'Message: ' . "$message" . "\r\n";

//Send the email!
$mail=mail($to,$subject,$headers);



//Send copy to customer
$subject_visitor .= "Thank you for contacting Visualizer Plus." . "\r\n";
$headers_copy .= "Thank you for contacting us. For your records here is a copy of the message below." . "\r\n" . "\r\n"
                  . "From: " . "$name" . "\r\n"
                  . "Email: " . "$visitor_email" . "\r\n"
                  . "Company: " . "$company" . "\r\n"
                  . "Message: " . "$message" . "\r\n";

$mail=mail($visitor_email, $subject_visitor, $headers_copy);


if($mail)
{
  header('Location: thank-you.html');

} 
else 
{
  echo "false";
}


function IsInjected($str)
{
  $injections = array('(\n+)',
    '(\r+)',
    '(\t+)',
    '(%0A+)',
    '(%0D+)',
    '(%08+)',
    '(%09+)'
    );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
  {
    return true;
  }
  else
  {
    return false;
  }
}

?> 
