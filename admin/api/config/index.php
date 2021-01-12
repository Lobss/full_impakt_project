<?php
class Database{
    // Connexion à la base de données
    private $host = "db5001428431.hosting-data.io";
    private $db_name = "dbs1203945";
    private $username = "dbu732488";
    private $password = "s@tXeAQ4Un88v32";
    public $connexion;

    // getter pour la connexion
    public function getConnection(){

        $this->connexion = null;

        try{
            $this->connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->connexion->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Erreur de connexion : " . $exception->getMessage();
        }

        return $this->connexion;
    }   
}