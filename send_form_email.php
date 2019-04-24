<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $number = $_POST['number'];
    $from = 'From:Softermia.com';
    $to = 'ventas@softermia.com.mx';
    $subject = 'Nuevo mensaje de softermia.com';
    $human = $_POST['human'];

    $body = "De: $name\n E-Mail: $email\n Numero: $number\n Message: $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
        echo '<div style="text-align:center; padding-top:3em; font-family:Open Sans;">
        <h2>¡Gracias por contactarnos!</h2>
        <p>Muy pronto nos pondremos en contacto contigo</p>
        <a href="index.html" style="    width: 150px;
    height: 44px;
    background: #4FB0E5; display:block;margin:0 auto; margin-top:3em; text-align:center;line-height: 44px;
    text-decoration: none;
    font-family: sans-serif;
    border-radius:3px;
    color: #ffffff;">Regresar</a></div>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
    }
?>
