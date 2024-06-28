document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    gsap.set(card, { opacity: 0, y: -30 });

    gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    });
});