const hamburgerBtnImg = document.querySelector('.nav-right-element button');

const navMenu = document.querySelector('.nav-menu ul');

// console.log(hamburgerBtnImg);

function openMenu() {
    // console.log('hiii');
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')) {
        hamburgerBtnImg.innerHTML = `<img src="./Img/close.png" alt="img">`;

    } else {
        hamburgerBtnImg.innerHTML = `<img src="./Img/menu.png" alt="menuImg">`;
    }
}
