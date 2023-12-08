// top icon slide 
var splide = new Splide(".splide", {
  perPage: 13,
  rewind: false,
  loop: false,
  pagination: false,
  drag: true,
  snap: true,
  breakpoints: {
    1700: {
      perPage: 10,
    },
    1500: {
      perPage: 8,
    },
    1200: {
      perPage: 4,
    },
  },
});

splide.mount();


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