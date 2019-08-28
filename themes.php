<?php include "headerfooter/header.php"; ?>

<form action="traitementtheme.php" method="POST">
	<select name='theme'>
	<?php 
	foreach (glob("theme/*/") as $filename) {
		$filename = preg_replace('#theme/#', '', $filename);
		$filename = preg_replace('#/#', '', $filename);
		echo "<option value='$filename'>$filename</option>";
	}
	 ?>
	</select>
<input type="submit" value="appliquer changement" class="inputsubmit">
</form>

<?php include "headerfooter/footer.php"; ?>