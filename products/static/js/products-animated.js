document.addEventListener("DOMContentLoaded", function() {
    let card = document.querySelectorAll(".card");

    gsap.set(card, { opacity: 0 });

    gsap.to(card, { duration: 0.7, delay: 0.6, opacity: 1, ease: "power1.inOut" });
});
