const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function startLoader() {
    let counter = document.querySelector(".counter");
    let currentValue = 0;

    function update() {
        if (currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counter.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(update, delay);
    }

    update();
}

// Call the loader function
startLoader();

// Ensure GSAP is loaded and elements exist
gsap.to(".counter", {
    duration: 0.25,
    delay: 3.5,
    opacity: 0,
});

gsap.to(".bar", {
    duration: 1.5,
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut",
    onComplete: function() {
        document.querySelector(".overlay").classList.add("inactive");//disabling the overlay as the z-index of the overlay is higher than the main
        document.querySelector("#main").classList.add("active");//which enables us to interact with the main webpage
    }
});

