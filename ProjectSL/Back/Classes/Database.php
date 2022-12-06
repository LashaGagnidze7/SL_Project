<?php

require_once 'RegisterUser.php';
require_once 'LoginUser.php';

class Database
{
    public ?PDO $pdo = null;
    public static ?Database $db = null;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=localhost;port=3306;dbname=servicedb', 'root', '');
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$db = $this;
    }

    public function registerUser(RegisterUser $user): string
    {
        $statement = $this->pdo->prepare('SELECT * FROM users WHERE email = :email');
        $statement->bindValue(':email', $user->email);
        $statement->execute();

        if ($statement->rowCount() === 1) {
            return "User with email $user->email is already registered!";
        } else {
            $statement = $this->pdo->prepare('INSERT INTO users (user_name, last_name, email, password)
            VALUES (:user_name, :last_name, :email, :password)');
            $statement->bindValue(':user_name', $user->user_name);
            $statement->bindValue(':last_name', $user->last_name);
            $statement->bindValue(':email', $user->email);
            $statement->bindValue(':password', $user->password);

            if ($statement->execute()) {
                return 'Successful Register!';
            }
            return 'Something went wrong, try again!';
        }
    }

    public function loginUser(LoginUser $user): string
    {
        $statement = $this->pdo->prepare('SELECT * FROM users WHERE user_name = :user_name');
        $statement->bindValue(':user_name', $user->user_name);
        $statement->execute();
        $result = $statement->fetch(PDO::FETCH_ASSOC);

        if ($statement->rowCount() === 1) {
            if ($result['password'] === $user->password) {
                return 'Successful Log in!';
            } else {
                return 'Password is incorrect!';
            }
        }
        return "User $user->user_name is not registered!";
    }

    public function categories(): array
    {
        $statement = $this->pdo->prepare('SELECT * FROM categories');
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function members(): array
    {
        $statement = $this->pdo->prepare('SELECT * FROM members');
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function contactWithMe($contact): string
    {
        $statement = $this->pdo->prepare('INSERT INTO contact (name, email, subject, message)
            VALUES (:name, :email, :subject, :message)');
        $statement->bindValue(':name', $contact->name);
        $statement->bindValue(':email', $contact->email);
        $statement->bindValue(':subject', $contact->subject);
        $statement->bindValue(':message', $contact->message);

        if ($statement->execute()) {
            return "Sent successfully!";
        }
        return "Something went wrong, try again later!";
    }

    public function contacts(): array
    {
        $statement = $this->pdo->prepare('SELECT * FROM contact');
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}