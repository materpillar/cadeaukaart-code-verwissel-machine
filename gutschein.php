<?php

$user = "test";

if(isset($_POST["submit"])) {
    if($_POST["gutscheincode"] == $user) {
        echo "Login successful";
    } else {
        echo "Incorrect Login";
    }
}

?>