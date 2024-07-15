function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menu.classList.contains('open')) {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
        mobileMenu.style.maxHeight = '0';
        var interval=setTimeout(() => {
            mobileMenu.style.display = 'none';
            if(menu.classList.contains('open')){mobileMenu.style.display = 'flex';clearInterval(interval);}
        }, 400);
    }
}
function giveMargin(){
    const menu=document.querySelector(".firstSection")||document.querySelector(".secondSection")||document.querySelector(".thirdSection")||document.querySelector(".fourthSection");
    menu.classList.toggle('giveMargin');
}

function knowMe(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setTimeout(()=>{
        var btn=document.querySelector("#hamburger-icon");
        if(!btn.classList.contains('open')) btn.click();
    },100);
}