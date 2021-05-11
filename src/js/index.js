const desktopMq = window.matchMedia("screen and (min-width: 64rem)").matches;

// header search btn
const searchBtn = document.querySelector('header .searchBtn');
const searchForm = document.querySelector('header .searchForm');
const searchInput = document.querySelector('header .searchForm form');
searchBtn.addEventListener('click', function() {
    if(searchForm.style.height == '147px') {
        searchForm.style.height = '0';
        setTimeout(function() {
            searchForm.style.display = 'none';
        }, 400);
    } else {
        searchForm.style.display = 'block';
        setTimeout(function() {
            searchForm.style.height = '147px';
        }, 100);
    }
});
if(desktopMq) {
    searchForm.addEventListener('mouseleave', function() {
        searchForm.style.height = '0';
        setTimeout(function() {
            searchForm.style.display = 'none';
        }, 400);
    });
}