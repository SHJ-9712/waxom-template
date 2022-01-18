const desktopMq = window.matchMedia("screen and (min-width: 64rem)").matches;

// header search btn
const searchBtn = document.querySelector('header .searchBtn');
const searchForm = document.querySelector('header .searchForm');
const searchInput = document.querySelector('header .searchForm form');
searchBtn.addEventListener('click', () => {
    if(searchForm.style.height == '147px') {
        searchForm.style.height = '0';
        setTimeout(() => {
            searchForm.style.display = 'none';
        }, 400);
    } else {
        searchForm.style.display = 'block';
        setTimeout(() => {
            searchForm.style.height = '147px';
        }, 100);
    }
});
if(desktopMq) {
    searchForm.addEventListener('mouseleave', () => {
        searchForm.style.height = '0';
        setTimeout(() => {
            searchForm.style.display = 'none';
        }, 400);
    });
}

// header Mobile, Tablet toggle menu
const toggleMenu = document.querySelector('.toggleMenu');
const categories = document.querySelector('.categories');
toggleMenu.addEventListener('click', () => {
    if(categories.style.display == 'block') {
        categories.style.right = '-341px';
        setTimeout(() => {
            categories.style.display = 'none';
        }, 400);
        toggleMenu.classList.remove('on');
    } else {
        categories.style.display = 'block';
        setTimeout(() => {
            categories.style.right = '-21px';
        }, 100);
        toggleMenu.classList.add('on');
    }
});

// main swiper
var swiper = new Swiper('.main-visual', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1140: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }            
        }
    }
});

// video modal
const playBtn = document.querySelector('.video-section .youtube-play-btn');
const videoModal = document.querySelector('.video-modal');
const closeBtn = document.querySelector('.video-modal .modal-container .modal-box .close-btn');

function showVideo(e) {
    e.preventDefault();
    videoModal.style.setProperty('display', 'block');
    document.querySelector('body').style.setProperty('overflow', 'hidden');
}
function hideVideo() {
    videoModal.style.setProperty('display', 'none');
    document.querySelector('body').style.removeProperty('overflow');
    stopVideo();
}

playBtn.addEventListener('click', showVideo);
videoModal.addEventListener('click', hideVideo);
closeBtn.addEventListener('click', hideVideo);

// video modal_youtube api
const addYouTubeAPI = document.createElement('script');
addYouTubeAPI.src = 'https://www.youtube.com/iframe_api';
videoModal.appendChild(addYouTubeAPI);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'ZTwCDpFJEZ4'
    });
}

function stopVideo() {
    player.stopVideo();
}

// recent posts swiper
var swiper = new Swiper(".posts-swiper", {
    slidesPerView : 1,
    loop : true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    spaceBetween : 30,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // tablet
    breakpoints: {
        768: {
            slidesPerView : 2,
            centeredSlides: false,
            slidesPerGroup: 2
        },
    }
});

// partners swiper
var swiper = new Swiper(".partners-swiper", {
    slidesPerView : 1,
    loop : true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // tablet
    breakpoints: {
        768: {
            slidesPerView : 2,
            centeredSlides: false,
        }
    }
});