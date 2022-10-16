const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup")
const selectedImages = document.getElementById("selectedImage")
const imgArr = [1, 2, 3, 4, 5, 6, 7]
const selectedArr = []

imgArr.forEach( i => {

    const image = document.createElement("img");
    image.src = `/Images/IMG_${i}.JPEG`;
    image.alt = `Image desc for ${i}th Image`;
    image.classList.add('galleryImg');

    image.addEventListener("click", () => {
        popup.style.transform = `translateY(0)`
        selectedImages.src = `/Images/IMG_${i}.JPEG`;
    })


    gallery.appendChild(image);
})

popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`
    popup.src = "";
    popup.alt = ""
})