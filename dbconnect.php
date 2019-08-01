<?php 
$user = "root";
$pass = "coucou";

try {
    $dbh = new PDO('mysql:host=localhost;dbname=pountaclick', $user, $pass);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
 ?>