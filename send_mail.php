<?php
  $name = $_POST['name'];
  $email = trim($_POST['email']);
  $phone = $_POST['phone'];

  $to = "gorshunov65@inbox.ru"; 
  $from = $email;
  $subject = "Заявка c сайта";

  $msg="
    Имя: $name /n
    Почта: $email /n
    Телефон: $phone /n";
    
  $headers = "From: $from" . "/r/n" .
  "Replay-to: $from" . "/r/n" . 
  "X-Mailer: PHP/" . phpversion();  
  
  if(mail($to, $subject, $msg, $headers)) {
    echo 'Данные отправлены';
  } else {
    echo 'Возникла ошибка';
  }
?>