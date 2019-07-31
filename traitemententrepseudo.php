<?php session_start();
include "headerfooter/header.php";
include "headerfooter/footer.php";
$pseudo = htmlspecialchars($_POST['pseudo']);
$_SESSION['pseudo'] = $pseudo;
echo $_SESSION['pseudo'];
header("Location: menujeux.php")
?>