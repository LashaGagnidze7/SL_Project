<?php

require_once 'Classes/Contact.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $contact = new Contact($data->name, $data->email, $data->subject, $data->message);
    echo $contact->contactWith();
}