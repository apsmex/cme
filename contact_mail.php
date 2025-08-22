<?php
$toEmail = "lmorales@tecreemos.com";
$mailHeaders = "From: " . $_POST["your_name"] . "<". $_POST["your_email"] .">\r\n";
if(mail($toEmail, $_POST["como_te_enteraste"], $_POST["your_phone"], $mailHeaders)) {
echo"<p class='success'>Contact Mail Sent.</p>";
} else {
echo"<p class='Error'>Problem in Sending Mail.</p>";
}
?>