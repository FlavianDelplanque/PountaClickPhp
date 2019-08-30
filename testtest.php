<form action="traitementajoutforme.php" method="POST">
	<textarea id="html" name="html"></textarea>
	<textarea id="css" name="css"></textarea>
	<input type="submit" value="submit">
</form>

<div id="renduhtml"></div>

<style type="text/css">
	


</style>

<script type="text/javascript">
	var html = document.querySelector("#html");
	var css = document.querySelector("#css");
	var renduhtml = document.querySelector("#renduhtml");
	var style = document.querySelector("style");
	html.addEventListener("keyup", rendu);
	css.addEventListener("keyup", rendu);

function rendu() {
	var valuecss = css.value;
	var valuehtml = html.value;
	renduhtml.innerHTML = valuehtml;
	style.innerHTML = valuecss;
}

</script>