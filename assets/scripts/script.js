function collapse() {
    var content = document.querySelectorAll(".button-text");
    var menu = document.querySelector(".side-menu-collapse");
    var booking = document.querySelector(".new-booking");
    var bookImg = document.querySelector(".new-booking img");
    // this.classList.toggle("active");
    for (let i = 0; i < content.length; i++){
        if (content[i].style.display === "none"){
            content[i].style.display = "inline";
            menu.style.width = "227px";
            booking.style.paddingRight = "24px";
            bookImg.style.marginRight = "12px";
        }
        else {
            content[i].style.display = "none";
            menu.style.width = "90px";
            booking.style.paddingRight = "16px";
            bookImg.style.marginRight = "0px";
        }
     }
}

function sideMenuDisplay(){
    var sideMenu = document.querySelector(".side-menu-collapse");
    if (sideMenu.style.display === "none"){
        sideMenu.style.display = "block";
    }
    else{
        sideMenu.style.display = "none";
    }
}