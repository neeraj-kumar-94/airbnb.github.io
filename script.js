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

var splide = new Splide( '#splide_c1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c2',{
  pagination: false,
});
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

var splide = new Splide( '#splide_c8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_c23',{
  pagination: false,
});
splide.mount();


// =======================
// D Cards slider 
// =======================

var splide = new Splide( '#splide_d1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_d23',{
  pagination: false,
});
splide.mount();


// =======================
// E Cards slider 
// =======================

var splide = new Splide( '#splide_e1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_e23',{
  pagination: false,
});
splide.mount();

// =======================
// F Cards slider 
// =======================

var splide = new Splide( '#splide_f1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_f23',{
  pagination: false,
});
splide.mount();


// =======================
// G Cards slider 
// =======================

var splide = new Splide( '#splide_g1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_g23',{
  pagination: false,
});
splide.mount();


// =======================
// H Cards slider 
// =======================

var splide = new Splide( '#splide_h1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_h23',{
  pagination: false,
});
splide.mount();


// =======================
// I Cards slider 
// =======================

var splide = new Splide( '#splide_i1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_i23',{
  pagination: false,
});
splide.mount();


// =======================
// J Cards slider 
// =======================

var splide = new Splide( '#splide_j1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_j23',{
  pagination: false,
});
splide.mount();


// =======================
// K Cards slider 
// =======================

var splide = new Splide( '#splide_k1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_k23',{
  pagination: false,
});
splide.mount();


// =======================
// L Cards slider 
// =======================

var splide = new Splide( '#splide_l1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_l23',{
  pagination: false,
});
splide.mount();


// =======================
// M Cards slider 
// =======================

var splide = new Splide( '#splide_m1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_m23',{
  pagination: false,
});
splide.mount();

// =======================
// N Cards slider 
// =======================

var splide = new Splide( '#splide_n1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_n23',{
  pagination: false,
});
splide.mount();

// =======================
// O Cards slider 
// =======================

var splide = new Splide( '#splide_o1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_o23',{
  pagination: false,
});
splide.mount();


// =======================
// P Cards slider 
// =======================

var splide = new Splide( '#splide_p1',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p2',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p3',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p4',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p5',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p6',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p7',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p8',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p9',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p10',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p11',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p12',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p13',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p14',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p15',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p16',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p17',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p18',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p19',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p20',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p21',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p22',{
  pagination: false,
});
splide.mount();

var splide = new Splide( '#splide_p23',{
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


// =======================
// scrool top button   
// =======================

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
      toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
})

//bottom login signup button
// =========================

let loginBottomBtn = document.querySelector("#b-l-btn");
let wishlistLoginBtn = document.querySelector("#wis-l-btn");

loginBottomBtn.onclick = function (){
  loginSignHideSec.style.display = "block";
}

wishlistLoginBtn.onclick = function (){
  loginSignHideSec.style.display = "block";
}


// scroll hide

const LoginBtmSec = document.querySelector(".b-lo-sec");

window.addEventListener("scroll", () => {
  if(window.pageYOffset < 100){
      LoginBtmSec.classList.add("active");
  }else{
    LoginBtmSec.classList.remove("active");
  }
})

