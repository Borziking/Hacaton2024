<?php
$user_id = $_GET['user_id'];
echo $user_id;

define('HOST', 'localhost');
define('USER', 'root');
define('PASSWORD', '');
define('NAME', '_value_');

$mysql = new $mysqli(HOST, USER, PASSWORD, NAME);
if ($mysql->connect_errno) exit('errmac');
$mysql->set_charset('utf8');
$mysql->close();
?>