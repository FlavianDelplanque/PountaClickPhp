<?php include "headerfooter/header.php";
require 'dbconnect.php';
echo $_POST['score'];
echo $_POST['point'];
$score = $_POST['score'];
$point = $_POST['point'];

try {
		$data = null;
		$sql = 'UPDATE users SET score="'.$score.'",point="'.$point.'" WHERE login="Flavian"';
		$stmt = $dbh->prepare($sql);
		$stmt-> execute($data);
		header("Location: winloose.php");
} catch (PODExecption $e) {
		print "Error!: ". $e->getMessage() . ">br/>";
		die();
	} 
include "headerfooter/footer.php"; ?>


<!-- header('location : winloose.php') -->