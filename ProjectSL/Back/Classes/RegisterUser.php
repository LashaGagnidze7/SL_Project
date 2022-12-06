<?php

require_once 'Database.php';

class RegisterUser
{
    public ?string $user_name = null;
    public ?string $last_name = null;
    public ?string $email = null;
    public ?string $password = null;
    public ?Database $db = null;

    public function __construct(?string $user_name, ?string $last_name, ?string $email, ?string $password)
    {
        $this->user_name = $user_name;
        $this->last_name = $last_name;
        $this->email = $email;
        $this->password = $password;
        $this->db = new Database();
    }

    public function register(): string
    {
        return $this->db->registerUser($this);
    }
}