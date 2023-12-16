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



/* Footer Show more btn a
=========================== */

let showMorebtnA = document.querySelector("#f-s-m-btn-a");
let tabContainer = document.querySelector(".footer-tab-links");

showMorebtnA.addEventListener("click", function () {
  // let allFLinks = document.querySelectorAll(".footer-hide-link");
  
  tabContainer.classList.toggle("active");

  if(showMorebtnA.style.display != "none"){
    showMorebtnA.style.display = "none"
  }

  
});


/* Footer Show more btn b
=========================== */

let showMorebtnB = document.querySelector("#f-s-m-btn-b");
let tabContainerb = document.querySelector("#f-t-b");

showMorebtnB.addEventListener("click", function () {
  
  tabContainerb.classList.toggle("active");

  if(showMorebtnB.style.display != "none"){
    showMorebtnB.style.display = "none"
  }

  
});



/* Footer Show more btn c
=========================== */

let showMorebtnC = document.querySelector("#f-s-m-btn-c");
let tabContainerbC = document.querySelector("#f-t-c");

showMorebtnC.addEventListener("click", function () {
  
  tabContainerbC.classList.toggle("active");

  if(showMorebtnC.style.display != "none"){
    showMorebtnC.style.display = "none"
  }

  
});


/* Footer Show more btn d
=========================== */

let showMorebtnD = document.querySelector("#f-s-m-btn-d");
let tabContainerbD = document.querySelector("#f-t-d");

showMorebtnD.addEventListener("click", function () {
  
  tabContainerbD.classList.toggle("active");

  if(showMorebtnD.style.display != "none"){
    showMorebtnD.style.display = "none"
  }

  
});


/* Footer Show more btn e
=========================== */

let showMorebtnE = document.querySelector("#f-s-m-btn-e");
let tabContainerbE = document.querySelector("#f-t-e");

showMorebtnE.addEventListener("click", function () {
  
  tabContainerbE.classList.toggle("active");

  if(showMorebtnE.style.display != "none"){
    showMorebtnE.style.display = "none"
  }

  
});

/* Footer Show more btn f
=========================== */

let showMorebtnF = document.querySelector("#f-s-m-btn-f");
let tabContainerbF = document.querySelector("#f-t-f");

showMorebtnF.addEventListener("click", function () {
  
  tabContainerbF.classList.toggle("active");

  if(showMorebtnF.style.display != "none"){
    showMorebtnF.style.display = "none"
  }

  
});


/* Footer Show more btn g
=========================== */

let showMorebtnG = document.querySelector("#f-s-m-btn-g");
let tabContainerbG = document.querySelector("#f-t-g");

showMorebtnG.addEventListener("click", function () {
  
  tabContainerbG.classList.toggle("active");

  if(showMorebtnG.style.display != "none"){
    showMorebtnG.style.display = "none"
  }

  
});



/* Footer Show more btn h
=========================== */

let showMorebtnH = document.querySelector("#f-s-m-btn-h");
let tabContainerbH = document.querySelector("#f-t-h");

showMorebtnH.addEventListener("click", function () {
  
  tabContainerbH.classList.toggle("active");

  if(showMorebtnH.style.display != "none"){
    showMorebtnH.style.display = "none"
  }

  
});