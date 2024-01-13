<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);

    // Дополнительная обработка данных, например, валидация

    // Отправляем электронное письмо
    $to = "teenitclub@gmail.com"; // Замените на адрес получателя
    $subject = "Повідомлення з сайту від $name";
    $headers = "From: $phone\r\n";
    $headers .= "Content-type: text/html\r\n";

    $mailBody = "<h2>Нове повідомлення</h2>
                  <p><strong>Ім'я:</strong> $name</p>
                  <p><strong>Номер телефону:</strong> $phone</p>
                  <p><strong>Повідомлення з сайту</strong></p>";

    mail($to, $subject, $mailBody, $headers);

    echo json_encode(["success" => true, "message" => "Повідомлення успішно відправлено"]);
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Невірний метод запиту"]);
}
?>