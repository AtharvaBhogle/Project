const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




// function page4Animation(){
//     var elemC = document.querySelector("#elem-container")
// var fixed = document.querySelector("#fixed-image")
// elemC.addEventListener("mouseenter",function(){
//     fixed.style.display="block"
// })
// elemC.addEventListener("mouseleave",function(){
//     fixed.style.display="none"
// })


// var elems = document.querySelectorAll(".elem")
// elems.forEach(function (e) {
//     e.addEventListener("mouseenter", function () {
//         var image = e.getAttribute("data-image")
//         fixed.style.backgroundImage = `url(${image})`
//     })
// })

// }
function loaderAnimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 100,
    });
}

// VIDEO DISPLAY EXPERIMENT
// Function to show the video in the fixed-image div
function showVideo(src) {
    const fixedImage = document.getElementById('fixed-image');
    const videoElement = fixedImage.querySelector('video');

    if (!videoElement) {
        const video = document.createElement('video');
        video.setAttribute('width', '100%');
        video.setAttribute('height', '100%');
        video.setAttribute('muted', 'true');
        video.setAttribute('loop', 'true');
        video.setAttribute('autoplay', 'true');
        video.setAttribute('playsinline', 'true');

        const source = document.createElement('source');
        source.setAttribute('src', src);
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);
        fixedImage.appendChild(video);
    } else {
        videoElement.setAttribute('src', src);
        videoElement.load();
        videoElement.play();
    }

    fixedImage.style.display = 'block';
}

// Event listeners for elem elements
document.querySelectorAll('.elem').forEach(elem => {
    const videoSrc = elem.querySelector('video').getElementsByTagName('source')[0].getAttribute('src');
    
    elem.addEventListener('mouseenter', () => {
        showVideo(videoSrc);
    });

    elem.addEventListener('mouseleave', () => {
        const fixedImage = document.getElementById('fixed-image');
        fixedImage.style.display = 'none';
    });
});
 showVideo()
// page4Animation()
swiperAnimation()
loaderAnimation()