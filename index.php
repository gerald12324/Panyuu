<?php

require __DIR__ . '/auth.php';

?>

<!DOCTYPE html>

<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Her Special Day — Panyuu
    </title>


    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >


    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap"
        rel="stylesheet"
    >


    <link
        rel="stylesheet"
        href="assets/css/style.css"
    >

    <link
        rel="stylesheet"
        href="assets/css/particles.css"
    >

</head>


<body class="site-page">


<header class="site-header">

    <a
        href="#home"
        class="brand"
    >
        Panyuu<span>.</span>
    </a>


    <nav class="desktop-nav">

        <a href="#home">
            Home
        </a>

        <a href="#moments">
            Moments
        </a>

        <a href="#letter">
            A note
        </a>

    </nav>


    <a
        href="logout.php"
        class="logout-link"
    >
        Close
    </a>

</header>



<main>


<!-- HERO -->

<section
    id="home"
    class="hero section"
>

    <div class="hero-copy reveal">

        <p class="eyebrow">
            when u love someone son
        </p>


        <h1>

            Happy Birthday 
            <em>My little Princess</em>

        </h1>


        <p class="hero-lead">

            A small collection of words,
            moments, and little things —
            made especially for today.

        </p>


        <a
            href="#gallery"
            class="scroll-link"
        >

            scroll to discover

            <span>
                ↓
            </span>

        </a>

    </div>


    <div
        class="hero-image-container"
        aria-hidden="true"
    >

        <img 
            src="assets/images/hero-photo.jpg"
            alt="birthday photo"
            class="hero-image"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="hero-placeholder">
            <div>
                <p style="font-size: 18px; margin-bottom: 10px;">📷 Upload Foto Anda</p>
                <p style="font-size: 12px; color: #b08cde;">Copy file ke: assets/images/hero-photo.jpg</p>
            </div>
        </div>

    </div>

</section>



<!-- GALLERY INTRO -->

<section
    id="gallery"
    class="gallery-intro section"
>

    <div class="section-tag">
        01
    </div>


    <div class="intro-copy reveal">

        <p class="eyebrow">
            your beautiful moments
        </p>


        <h2>

            Little moments<br>

            <em>worth keeping.</em>

        </h2>


        <p>

            Beberapa foto yang mungkin sederhana,
            tapi punya cerita sendiri.

        </p>

    </div>

</section>



<!-- GALLERY -->

<section
    id="moments"
    class="gallery section"
>

    <div class="photo-grid">


        <figure
            class="photo-card reveal"
        >

            <img
                src="assets/images/gallery/foto8.jpg"
                alt="Moment"
            >

            <figcaption>

                <span>01</span>

                <span>
                    a moment to keep
                </span>

            </figcaption>

        </figure>



        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto1.jpg"
                alt="Moment 01"
            >

            <figcaption>

                <span>02</span>

                <span>
                    you
                </span>

            </figcaption>

        </figure>



        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto2.jpg"
                alt="Moment 02"
            >

            <figcaption>

                <span>03</span>

                <span>
                    are
                </span>

            </figcaption>

        </figure>



        <figure
            class="photo-card reveal"
        >

            <img
                src="assets/images/gallery/foto3.jpg"
                alt="Moment 03"
            >

            <figcaption>

                <span>04</span>

                <span>
                    worth remembering
                </span>

            </figcaption>

        </figure>



        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto4.jpg"
                alt="Moment 04"
            >

            <figcaption>

                <span>05</span>

                <span>
                    always
                </span>

            </figcaption>

        </figure>



        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto5.jpg"
                alt="Moment 05"
            >

            <figcaption>

                <span>06</span>

                <span>
                    beautiful
                </span>

            </figcaption>

        </figure>


        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto6.jpg"
                alt="Moment 06"
            >

            <figcaption>

                <span>07</span>

                <span>
                    moments
                </span>

            </figcaption>

        </figure>


        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto7.jpg"
                alt="Moment 07"
            >

            <figcaption>

                <span>08</span>

                <span>
                    together
                </span>

            </figcaption>

        </figure>


        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto9.jpg"
                alt="Moment 08"
            >

            <figcaption>

                <span>09</span>

                <span>
                    forever
                </span>

            </figcaption>

        </figure>

        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto10.jpg"
                alt="Moment 08"
            >

            <figcaption>

                <span>09</span>

                <span>
                    forever
                </span>

            </figcaption>

        </figure>

        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto11.jpg"
                alt="Moment 08"
            >

            <figcaption>

                <span>09</span>

                <span>
                    forever
                </span>

            </figcaption>

        </figure>

        <figure class="photo-card reveal">

            <img
                src="assets/images/gallery/foto12.jpg"
                alt="Moment 08"
            >

            <figcaption>

                <span>09</span>

                <span>
                    forever
                </span>

            </figcaption>

        </figure>


    </div>

