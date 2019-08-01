<?php include "headerfooter/header.php"; 
require 'dbconnect.php';
$scriptjs = "recuppointbd()";
?>
<form action="changerformes.php" method="POST">
	<input type="text" name="point" id="point" value="<?php $reponse = $dbh->query('SELECT * FROM users Flavian'); $donnees = $reponse->fetch(); echo $donnees['point']?>">
</form>
<?php include "headerfooter/footer.php"; ?>