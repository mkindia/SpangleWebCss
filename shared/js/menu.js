 // for nev hide 
 document.addEventListener("mouseup", (evt) => {
  const flyoutElement = document.getElementById("expend");
  const nav1 = document.getElementById("nav");

  let targetElement = evt.target; // clicked element

  do {
      if (targetElement == flyoutElement) {
          // document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
          if (nav1.className == "nav") {
              nav1.classList.toggle("expendwith");
              // document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
          } else {
              nav1.classList.toggle("expendwith");
              //  document.body.style.backgroundColor = "white";
          }
         
          return;
      }
      if (targetElement == nav1) {

          //  nav1.className = "expendwith";
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

  nav1.className = "nav";
  document.body.style.backgroundColor = "white";

  // This is a click outside.
  //  document.getElementById("flyout-debug").textContent = "Clicked outside!";
});

//for slide show  
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
      myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//for Acorden
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}