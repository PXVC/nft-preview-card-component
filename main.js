let banner = document.querySelector('.banner');
let eye = document.querySelector('.view');
let imgLink = document.querySelector('.download-image');

let imageView = function() {
    banner.classList.toggle('active');
    eye.classList.toggle('active');
    imgLink.classList.toggle('active');
}

banner.addEventListener('click', imageView);