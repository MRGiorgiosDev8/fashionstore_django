function changeImage(element) {
    let smallImgUrl = element.src;
    let bigImg = document.getElementById('bigImg');

    bigImg.src = smallImgUrl;
}
