const images = [
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg",
    "images/pic-7.jpg",
    "images/pic-8.jpg",
    "images/pic-9.jpg",
]

let counter = 0;
const imageSlider = document.getElementById('slider');
setInterval(() => {
    if(counter === images.length){
        counter = 0;
    }
    const imgUrl = images[counter];
    imageSlider.setAttribute("src",imgUrl);
   counter++
}, 2000)
