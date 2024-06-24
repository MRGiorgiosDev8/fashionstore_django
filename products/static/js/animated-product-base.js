document.addEventListener('DOMContentLoaded', function () {
    const navbarBrand = document.querySelector('.navbar-brand');
    const murakamiImage = document.querySelector('#murakami-image');
    let rotateAnimation;

    navbarBrand.addEventListener('mouseenter', function () {
        gsap.set(murakamiImage, { rotation: 0 }); 
        rotateAnimation = gsap.to(murakamiImage, {
            rotation: -360 * 1000, 
            duration: 300, 
            ease: 'none', 
        });
    });

    navbarBrand.addEventListener('mouseleave', function () {
        if (rotateAnimation) {
            rotateAnimation.kill();
            gsap.set(murakamiImage, { rotation: 0 }); 
        }
    });
});