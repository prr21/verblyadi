
<?php
$userName = $_POST['userName'];
$email = $_POST['email'];
$userLevel = $_POST['userLevel'];
$message = $_POST['message'];

$userName = htmlspecialchars($userName);
$email = htmlspecialchars($email);
$userLevel = htmlspecialchars($userLevel);
$message = htmlspecialchars($message);

$userName = urldecode($userName);
$email = urldecode($email);
$userLevel = urldecode($userLevel);
$message = urldecode($message);

$userName = trim($userName);
$email = trim($email);
$userLevel = trim($userLevel);
$message = trim($message);
if (mail("hamer455@yandex.ru", "Заявка с сайта", "ФИО:".$userName." Уровень: ".$userLevel.". О себе: ".$message.". E-mail: ".$email ,"From: Mr.gustav009@gmail.com \r\n")) 
  {     echo "<h1>Можешь закрывать эту хуйню, все збс</h1>"; 
} else { 
    echo "<h1>Ты написал какую-то хуйню, или это я далбаёб, короче твои данные улетели в никуда</h1>";
}?>