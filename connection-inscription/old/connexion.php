<?php
	//session_start();
	//$active = 'connexion';
	//include("db_connect.php");
	include("header.html");
?>

<!--
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
-->


<?php
/*
if (isset($_SESSION['login']))
{
	echo '<script>window.location=index.php</script>';
	// header("Location: index.php");
	// exit();
}
*/
?>

<?php
/*
	if (isset($_GET['error']))
	{
		echo '<p class="error_connect">' . $error_connexion1 . '</p>';
	}
	*/
?>

<?php
// function connexion_facebook()
// {
	// require_once("facebook/facebook.php");

  // $config = array(
      // 'appId' => '1406490472932061',
      // 'secret' => 'dfb0844d5b1619c225212127824e37af',
      // 'fileUpload' => false, // optional
      // 'allowSignedRequest' => false, // optional, but should be set to false for non-canvas apps
  // );

  // $facebook = new Facebook($config);


  // $user_id = $facebook->getUser();
    // if($user_id) {

      // We have a user ID, so probably a logged in user.
      // If not, we'll get an exception, which we handle below.
      // try {

        // $user_profile = $facebook->api('/me','GET');
        // echo "Name: " . $user_profile['name'];

      // } catch(FacebookApiException $e) {
        // If the user is logged out, you can have a 
        // user ID even though the access token is invalid.
        // In this case, we'll get an exception, so we'll
        // just ask the user to login again here.
        // $login_url = $facebook->getLoginUrl(); 
        // echo 'Please <a href="' . $login_url . '">login.</a>';
        // error_log($e->getType());
        // error_log($e->getMessage());
      // }   
    // } else {

      // No user, print a link for the user to login
      // $login_url = $facebook->getLoginUrl();
      // echo '<a href="' . $login_url . '"><div  id="facebook"><img src="Pict/facebook.png">Connexion</div></a>';

    // }
// }
?>



<div class="identifiant">
<form method="post" action="traitement.php">
	<div class="input-group input-group-lg">
		<span class="input-group-addon"></span>
		<input type="text" name="identifiant" class="form-control" placeholder=<?php echo 'Username'; ?> required="required">
	</div>
	<div class="input-group input-group-lg">
		  <span class="input-group-addon"></span>
		  <input type="password" name="password" class="form-control" placeholder=<?php echo 'Password'; ?> required="required">
	</div>
<?php /* connexion_facebook(); */?><!-- Problem -->
	<div>
		<button type="submit" class="btn btn-primary btn-lg bouton-inscription-connexion"><?php echo 'Connexion'; ?></button>
		<a class="btn btn-primary btn-lg bouton-inscription-connexion" role="button" href="inscription.php"><?php echo 'Inscription'; ?></a>
		<a id="forgot_pass" href="forgot_password.php"><?php echo 'Forgot Password ?'; ?></a>
	</div>
</form>
</div>

<?php
 //include("footer.html");
 ?>