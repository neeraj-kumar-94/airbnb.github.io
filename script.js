// login and signup button 
// ============================

let userSec = document.querySelector(".user-humburger-icon");

userSec.addEventListener("click", () => {
  userSec.classList.toggle("active");
});

// hide login and signup section
// ===============================

let userSecbutton = document.querySelector("#login-signup-popup");
let loginSignHideSec = document.querySelector("#login-sign-hide-sec");
let lSignCross = document.querySelector("#l-s-cross");

userSecbutton.onclick = function (){
  loginSignHideSec.style.display = "block";
}

lSignCross.onclick = function (){
  loginSignHideSec.style.display = "none";
}

window.onclick = function(event){
  if(event.target == loginSignHideSec){
    loginSignHideSec.style.display = "none";
  }
}

let continueWeb = document.querySelectorAll(".compnay-icon-name-material .c-i-name");
continueWeb.onclick = function(){
  loginSignHideSec.style.display = "none";
}


// form login and signup section 
// ================================

let select = document.getElementById("select-country");
let inputPhone = document.getElementById("phone");

inputPhone.addEventListener("click", function() {
  let select = document.getElementById("select-country").value;
  let inputPhone = document.getElementById("phone").value = select;
})

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
        let scrollWidth = buttonContainer.scrollLeft += icon.id === "left" ? -160 : 160;
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

var splide = new Splide( '#splide_a1',{
  pagination: false,
});
splide.mount();


var splide = new Splide( '#splide_a2' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a3' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a4' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a5',{
  pagination: false,
} );
splide.mount();

var splide = new Splide( '#splide_a6' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a7' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a8' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a9' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a10' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a11' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a12' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a13' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a14' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a15' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a16' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a17' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a18' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a19' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a20' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a21' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a22' ,{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_a23' ,{
  pagination: false,
});
splide.mount();




// =======================
// B Cards slider 
// =======================

var splide = new Splide( '#splide_b1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_b23',{
  pagination: false,
});
splide.mount();



// =======================
// C Cards slider 
// =======================

var splide = new Splide( '#splide_c1' );
splide.mount();


var splide = new Splide( '#splide_c2' );
splide.mount();

var splide = new Splide( '#splide_c3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c7',{
  pagination: false,
});
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



/* Footer tab slider
=================== */
const tabButtonContainer = document.querySelector(".footer-tab-btns"),
allTabLinkButton = tabButtonContainer.querySelectorAll(".f-btn"),
footerArrowIcons = document.querySelectorAll(".f-icon i");

let footerIsDragging = false;

const footerHandleIcons = (scrollVal) => {
    let maxScrollableWidth = tabButtonContainer.scrollWidth - tabButtonContainer.clientWidth;
    footerArrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    footerArrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

footerArrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollWidth = tabButtonContainer.scrollLeft += icon.id === "left-ar" ? -100 : 100;
        footerHandleIcons(scrollWidth);
    });
});

const footerDragging = (e) => {
    if(!footerIsDragging) return;
    tabButtonContainer.classList.add("footerDragging");
    tabButtonContainer.scrollLeft -= e.movementX;
    footerHandleIcons(tabButtonContainer.scrollLeft)
}

const footerDragStop = () => {
    footerIsDragging = false;
    tabButtonContainer.classList.remove("footerDragging");
}

tabButtonContainer.addEventListener("mousedown", () => footerIsDragging = true);
tabButtonContainer.addEventListener("mousemove", footerDragging);
document.addEventListener("mouseup", footerDragStop);


