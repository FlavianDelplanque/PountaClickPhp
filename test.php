<?php 
/*$page=file_get_contents('formeBonus.html');
$formeBonus = substr($page,stripos($page,"<body>"),
                    stripos($page,"</body>"));

$pagetest = str_replace("#<script[\s\S]*?>[\s\S]*?<\/script>#","enculer",$page);

setcookie("formeBonus", $page);

$blocnote_riche = preg_replace('#<script[^>]*?>.*?</script>#', '', $page);




$pageFormeBonusI = file_get_contents('formeBonus.html');
$pageFormeBonusM = strtolower($pageFormeBonusI);
$pageFormeBonus = preg_replace('#<script[^>]*?>.*?<\/script>#', '', $pageFormeBonusM);*/




	$pageFormeBonusI = file_get_contents('formeBonus.html');


$pageFormeBonusM = strtolower($pageFormeBonusI);
$pageFormeBonus = preg_replace('#<(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)[^>]*?>.*?<\/(s|S)+(c|C)+(r|R)+(i|I)+(p|P)+(t|T)>#', '', $pageFormeBonusI);
echo $pageFormeBonus;

 ?>


