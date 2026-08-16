document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PASSWORD SHOW / HIDE
    ========================= */

    const password =
        document.getElementById("password");

    const toggle =
        document.getElementById("togglePassword");


    if (password && toggle) {

        toggle.addEventListener("click", () => {

            const isHidden =
                password.type === "password";


            password.type =
                isHidden ? "text" : "password";


            toggle.textContent =
                isHidden ? "hide" : "show";

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealItems =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                (entries, obs) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting)
                            return;


                        entry.target.classList.add(
                            "visible"
                        );


                        obs.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealItems.forEach(
            (element, index) => {

                element.style.transitionDelay =
                    `${Math.min(index * 65, 300)}ms`;


                observer.observe(element);

            }
        );

    } else {

        revealItems.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =========================
       HERO PARALLAX
    ========================= */

    const heroArt =
        document.querySelector(".hero-art");


    if (
        heroArt &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        window.addEventListener(
            "mousemove",
            event => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 12;


                const y =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 12;


                heroArt.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }


    /* =========================
       PHOTO LIGHTBOX
    ========================= */

    const lightbox =
        document.getElementById("lightbox");


    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    const lightboxClose =
        document.getElementById(
            "lightboxClose"
        );


    const photoImages =
        document.querySelectorAll(
            ".photo-card img"
        );


    function closeLightbox() {

        if (!lightbox)
            return;


        lightbox.classList.remove(
            "open"
        );


        document.body.style.overflow =
            "";


        if (lightboxImage) {

            lightboxImage.src =
                "";

        }

    }


    photoImages.forEach(image => {

        image.addEventListener(
            "click",
            () => {

                if (!image.src)
                    return;


                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "open"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );

});