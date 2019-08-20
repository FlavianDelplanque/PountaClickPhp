<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>PountaClick</title>
	<link rel="stylesheet" type="text/css" href="<?php if (empty($_SESSION['theme'])) { echo "style.css"; } else { echo $_SESSION['theme']."style.css"; } ?>">
	<meta charset="utf-8">
</head>
<body>