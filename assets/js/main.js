const scroll = new SmoothScroll('.header-container a[href*="#"]', {
	speed: 500
});

const scroll_1 = new SmoothScroll('.content-container a[href*="#"]', {
	speed: 500
});

document.querySelectorAll(".student-content-back-bottom-left-img__input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".student-content-back-bottom-left-img");

    dropZoneElement.addEventListener("click", e => {
        inputElement.click();
    });

    inputElement.addEventListener("change", e => {
        if(inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("student-content-back-bottom-left-img-over")
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("student-content-back-bottom-left-img-over")
        });
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();
        if(e.dataTransfer.files.length){
            inputElement.files = e.dataTransfer.files;
            console.log(inputElement.files);
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("student-content-back-bottom-left-img-over");
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".student-content-back-bottom-left-img__thumb");

    //First time - remove prompt
    if(dropZoneElement.querySelector(".student-content-back-bottom-left-img__prompt")) {
        dropZoneElement.querySelector(".student-content-back-bottom-left-img__prompt").remove();
    }

    //First time - there is no thumbnail element, so let's create it
    if(!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("student-content-back-bottom-left-img__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    //Show thumbnail for image files
    if(file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${ reader.result }')`
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}