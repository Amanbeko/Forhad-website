let src = [
    "./img/Portfolio_1.jpg",
    "./img/Portfolio_2.jpg",
    "./img/Portfolio_3.jpg",
    "./img/Portfolio_4.jpg",
    "./img/Portfolio_5.jpg",
    "./img/Portfolio_6.jpg"
];
// let image = document.getElementById("slider-image");
// image.src = src[0];
// function changeImg(change) {
//     let current = 0;
//     for (let i = 0; i < src.length; i++) {
//         let newImagePath = '.' + image.src.substring(63)
//         if (newImagePath === src[i]) {
//             current = i
//         }
//     }
//     if (src.length - 1 == current && change == 1) {
//         image.src = src[0]
//     }else if (current == 0 && change == -1) {
//         image.src = src[src.length - 1]
//     }else{
//         image.src = src[current + change]
//     }
// }
// КОД ВЫШЕ ЭТО КАК В ВИДЕО ДЕКОД. НО ОН НЕ РАБОТАЕТ В ДРУГИХ УСТРОИСТВАХ ПОТОМУ ЧТО
// В КАЖДОМ УСТРОИСТВЕ Image.SRC БУДЕТ РАЗНЫМ << 14 СТРОКА >> ТАМ НАДО БУДЕТ СУБСТРИҢ ИЗМЕНЯТЬ
let image = document.getElementById("slider-image");
let current = 0;

image.src = src[current];

function changeImg(change) {
    current += change;
    if (current < 0) {
        current = src.length - 1; // Если текущий индекс меньше нуля, переключаемся на последнее изображение
    } else if (current >= src.length) {
        current = 0; // Если текущий индекс больше последнего, переключаемся на первое изображение
    }
    image.src = src[current];
}


$('.myservices-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: document.querySelector(".myservices-prev-btn"),
    nextArrow: document.querySelector(".myservices-next-btn"),
    dots: true,
});