// Using IntersectionObserver to animate fade in when the objects come into view

const sliders = document.querySelectorAll('.home_slide_in');
const slide_options = {
    threshold: 0
};

const slide_on_scroll = new IntersectionObserver(function (entries, appear_on_scroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("in_screen");
            slide_on_scroll.unobserve(entry.target);
        }
    })
}, slide_options)

sliders.forEach(slider => {
    slide_on_scroll.observe(slider);
})
