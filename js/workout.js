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
              <div class="navbar-brand"><h3><b>Anthony Do</b></h3></div>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                      <a href="../"><b>Home</b></a>
                      <a href="../portfolio"><b>Portfolio</b></a>
                      <a href="../gallery"><b>Gallery</b></a>
                      <a href="../about"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf"><b>Resume</b></a>
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
