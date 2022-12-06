<?php

require_once 'Database.php';

class LoginUser
{
    public ?string $user_name = null;
    public ?string $password = null;
    public ?Database $db = null;

    public function __construct(?string $user_name, ?string $password)
    {
        $this->user_name = $user_name;
        $this->password = $password;
        $this->db = new Database();
    }

    public function login(): string
    {
        return $this->db->loginUser($this);
    }
}