/* Lazy Loading code */

let images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    let src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

let imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 150px 0px"
};

let imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            entry.target.src = entry.target.dataset.src;
            entry.target.removeAttribute("data-src");
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});
