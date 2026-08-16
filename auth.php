<?php

session_start();

if (
    !isset($_SESSION['hbd_logged_in']) ||
    $_SESSION['hbd_logged_in'] !== true
) {
    header('Location: login.php');
    exit;
}