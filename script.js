// login and signup button 
// ============================

let userSec = document.querySelector(".user-humburger-icon");

userSec.addEventListener("click", () => {
  userSec.classList.toggle("active");
});


// top link buttons
// =-=-=-=-=-=-=-=-=-=-=
const buttonContainer = document.querySelector(".all-link-btns"),
allLinkButton = buttonContainer.querySelectorAll(".link-btn"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = buttonContainer.scrollWidth - buttonContainer.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from buttonContainer scrollLeft else add
        let scrollWidth = buttonContainer.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

// allLinkButton.forEach(tab => {
//     tab.addEventListener("click", () => {
//         buttonContainer.querySelector(".active").classList.remove("active");
//         tab.classList.add("active");
//     });
// });

const dragging = (e) => {
    if(!isDragging) return;
    buttonContainer.classList.add("dragging");
    buttonContainer.scrollLeft -= e.movementX;
    handleIcons(buttonContainer.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    buttonContainer.classList.remove("dragging");
}

buttonContainer.addEventListener("mousedown", () => isDragging = true);
buttonContainer.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



// toggle button
// ================

let toggleBtn = document.querySelector(".toggle_b");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("active");
})


// button link 
// ===============

let CardLink = document.querySelectorAll(".link-btn");

for (let i = 0; i < CardLink.length; i++) {
  
   CardLink[i].addEventListener("click", function () {
    
    let linkId = this.dataset.card;
    let linkContentId = document.getElementById(linkId);
    let allHideCont = document.querySelectorAll(".cards-container");
    let allCardLink = document.querySelectorAll(".link-btn");

    for (let k = 0; k < allHideCont.length; k++) {
      allHideCont[k].style.display = "none";
    }

    for (let j = 0; j < allCardLink.length; j++) {
      allCardLink[j].classList.remove("active");
    }

    linkContentId.style.display = "block";
    this.classList.add("active");
    
   })
  
}

document.querySelector(".link-btn").click();




// =======================
// A Cards slider 
// =======================

var splide = new Splide( '#splide_a1' );
splide.mount();


var splide = new Splide( '#splide_a2' );
splide.mount();

var splide = new Splide( '#splide_a3' );
splide.mount();

var splide = new Splide( '#splide_a4' );
splide.mount();

var splide = new Splide( '#splide_a5' );
splide.mount();

var splide = new Splide( '#splide_a6' );
splide.mount();

var splide = new Splide( '#splide_a7' );
splide.mount();


// =======================
// B Cards slider 
// =======================

var splide = new Splide( '#splide_b1' );
splide.mount();


var splide = new Splide( '#splide_b2' );
splide.mount();

var splide = new Splide( '#splide_b3' );
splide.mount();

var splide = new Splide( '#splide_b4' );
splide.mount();

var splide = new Splide( '#splide_b5' );
splide.mount();

var splide = new Splide( '#splide_b6' );
splide.mount();

var splide = new Splide( '#splide_b7' );
splide.mount();



// =======================
// C Cards slider 
// =======================

var splide = new Splide( '#splide_c1' );
splide.mount();


var splide = new Splide( '#splide_c2' );
splide.mount();

var splide = new Splide( '#splide_c3' );
splide.mount();

var splide = new Splide( '#splide_c4' );
splide.mount();

var splide = new Splide( '#splide_c5' );
splide.mount();

var splide = new Splide( '#splide_c6' );
splide.mount();

var splide = new Splide( '#splide_c7' );
splide.mount();


// =======================
//  Footer tabs
// =======================

let footerBtns = document.querySelectorAll(".f-btn");

for (let i = 0; i < footerBtns.length; i++) {
  footerBtns[i].addEventListener("click", function () {

    let fBtnId = this.dataset.tabs;
    let btnAllId = document.getElementById(fBtnId);
    let allHideFooterTabs = document.querySelectorAll(".footer-tab-links-parent");
    let allHideFooterButtons = document.querySelectorAll(".f-btn");

    for(let j = 0; j < allHideFooterTabs.length; j++){
      allHideFooterTabs[j].style.display = "none";
    }

    for(let k = 0; k < allHideFooterButtons.length; k++){
      allHideFooterButtons[k].classList.remove("active");
    }

    btnAllId.style.display = "block";
    this.classList.add("active");
    
  })
  
}

document.querySelector(".f-btn").click();
