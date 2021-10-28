let images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    let src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

let imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

let imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});