// ====================================================================================

// Navigation Bar Template

// ====================================================================================

class Header6 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">

      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="navbar-brand">
                <a href="../">
                  <h3><b>Anthony Do</b></h3>
                </a>
              </div>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                      <a href="../"><b>Home</b></a>
                      <a href="../portfolio"><b>Portfolio</b></a>
                      <a href="../gallery"><b>Gallery</b></a>
                      <a href="../about"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <!-- <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a> -->
                      <!-- <a href="../shop"><b>Shop</b></a> -->
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('other-nav', Header6);


// ====================================================================================

// Footer Template

// ====================================================================================

class Footer2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">

      <footer>

          <div class="footer-bottom footer-position"> 
              <p class='m-0 text-center text-white' id='copyright'>&copy; ` + new Date().getFullYear() + ` ANTHONY DO, ALL RIGHTS RESERVED</p>
          </div>
      </footer>
    `;
  }
}

customElements.define('footer-component2', Footer2);

// ====================================================================================

// Collapsible

// ====================================================================================

var colls = document.getElementsByClassName("collapsible");
var dolls = document.getElementsByClassName("collapsible");

  function closeAll() {
      for(var dol of dolls) {
        dol.classList.remove("active");
        dol.nextElementSibling.style.maxHeight = null;
      }
  }

  for(var col of colls) {
    col.addEventListener("click", function() {

      var content = this.nextElementSibling;
      
      if (this.classList.contains("active")) {
        closeAll();        
        content.style.maxHeight = 0;
      } else {
        closeAll();
        this.classList.toggle("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }

  });
}
// document.querySelector('.collapsible').click();

// ====================================================================================

// Local Storage

// ====================================================================================

function clearStorage() {
  localStorage.clear();
}

var update = document.querySelector('#myUL');
var update2 = document.querySelector('#myUL2');
var update3 = document.querySelector('#myUL3');
var update4 = document.querySelector('#myUL4');
var update5 = document.querySelector('#myUL5');
var update6 = document.querySelector('#myUL6');
var update7 = document.querySelector('#myUL7');
var update8 = document.querySelector('#myUL8');
var update9 = document.querySelector('#myUL9');
var update10 = document.querySelector('#myUL10');
var update11 = document.querySelector('#myUL11');
var update12 = document.querySelector('#myUL12');
var update13 = document.querySelector('#myUL13');


function save() {
  var update = document.getElementById("myUL").innerHTML
  localStorage.setItem("save", update);
  var update2 = document.getElementById("myUL2").innerHTML
  localStorage.setItem("save2", update2);
  var update3 = document.getElementById("myUL3").innerHTML
  localStorage.setItem("save3", update3);
  var update4 = document.getElementById("myUL4").innerHTML
  localStorage.setItem("save4", update4);
  var update5 = document.getElementById("myUL5").innerHTML
  localStorage.setItem("save5", update5);
  var update6 = document.getElementById("myUL6").innerHTML
  localStorage.setItem("save6", update6);
  var update7 = document.getElementById("myUL7").innerHTML
  localStorage.setItem("save7", update7);
  var update8 = document.getElementById("myUL8").innerHTML
  localStorage.setItem("save8", update8);
  var update9 = document.getElementById("myUL9").innerHTML
  localStorage.setItem("save9", update9);
  var update10 = document.getElementById("myUL10").innerHTML
  localStorage.setItem("save10", update10);
  var update11 = document.getElementById("myUL11").innerHTML
  localStorage.setItem("save11", update11);
  var update12 = document.getElementById("myUL12").innerHTML
  localStorage.setItem("save12", update12);
  var update13 = document.getElementById("myUL13").innerHTML
  localStorage.setItem("save13", update13);
}

// Check for saved wishlist items
var saved = localStorage.getItem('save');
var saved2 = localStorage.getItem('save2');
var saved3 = localStorage.getItem('save3');
var saved4 = localStorage.getItem('save4');
var saved5 = localStorage.getItem('save5');
var saved6 = localStorage.getItem('save6');
var saved7 = localStorage.getItem('save7');
var saved8 = localStorage.getItem('save8');
var saved9 = localStorage.getItem('save9');
var saved10 = localStorage.getItem('save10');
var saved11 = localStorage.getItem('save11');
var saved12 = localStorage.getItem('save12');
var saved13 = localStorage.getItem('save13');

// If there are any saved items, update our list
if (saved) {
	update.innerHTML = saved;
}
if (saved2) {
	update2.innerHTML = saved2;
}
if (saved3) {
	update3.innerHTML = saved3;
}
if (saved4) {
	update4.innerHTML = saved4;
}
if (saved5) {
	update5.innerHTML = saved5;
}
if (saved6) {
	update6.innerHTML = saved6;
}
if (saved7) {
	update7.innerHTML = saved7;
}
if (saved8) {
	update8.innerHTML = saved8;
}
if (saved9) {
	update9.innerHTML = saved9;
}
if (saved10) {
	update10.innerHTML = saved10;
}
if (saved11) {
	update11.innerHTML = saved11;
}
if (saved12) {
	update12.innerHTML = saved12;
}
if (saved13) {
	update13.innerHTML = saved13;
}

