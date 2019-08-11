<?php include "headerfooter/header.php";
require 'dbconnect.php';
$score = $_COOKIE['score'];
$point = $_COOKIE['point'];
$partiejouer = 1;
$reponse = $dbh->query('SELECT * FROM users WHERE login="'.$_SESSION['pseudo'].'"'); $donnees = $reponse->fetch();
$ancienScore = $donnees['score'];
$nouveauScore = $score + $ancienScore;
$ancienPoint = $donnees['point'];
$nouveauPoint = $point + $ancienPoint;
$ancienPartieJouer = $donnees['partiejouer'];
$nouveauPartieJouer = $partiejouer + $ancienPartieJouer;
try {
		$data = null;
		$sql = 'UPDATE users SET score="'.$nouveauScore.'",point="'.$nouveauPoint.'",partiejouer="'.$nouveauPartieJouer.'" WHERE login="'.$_SESSION['pseudo'].'"';
		$stmt = $dbh->prepare($sql);
		$stmt-> execute($data);
		if ($_COOKIE['numeroniveaux']==1||$_COOKIE['numeroniveaux']==2) {
			header("Location: niveaux.php");
		} 
		else {
			header("Location: winloose.php");
		}
} catch (PODExecption $e) {
		print "Error!: ". $e->getMessage() . ">br/>";
		die();
	} 
include "headerfooter/footer.php"; ?>


<!-- header('location : winloose.php') -->