<?php


require_once 'Classes/Database.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

$db = new Database();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($db->contacts());
}