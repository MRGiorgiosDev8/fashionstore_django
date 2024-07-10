function changeImage(element) {
    // Получаем URL маленького изображения
    let smallImgUrl = element.src;
    // Находим большое изображение
    let bigImg = document.getElementById('bigImg');
    // Меняем URL большого изображения на URL маленького
    bigImg.src = smallImgUrl;
}
