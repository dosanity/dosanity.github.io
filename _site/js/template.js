class Header1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <button onclick="topFunction()" id="myBtn" title="Back to top">▲</button>

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
                        <a class="active" href="../portfolio"><b>Portfolio</b></a>
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
  
customElements.define('portfolio-nav', Header1);

class Header2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <button onclick="topFunction()" id="myBtn" title="Back to top">▲</button>

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
                      <a class="active" href="../gallery"><b>Gallery</b></a>
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

customElements.define('gallery-nav', Header2);

class Header3 extends HTMLElement {
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
                      <a class="active" href="../about.html"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf"><b>Resume</b></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('about-nav', Header3);

class Header4 extends HTMLElement {
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
                      <a class="active" href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf"><b>Resume</b></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('contact-nav', Header4);

class Header5 extends HTMLElement {
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
                      <a class="active" href="../"><b>Home</b></a>
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

customElements.define('home-nav', Header5);

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="../css/styles.css" rel="stylesheet">

        <footer>
            <div class="footer-margin"></div>
            
            <div class="mobile-center">
              <a href="https://www.instagram.com/dosanity/?hl=en"><img class="contacts-btn" src="../assets/images/icons/insta.png"></a>
              <a href="mailto:anthonydo888@gmail.com"><img class="contacts-btn" src="../assets/images/icons/email.png"></a>
              <a href="https://www.linkedin.com/in/dosanity/"><img class="contacts-btn" src="../assets/images/icons/linkedin.png"></a>
              <a href="https://github.com/dosanity"><img class="contacts-btn" src="../assets/images/icons/github.png"></a>
            </div>

            <div class="footer-bottom">
                <p class='m-0 text-center text-white' id='copyright'>&copy; ` + new Date().getFullYear() + ` ANTHONY DO, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);

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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});

function toggleNav(){
  navSize = document.getElementById("mySidenav").style.width;
  if (navSize === "350px") {
    return closeNav();
  }
  else {
    return openNav();
    
  }
}
/* Set the width of the side navigation to 350px */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

