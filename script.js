document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER — FIXED
       ===================================================== */

    const loader = document.getElementById("loader");

    // Hide loader independently of images/audio/network loading
    setTimeout(() => {
        if (loader) {
            loader.classList.add("hide");
        }
    }, 1500);


    /* =====================================================
       STARS
       ===================================================== */

    const stars = document.getElementById("stars");

    if (stars) {
        for (let i = 0; i < 140; i++) {
            const star = document.createElement("span");

            star.className = "star";

            const size = Math.random() * 2.5 + 0.7;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            star.style.animationDuration =
                `${2 + Math.random() * 4}s`;

            stars.appendChild(star);
        }
    }


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================================
       NAVIGATION SCROLL EFFECT
       ===================================================== */

    const nav = document.querySelector("nav");

    function updateNav() {
        if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 40);
        }
    }

    window.addEventListener(
        "scroll",
        updateNav,
        { passive: true }
    );

    updateNav();


    /* =====================================================
       HERO PARALLAX
       ===================================================== */

    const hero = document.querySelector(".hero");
    const krishna = document.querySelector(".krishna-visual");
    const moon = document.querySelector(".moon");

    if (
        hero &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        hero.addEventListener("mousemove", event => {

            const rect = hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;

            if (krishna) {
                krishna.style.transform =
                    `translate(${x * -10}px, ${y * -6}px)`;
            }

            if (moon) {
                moon.style.transform =
                    `translate(${x * 8}px, ${y * 5}px)`;
            }

        });

        hero.addEventListener("mouseleave", () => {

            if (krishna) {
                krishna.style.transform = "";
            }

            if (moon) {
                moon.style.transform = "";
            }

        });
    }


    /* =====================================================
       WATER SHIMMER
       ===================================================== */

    function createShimmer(id, count) {

        const container =
            document.getElementById(id);

        if (!container) return;

        for (let i = 0; i < count; i++) {

            const light =
                document.createElement("span");

            light.className = "water-light";

            light.style.left =
                `${Math.random() * 100}%`;

            light.style.top =
                `${Math.random() * 100}%`;

            light.style.width =
                `${15 + Math.random() * 85}px`;

            light.style.animationDuration =
                `${3 + Math.random() * 7}s`;

            light.style.animationDelay =
                `${Math.random() * -10}s`;

            container.appendChild(light);
        }
    }

    createShimmer("waterShimmer", 42);
    createShimmer("vrindavanShimmer", 24);


    /* =====================================================
       KRISHNA FLUTE AUDIO
       ===================================================== */

    const fluteButton =
        document.getElementById("fluteBtn");

    const musicButton =
        document.getElementById("musicBtn");

    /*
       Supports both possible audio IDs so the website
       doesn't break if one HTML version is being used.
    */

    const fluteAudio =
        document.getElementById("fluteAudio") ||
        document.getElementById("music");

    if (fluteAudio) {
        fluteAudio.volume = 0.38;
    }


    async function playFlute() {

        if (!fluteAudio) return;

        try {

            await fluteAudio.play();

            if (fluteButton) {
                fluteButton.classList.add("playing");
                fluteButton.innerHTML =
                    "🪈 Playing the Flute ✨";
            }

            if (musicButton) {
                musicButton.textContent = "♫";
            }

        } catch (error) {

            console.log(
                "Audio could not start:",
                error
            );

        }
    }


    function stopFlute() {

        if (!fluteAudio) return;

        fluteAudio.pause();

        if (fluteButton) {
            fluteButton.classList.remove("playing");
            fluteButton.innerHTML =
                "🪈 Play the Flute";
        }

        if (musicButton) {
            musicButton.textContent = "▶";
        }
    }


    function toggleFlute() {

        if (!fluteAudio) return;

        if (fluteAudio.paused) {
            playFlute();
        } else {
            stopFlute();
        }
    }


    if (fluteButton) {
        fluteButton.addEventListener(
            "click",
            toggleFlute
        );
    }

    if (musicButton) {
        musicButton.addEventListener(
            "click",
            toggleFlute
        );
    }


    if (fluteAudio) {

        fluteAudio.addEventListener(
            "play",
            () => {
                if (fluteButton) {
                    fluteButton.classList.add("playing");
                    fluteButton.innerHTML =
                        "🪈 Playing the Flute ✨";
                }
            }
        );

        fluteAudio.addEventListener(
            "pause",
            () => {
                if (fluteButton) {
                    fluteButton.classList.remove("playing");
                    fluteButton.innerHTML =
                        "🪈 Play the Flute";
                }
            }
        );

    }


    /* =====================================================
       FLOATING PEACOCK FEATHERS
       ===================================================== */

    const feathers =
        document.getElementById("feathers");

    if (feathers) {

        for (let i = 0; i < 18; i++) {

            const feather =
                document.createElement("span");

            feather.className =
                "floating-feather";

            feather.textContent = "🪶";

            feather.style.left =
                `${Math.random() * 100}%`;

            feather.style.animationDuration =
                `${8 + Math.random() * 10}s`;

            feather.style.animationDelay =
                `${Math.random() * -15}s`;

            feather.style.fontSize =
                `${16 + Math.random() * 14}px`;

            feathers.appendChild(feather);
        }
    }


    /* =====================================================
       FIREFLIES
       ===================================================== */

    const fireflies =
        document.getElementById("fireflies");

    if (fireflies) {

        for (let i = 0; i < 35; i++) {

            const firefly =
                document.createElement("span");

            firefly.className = "firefly";

            firefly.style.left =
                `${5 + Math.random() * 90}%`;

            firefly.style.top =
                `${20 + Math.random() * 62}%`;

            firefly.style.animationDuration =
                `${2.5 + Math.random() * 4}s`;

            firefly.style.animationDelay =
                `${Math.random() * -6}s`;

            fireflies.appendChild(firefly);
        }
    }


    /* =====================================================
       STORY REVEAL
       ===================================================== */

    const storyItems =
        document.querySelectorAll(
            ".story-card.reveal"
        );

    if ("IntersectionObserver" in window) {

        const storyObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            storyObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        storyItems.forEach(item => {
            storyObserver.observe(item);
        });

    } else {

        storyItems.forEach(item => {
            item.classList.add("visible");
        });

    }


    /* =====================================================
       GENERAL REVEAL
       ===================================================== */

    const generalItems =
        document.querySelectorAll(
            ".intro-text, .section-title, " +
            ".vrindavan-content, .celebrate-content, " +
            ".final-content"
        );

    if ("IntersectionObserver" in window) {

        const generalObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            generalObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        generalItems.forEach(item => {
            generalObserver.observe(item);
        });

    } else {

        generalItems.forEach(item => {
            item.classList.add("reveal-visible");
        });

    }


    /* =====================================================
       MATKI
       ===================================================== */

    const matki =
        document.getElementById("matki");

    const matkiButton =
        document.getElementById("matkiBtn");

    const message =
        document.getElementById(
            "celebrationMessage"
        );

    const particles =
        document.getElementById("particles");

    let broken = false;


    function burstParticles() {

        if (!particles) return;

        const symbols = [
            "✨",
            "🦚",
            "🪷",
            "✦",
            "🌟"
        ];

        for (let i = 0; i < 32; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "celebration-particle";

            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            particle.style.left = "50%";
            particle.style.top = "50%";

            const x =
                (Math.random() - 0.5) * 500;

            const y =
                (Math.random() - 0.5) * 360;

            particle.style.setProperty(
                "--x",
                `${x}px`
            );

            particle.style.setProperty(
                "--y",
                `${y}px`
            );

            particle.style.setProperty(
                "--x2",
                `${x * 1.5}px`
            );

            particle.style.setProperty(
                "--y2",
                `${y + 180}px`
            );

            particle.style.animationDelay =
                `${Math.random() * .35}s`;

            particles.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    }


    function breakMatki() {

        if (broken) return;

        broken = true;

        if (matki) {
            matki.classList.add("shake");
        }

        setTimeout(() => {

            if (!matki) return;

            matki.classList.remove("shake");
            matki.classList.add("broken");

        }, 800);


        setTimeout(() => {

            if (message) {
                message.classList.add("show");
            }

            burstParticles();

        }, 650);


        if (matkiButton) {

            matkiButton.textContent =
                "✨ जय श्री कृष्ण ✨";

            matkiButton.disabled = true;
        }
    }


    if (matki) {
        matki.addEventListener(
            "click",
            breakMatki
        );
    }

    if (matkiButton) {
        matkiButton.addEventListener(
            "click",
            breakMatki
        );
    }


    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        "🦚 Welcome to Vrindavan — Jai Shri Krishna 🙏"
    );

});