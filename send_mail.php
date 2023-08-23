<?php
// Получение данных из POST-запроса
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Формирование письма
$to = 'gorshunov65@inbox.ru';
$subject = 'Новый заказ с сайта';
$body = "Имя: $name\nEmail: $email\nТелефон: $phone";

// Отправка письма функцией mail
if (mail($to, $subject, $body)) {
  $response = array('success' => true);
} else {
  $response = array('success' => false);
}

// Возвращаем результат обратно в JavaScript-ко
$message = 'Спасибо за заказ, я Вам перезвоню';
echo '<h1>' . $message . '</h1>';
?>
