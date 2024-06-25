document.addEventListener('DOMContentLoaded', function () {
    const listGroup = document.querySelector('.list-group');

    gsap.set(listGroup, { y: -100, opacity: 0 });

    gsap.to(listGroup, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    });
});