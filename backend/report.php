<?php 

/*
$to - адрес получателя письма
$email - адрес отправителя письма
$name - имя отправителя письма
$subject - тема письма
$message - само сообщение в HTML-формате
$image - путь к файлу, который надо прикрепить к письму
(это может быть имя файла, выбранного в поле <input type="file" name="image">)
*/

// Открываем файл для чтения в бинарном формате
$image=fopen("image.zip", "rb");
// Считываем его в строку $str_image
$str_image=fread($image,imagesize("image.zip"));
// Преобразуем эту строку в base64-формат
$str_image=base64_encode($str_image);

function sendMail($to,$email,$name,$subject,$message,$image) {
  $bound="spravkaweb-1234";
  $header="From: '$name' <$email>n";
  $header.="To: $ton";
  $header.="Subject: $subjectn";
  $header.="Mime-Version: 1.0n";
  $header.="Content-Type: multipart/mixed; boundary='$bound'";
  $body="nn--$boundn";
  $body.="Content-type: text/html; charset='windows-1251'\n";
  $body.="Content-Transfer-Encoding: quoted-printablenn";
  $body.="$message";
  $file=fopen($image,"rb");
  $body.="nn--$boundn";
  $body.="Content-Type: application/octet-stream;";
  $body.="name=".basename($image)."\n";
  $body.="Content-Transfer-Encoding:base64n";
  $body.="Content-Disposition:attachmentnn";
  $body.=base64_encode(fread($file,filesize($image)))."n";
  $body.="$bound--nn";
  if(mail($to, $subject, $body, $header)) {
    echo "<center>Письмо было успешно отправлено!</center>";
<pre> } else {
</pre>
    echo "<center>Сообщение не отправлено!</center>";
<pre> };
</pre>
};

?>