
function toggleOff() {
  
  let toggle = document.querySelector(".navbar-toggle");
  let navLinks = document.querySelector(".nav-link");


  if (toggle.style.display === "none") {
    navLinks.style.display = '"flex" !important';
  }

}
toggleOff ();
window.addEventListener('resize', function() {
  
  toggleOff ();
});

function toggleNavbar() {
  
  let navLinks = document.querySelector(".nav-link");
  
  
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    
  }
  
  else {
    navLinks.style.display = "block";
    
  }
 
}






// let screenWidth = window.innerWidth;
//   if(toggle.style.display === "block"){
//     navLinks.style.display = "flex";
//   }


// toggleOff ();
// function toggleOff (){
//   let toggle = document.querySelector(".navbar-toggle");
//   if(toggle.style.display === "block"){
//     navLinks.style.display = "flex";
//   }

// }