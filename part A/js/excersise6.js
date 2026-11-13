const images = [
    "images/pink flower.jpg",
    "images/blue flower.jpg",
    "images/white flower.jpg"
];

const altTexts = [
    "Pink flower",
    "Blue flower",
    "White flower"
];

let currentIndex = 0;

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("slideshow").src = images[currentIndex];
    document.getElementById("slideshow").alt = altTexts[currentIndex];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById("slideshow").src = images[currentIndex];
    document.getElementById("slideshow").alt = altTexts[currentIndex];
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("prevButton").addEventListener("click", prevImage);