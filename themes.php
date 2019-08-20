<?php include "headerfooter/header.php"; ?>

<form action="traitementtheme.php" method="POST">
<?php 
foreach (glob("theme/*/") as $filename) {
	$filename = preg_replace('#theme/#', '', $filename);
	$filename = preg_replace('#/#', '', $filename);
	echo "<input type='text' name='theme' value='$filename' class='inputbutton'>";
}
 ?>
<input type="submit" value="appliquer changement" class="inputsubmit">
</form>

<?php include "headerfooter/footer.php"; ?>