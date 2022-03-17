// Smooth scroll page
const scroll = new SmoothScroll('.header-container a[href*="#"]', {
	speed: 500
});

const scroll_1 = new SmoothScroll('.content-container a[href*="#"]', {
	speed: 500
});


// Upload profile image
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

// Download image
let btnDownload = document.querySelector('#btnDownload');

btnDownload.addEventListener('click', function() {
    const imageDownload = document.querySelector('#image')
    html2canvas(imageDownload).then(function(canvas) {
        document.body.appendChild(canvas);
        let canvasImage = document.querySelector('canvas');
        btnDownload.href = canvasImage.toDataURL();
        btnDownload.download = 'husc-student.png';
	document.body.removeChild(canvas);
    }); 
});

// Show course information
const courseBtn1 = document.querySelector('.js-course-click1');
const course1 = document.querySelector('.js-course1');

courseBtn1.addEventListener('click', function(){
    course1.classList.add('open');
});

course1.addEventListener('click', function() {
    course1.classList.remove('open');
});

const courseBtn2 = document.querySelector('.js-course-click2');
const course2 = document.querySelector('.js-course2');

courseBtn2.addEventListener('click', function(){
    course2.classList.add('open');
});

course2.addEventListener('click', function() {
    course2.classList.remove('open');
});

const courseBtn3 = document.querySelector('.js-course-click3');
const course3 = document.querySelector('.js-course3');

courseBtn3.addEventListener('click', function(){
    course3.classList.add('open');
});

course3.addEventListener('click', function() {
    course3.classList.remove('open');
});

const courseBtn4 = document.querySelector('.js-course-click4');
const course4 = document.querySelector('.js-course4');

courseBtn4.addEventListener('click', function(){
    course4.classList.add('open');
});

course4.addEventListener('click', function() {
    course4.classList.remove('open');
});

const courseBtn5 = document.querySelector('.js-course-click5');
const course5 = document.querySelector('.js-course5');

courseBtn5.addEventListener('click', function(){
    course5.classList.add('open');
});

course5.addEventListener('click', function() {
    course5.classList.remove('open');
});

const courseBtn6 = document.querySelector('.js-course-click6');
const course6 = document.querySelector('.js-course6');

courseBtn6.addEventListener('click', function(){
    course6.classList.add('open');
});

course6.addEventListener('click', function() {
    course6.classList.remove('open');
});

const courseBtn7 = document.querySelector('.js-course-click7');
const course7 = document.querySelector('.js-course7');

courseBtn7.addEventListener('click', function(){
    course7.classList.add('open');
});

course7.addEventListener('click', function() {
    course7.classList.remove('open');
});

const courseBtn8 = document.querySelector('.js-course-click8');
const course8 = document.querySelector('.js-course8');

courseBtn8.addEventListener('click', function(){
    course8.classList.add('open');
});

course8.addEventListener('click', function() {
    course8.classList.remove('open');
});

const courseBtn9 = document.querySelector('.js-course-click9');
const course9 = document.querySelector('.js-course9');

courseBtn9.addEventListener('click', function(){
    course9.classList.add('open');
});

course9.addEventListener('click', function() {
    course9.classList.remove('open');
});

const courseBtn10 = document.querySelector('.js-course-click10');
const course10 = document.querySelector('.js-course10');

courseBtn10.addEventListener('click', function(){
    course10.classList.add('open');
});

course10.addEventListener('click', function() {
    course10.classList.remove('open');
});

const courseBtn11 = document.querySelector('.js-course-click11');
const course11 = document.querySelector('.js-course11');

courseBtn11.addEventListener('click', function(){
    course11.classList.add('open');
});

course11.addEventListener('click', function() {
    course11.classList.remove('open');
});

const courseBtn12 = document.querySelector('.js-course-click12');
const course12 = document.querySelector('.js-course12');

courseBtn12.addEventListener('click', function(){
    course12.classList.add('open');
});

course12.addEventListener('click', function() {
    course12.classList.remove('open');
});

const courseBtn13 = document.querySelector('.js-course-click13');
const course13 = document.querySelector('.js-course13');

courseBtn13.addEventListener('click', function(){
    course13.classList.add('open');
});

course13.addEventListener('click', function() {
    course13.classList.remove('open');
});

const courseBtn14 = document.querySelector('.js-course-click14');
const course14 = document.querySelector('.js-course14');

courseBtn14.addEventListener('click', function(){
    course14.classList.add('open');
});

course14.addEventListener('click', function() {
    course14.classList.remove('open');
});

const courseBtn15 = document.querySelector('.js-course-click15');
const course15 = document.querySelector('.js-course15');

courseBtn15.addEventListener('click', function(){
    course15.classList.add('open');
});

course15.addEventListener('click', function() {
    course15.classList.remove('open');
});

const courseBtn16 = document.querySelector('.js-course-click16');
const course16 = document.querySelector('.js-course16');

courseBtn16.addEventListener('click', function(){
    course16.classList.add('open');
});

course16.addEventListener('click', function() {
    course16.classList.remove('open');
});

const courseBtn17 = document.querySelector('.js-course-click17');
const course17 = document.querySelector('.js-course17');

courseBtn17.addEventListener('click', function(){
    course17.classList.add('open');
});

course17.addEventListener('click', function() {
    course17.classList.remove('open');
});

const courseBtn18 = document.querySelector('.js-course-click18');
const course18 = document.querySelector('.js-course18');

courseBtn18.addEventListener('click', function(){
    course18.classList.add('open');
});

course18.addEventListener('click', function() {
    course18.classList.remove('open');
});

const courseBtn19 = document.querySelector('.js-course-click19');
const course19 = document.querySelector('.js-course19');

courseBtn19.addEventListener('click', function(){
    course19.classList.add('open');
});

course19.addEventListener('click', function() {
    course19.classList.remove('open');
});

const courseBtn20 = document.querySelector('.js-course-click20');
const course20 = document.querySelector('.js-course20');

courseBtn20.addEventListener('click', function(){
    course20.classList.add('open');
});

course20.addEventListener('click', function() {
    course20.classList.remove('open');
});

const courseBtn21 = document.querySelector('.js-course-click21');
const course21 = document.querySelector('.js-course21');

courseBtn21.addEventListener('click', function(){
    course21.classList.add('open');
});

course21.addEventListener('click', function() {
    course21.classList.remove('open');
});

const courseBtn22 = document.querySelector('.js-course-click22');
const course22 = document.querySelector('.js-course22');

courseBtn22.addEventListener('click', function(){
    course22.classList.add('open');
});

course22.addEventListener('click', function() {
    course22.classList.remove('open');
});

const courseBtn23 = document.querySelector('.js-course-click23');
const course23 = document.querySelector('.js-course23');

courseBtn23.addEventListener('click', function(){
    course23.classList.add('open');
});

course23.addEventListener('click', function() {
    course23.classList.remove('open');
});

const courseContainers = document.querySelectorAll('.course-container');
for(const courseContainer of courseContainers)
{
    courseContainer.addEventListener('click', function(e){
        e.stopPropagation();
    });
}
