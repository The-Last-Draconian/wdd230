/*let images = document.querySelectorAll("img[data-src]");

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

Above is the coding I did. Below is the coding I copied from Leo Aquino's
codepen he made to help me. I'm not entirely sure what it is that makes
it work yet but it does!
*/

const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 5px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {

        items.forEach((item) => {

            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
                gsap.from(item.target, { filter: "blur(5rem)", transform: "rotateX(180deg)" });

            }
        });
    }, imageOptions);
    images.forEach((img) => {
        observer.observe(img);

    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });

}

