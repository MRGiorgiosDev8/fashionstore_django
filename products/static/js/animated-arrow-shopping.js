document.addEventListener('DOMContentLoaded', function () {
    const arrowShopping = document.getElementById('arrow-shopping');
    gsap.set(arrowShopping, { x: 14 });

    const arrowAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    arrowAnimation.to(arrowShopping, {
        x: -5,
        duration: 0.8,
        ease: 'power1.inOut'
    }).to(arrowShopping, {
        x: 7,
        duration: 0.8,
        ease: 'power1.inOut'
    });

    arrowShopping.addEventListener('mouseenter', function () {
        gsap.to(arrowShopping, { scale: 1.1, duration: 0.3 });
    });

    arrowShopping.addEventListener('mouseleave', function () {
        gsap.to(arrowShopping, { scale: 1, duration: 0.3 });
    });
});