imageReplace = function() {
    var windowSize = window.innerWidth;
    var header = document.getElementById('header-image');
    if (windowSize >= 600) {
        header.srcset = "img/header-large-1x.png 1x, img/header-large-2x.png 2x";
        header.src = "img/header-large-1x.png"
    } else if (windowSize >= 480) {
        header.srcset = "img/header-medium-1x.png 1x, img/header-medium-2x.png 2x"
        header.src = "img/header-medium-1x.png"
    } else if (windowSize >= 350) {
        header.srcset = "img/header-small-1x.png 1x, img/header-small-2x.png 2x"
        header.src = "img/header-small-1x.png"
    } else {
        header.srcset = "img/header-xsmall-1x.png 1x, img/header-xsmall-2x.png 2x"
        header.src = "img/header-xsmall-1x.png"
    }
}
document.addEventListener('ready', imageReplace());
window.addEventListener('resize', function() {
    imageReplace()
});