<?php
session_start();

if (isset($_SESSION['hbd_logged_in']) && $_SESSION['hbd_logged_in'] === true) {
    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === 'panyuu' && $password === '24260103') {
        $_SESSION['hbd_logged_in'] = true;
        header('Location: index.php');
        exit;
    }

    $error = 'Username atau password belum tepat.';
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Her Special Day</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="login-page">

<main class="login-shell">

    <section class="login-card reveal">

        <div class="login-mark">
            <P>Panyu</P><span>.</span>
        </div>

        <p class="eyebrow">
            private access
        </p>

        <h1>
            Her Special<br>
            <em>Day.</em>
        </h1>

        <p class="login-intro">
            A little place made for someone who deserves a special day.
        </p>

        <form method="POST" class="login-form">

            <div class="field">
                <label for="username">
                    Username
                </label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    autocomplete="off"
                    required
                >
            </div>


            <div class="field">

                <label for="password">
                    Password
                </label>

                <div class="password-field">

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    >

                    <button
                        type="button"
                        id="togglePassword"
                    >
                        show
                    </button>

                </div>

            </div>


            <?php if ($error): ?>

                <p class="form-error">
                    <?= htmlspecialchars($error) ?>
                </p>

            <?php endif; ?>


            <button
                type="submit"
                class="primary-btn"
            >
                <span>Enter</span>
                <span>→</span>
            </button>

        </form>


        <p class="login-note">
            made quietly, with care.
        </p>

    </section>

</main>


<script src="assets/js/main.js"></script>

</body>
</html>