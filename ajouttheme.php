<?php include "headerfooter/header.php"; ?>




<form enctype="multipart/form-data" action="traitementajouttheme.php" method="post">
      <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
      Transfère le fichier <input type="file" name="monfichier" />
      <input type="submit" />
    </form>

<?php include "headerfooter/footer.php"; ?>