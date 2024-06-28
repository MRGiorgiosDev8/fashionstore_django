document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    gsap.set(card, {y: -40});

    gsap.to(card, {
        y: 0,
        duration: 1,
        ease: 'power1.inOut'
    });
});