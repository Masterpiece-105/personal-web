const hamburgerBtnImg = document.querySelector('.left-container button');

const navMenu = document.querySelector('.nav-menu ul');
// const navMenu = document.querySelector('.left-container ul, .btn');

// console.log(hamburgerBtnImg);

function openMenu() {
    // console.log('hiii');
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')) {
        hamburgerBtnImg.innerHTML = `<img src="./Images/close.png" alt="">`;

    } else {
        hamburgerBtnImg.innerHTML = `<img src="./Images/menu.png" alt="">`;

    }
    
}