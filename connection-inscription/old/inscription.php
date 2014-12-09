<?php
	session_start();
	$active = 'connexion';
	
	include("db_connect.php");
	include("header.html");
?>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<?php
	if (isset($_GET['error']))
	{
		echo '<p class="error_connect">' . $error_connexion2 . '</p>';
	}
	else if (isset($_GET['error2']))
	{
		echo '<p class="error_connect">' . $error_connexion3 . '</p>';
	}
	else if (isset($_GET['error3']))
	{
		echo '<p class="error_connect">' . $error_connexion4 . '</p>';
	}
?>

<form method="post" action="traitement.php">
	<div class="identifiant">
		<div class="input-group input-group-lg">
		  <span class="input-group-addon"></span>
		  <input type="text" name="user" class="form-control" placeholder=<?php echo $inscription1; ?> required="required">
		</div>
		<div class="input-group input-group-lg">
		  <span class="input-group-addon"></span>
		  <input type="password" name="password" class="form-control" placeholder=<?php echo $inscription2; ?> value="" required="required">
		</div>
		<div class="input-group input-group-lg">
		  <span class="input-group-addon"></span>
		  <input type="password" name="repassword" class="form-control" placeholder=<?php echo $inscription3; ?> value="" required="required">
		</div>
		<div class="input-group input-group-lg">
		  <span class="input-group-addon"></span>
		  <input type="email" name="mail" class="form-control" placeholder=<?php echo $inscription4; ?> required="required">
		</div>
		<div>
		<a href="connexion.php" class="btn btn-primary btn-lg bouton-inscription-connexion" role="button"><img src="Pict/return.ico" style="width:55px;height:20px;"></a>
		<button type="submit" class="btn btn-primary btn-lg bouton-inscription-connexion"><?php echo $inscription5; ?></button>
		</div>
	</div>
</form>



<?php
//include("footer.html");
?>