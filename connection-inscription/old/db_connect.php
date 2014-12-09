<?php
     $host = "127.0.0.1";
     $user = "root";
     $bdd = "";
      $passwd = "";                   
      mysql_connect($host, $user,$passwd) or die("erreur de connexion au serveur");
      mysql_select_db($bdd) or die("erreur de connexion a la base de donnees");
?>