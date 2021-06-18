// Using IntersectionObserver to animate fade in when the objects come into view

const faders = document.querySelectorAll('.fade_in');
const appear_options = {
    threshold: .5
};

const appear_on_scroll = new IntersectionObserver(function (entries, appear_on_scroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("in_screen");
            appear_on_scroll.unobserve(entry.target);
        }
    })
}, appear_options)

faders.forEach(fader => {
    appear_on_scroll.observe(fader);
})

// Animate a small jump down in the section headers

const jumpers = document.querySelectorAll('.down_in_place');
const jump_options = {
    threshold: 0
};

const jump_on_scroll = new IntersectionObserver(function (entries, jump_on_scroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("in_screen");
            jump_on_scroll.unobserve(entry.target);
        }
    })
}, jump_options)

jumpers.forEach(jumper => {
    jump_on_scroll.observe(jumper);
})

// Animate photos slide from left and right 

const sliders = document.querySelectorAll('.side_in_place');
const slide_options = {
    threshold: 0.5
};

const slide_on_scroll = new IntersectionObserver(function (entries, slide_on_scroll) {
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