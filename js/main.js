const newSwiper = new Swiper('.newSwiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            loop: true,
        },
        576: {
            slidesPerView: 1.25,
            spaceBetween: 10,
            loop: true,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            loop: true,
        },
    }
});
const secSwiper = new Swiper('.secSwiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            loop: true,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            loop: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

// animation blocks
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };

    }
    animOnScroll();
}

// mobile-menu
$(function () {
    const button = $('.mobile-btn');
    const menu = $('.mobile-menu');
    const close = $('.mobile-close');
    button.on('click', function () {
        menu.addClass('active');
    });
    close.on('click', function () {
        menu.removeClass('active');
    })
});