<?php

require_once 'Database.php';

class Contact
{
    public ?string $name = null;
    public ?string $email = null;
    public ?string $subject = null;
    public ?string $message = null;
    public ?Database $db = null;

    public function __construct(?string $name, ?string $email, ?string $subject, ?string $message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->subject = $subject;
        $this->message = $message;
        $this->db = new Database();
    }


    public function contactWith(): string
    {
        return $this->db->contactWithMe($this);
    }
}