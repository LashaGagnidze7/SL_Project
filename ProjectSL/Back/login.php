<?php

require_once 'Classes/LoginUser.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $user = new LoginUser($data->user_name, $data->password);
    echo $user->login();
}