</section>


<!-- GALLERY CAPTION -->

<section class="gallery-caption">

    <div class="caption-content">
        <h3 class="caption-title">Betapa Indahnya Diri Mu

        </h3>
    </div>

</section>


<!-- UCAPAN -->

<section
    id="letter"
    class="letter section"
>

    <div class="section-tag">
        02
    </div>


    <div class="letter-layout">


        <div class="letter-heading reveal">

            <p class="eyebrow">
                a little note
            </p>


            <h2>

                For you,<br>

                <em>Panyuu.</em>

            </h2>

        </div>



        <article class="letter-card reveal">

            <p class="hello">

                Selamat ulang tahun, Panyuu.

            </p>


            <p>

                Aku nggak mau bikin halaman ini
                terlalu ramai, karena sesuatu yang tulus
                rasanya nggak perlu dibuat berlebihan.

            </p>


            <p>

                Semoga di umur yang baru ini,
                lebih banyak hal baik datang ke hidup kamu.
                Semoga apa pun yang sedang kamu perjuangkan
                pelan-pelan menemukan jalannya.

            </p>


            <p>

                Semoga kamu selalu punya alasan kecil
                untuk tersenyum setiap hari.

            </p>


            <p>

                Terima kasih sudah menjadi kamu.
                Tetap jadi seseorang yang punya caranya
                sendiri untuk membuat hari terasa sedikit
                lebih baik.

            </p>


            <p class="signature">

                — Gerald Indi Sechan.

            </p>

        </article>

    </div>

</section>



<!-- LITTLE THINGS -->

<section class="little-things section">

    <div class="section-tag">
        03
    </div>


    <div class="little-heading reveal">

        <p class="eyebrow">
            the little things
        </p>


        <h2>

            Some things<br>

            just feel <em>right.</em>

        </h2>

    </div>


    <div class="little-grid">


        <article class="little-card reveal">

            <span>
                01
            </span>

            <h3>
                Your smile.
            </h3>

            <p>

                It is something simple, yet its impact is truly profound. 
                Your presence and smile always manage to bring warmth and 
                a renewed sense of spirit amidst the hustle and bustle of 
                the day.
            </p>

        </article>



        <article class="little-card reveal">

            <span>
                02
            </span>

            <h3>
                Your way.
            </h3>

            <p>

                There is no need to feel rushed to follow the direction others 
                are taking. Trust your process, because the path you choose 
                and the decisions you make hold their own value.

            </p>

        </article>



        <article class="little-card reveal">

            <span>
                03
            </span>

            <h3>
                This day.
            </h3>

            <p>

                Go through the day calmly and in control.
                There is no need to rush; what matters most 
                is that you keep moving forward in alignment 
                with your plans and the values ​​you hold.
            </p>

        </article>


    </div>

</section>



<!-- CLOSING -->

<section class="closing section">

    <div class="closing-inner reveal">

        <p class="eyebrow">
            and finally
        </p>


        <h2>

            May this year<br>

            <em>be kind to you.</em>

        </h2>


        <p>

            Happy Birthday, Panyuu.
            Semoga tahun ini membawa lebih banyak
            cerita yang baik.

        </p>


        <div class="closing-line"></div>


        <span class="closing-date">

            24 · 01 · 2026

        </span>

    </div>

</section>


</main>



<footer class="site-footer">

    <span>
        Her Special Day
    </span>

    <span>
        @Callme_Rall
    </span>

</footer>



<!-- LIGHTBOX -->

<div
    class="lightbox"
    id="lightbox"
>

    <button
        class="lightbox-close"
        id="lightboxClose"
    >
        ×
    </button>


    <img
        id="lightboxImage"
        src=""
        alt=""
    >

</div>



<script src="assets/js/main.js"></script>

<script src="assets/js/particles.js"></script>

</body>

</html>