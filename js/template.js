// ====================================================================================

// Navigation Bar Template

// ====================================================================================

class Header1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <div class="progress-wrap" onclick="topFunction()">
            <svg class="progress-circle svg-content center" width="49px" height="59px" viewBox="-4 -2 108 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
        </div>

        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="../css/styles.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                        <a class="active" href="../portfolio"><b>Portfolio</b></a>
                        <a href="../gallery"><b>Gallery</b></a>
                        <a href="../about"><b>About</b></a>
                        <a href="../contact"><b>Contact</b></a>
                        <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                        <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
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

      <div class="progress-wrap" onclick="topFunction()">
          <svg class="progress-circle svg-content center" width="49px" height="59px" viewBox="-4 -2 108 102">
              <path d=""/>
          </svg>
      </div>

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a class="active" href="../gallery"><b>Gallery</b></a>
                      <a href="../about"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a class="active" href="../about.html"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a class="active" href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
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

      <div class="progress-wrap" onclick="topFunction()">
          <svg class="progress-circle svg-content center" width="49px" height="59px" viewBox="-4 -2 108 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
          </svg>
      </div>

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a class="active" href="../"><b>Home</b></a>
                      <a href="../portfolio"><b>Portfolio</b></a>
                      <a href="../gallery"><b>Gallery</b></a>
                      <a href="../about"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('home-nav', Header5);

class Header6 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('other-nav', Header6);

class Header7 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <div class="progress-wrap" onclick="topFunction()">
          <svg class="progress-circle svg-content center" width="49px" height="59px" viewBox="-4 -2 108 102">
              <path d=""/>
          </svg>
      </div>

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a class="active" href="../portfolio"><b>Portfolio</b></a>
                      <a href="../gallery"><b>Gallery</b></a>
                      <a href="../about"><b>About</b></a>
                      <a href="../contact"><b>Contact</b></a>
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a href="../shop"><i class="fa fa-shopping-bag"></i></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('portfolio-nav2', Header7);

class Header8 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/styles.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

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
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <a class="active" href="../shop"><i class="fa fa-shopping-bag"></i></a>
                  </ul>
              </div>
          </div>
      </nav>
      `;
  }
}

customElements.define('shop-nav', Header8);


// ====================================================================================

// Footer Template

// ====================================================================================


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

// ====================================================================================

// Back to Top Function

// ====================================================================================

// let mybutton = document.getElementById("myBtn");
// let downarrow = document.getElementById("down-arrow")

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//     // downarrow.style.display = "none";
//   } else {
//     mybutton.style.display = "none";
//     // downarrow.style.display = "block";

//   }
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Scroll back to top

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		// jQuery('.progress-wrap').on('click', function(event) {
		// 	event.preventDefault();
		// 	jQuery('html, body').animate({scrollTop: 0});
		// 	return false;
		// })
		
		
	});
	
})(jQuery); 

// ====================================================================================

// Table of Contents Function

// ====================================================================================

window.addEventListener('DOMContentLoaded', () => {

  let options = {
    rootMargin: '-70px'
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } 
      else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  }, options);

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});

// ====================================================================================

// Side Navigations Function

// ====================================================================================

function toggleNav(){
  navSize = document.getElementById("mySidenav").style.width;
  if (navSize === "100%" | navSize === "450px") {
    return closeNav();
  }
  else {
    return openNav();
    
  }
}
/* Set the width of the side navigation to 350px */
function openNav() {
  if( screen.width <= 599 ) {
    document.getElementById("mySidenav").style.width = "100%";
    $('body').addClass("fixed-position");
  }
  else {
    document.getElementById("mySidenav").style.width = "450px";
  }
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('body').removeClass("fixed-position");
}

function toggleNav2(){
  navSize = document.getElementById("mySidenav2").style.width;
  document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('mySidenav2');
    if (!container.contains(e.target)) {
        return closeNav2();
    }
  });
  if (navSize === "900px") {
    return closeNav2();
  }
  else {
    return openNav2();
    
  }
}
function openNav2() {
  document.getElementById("mySidenav2").style.width = "900px";
}
function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

function toggleNav3(){
  navSize = document.getElementById("mySidenav3").style.width;
  // if (navSize === "100%" | navSize === "450px") {
  //   return closeNav3();
  // }
  // else {
    return openNav3();
    
  // }
}
function openNav3() {
  if( screen.width <= 599 ) {
    document.getElementById("mySidenav3").style.width = "100%";
    $('body').addClass("fixed-position");
  }
  else {
    document.getElementById("mySidenav3").style.width = "450px";
  }
}
function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
  $('body').removeClass("fixed-position");
}

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
document.querySelector('.collapsible').click();

// ====================================================================================

// Search Bar

// ====================================================================================

function search() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// ====================================================================================

// Stop the scrolling feature when side navigation is open.

// ====================================================================================

if ($('#myMenu').is(':visible')) {
  $('body').addClass("fixed-position");
} else {
  $('body').removeClass("fixed-position");
}

// ====================================================================================

// Change Text (Services)

// ====================================================================================

function BasicService() {
  var item2 = document.getElementById("shop-item-5");
  var item3 = document.getElementById("shop-item-6");
  var price = document.getElementById("price-3");

  if (item2.innerHTML === "✓ Removing People") {
    item2.innerHTML = "<br>";
  }
  if (item3.innerHTML === "✓ Changing Backgrounds") {
    item3.innerHTML = "<br>";
  }

  if (price.innerHTML === "$150.00") {
    price.innerHTML = "$50.00";
  } 
  else if (price.innerHTML === "$100.00") {
    price.innerHTML = "$50.00";
  } 
}

function StandardService() {
  var item2 = document.getElementById("shop-item-5");
  var item3 = document.getElementById("shop-item-6");
  var price = document.getElementById("price-3");

  if (item2.innerHTML === "<br>") {
    item2.innerHTML = "✓ Removing People";
  }

  if (item3.innerHTML === "✓ Changing Backgrounds") {
    item3.innerHTML = "<br>";
  }

  if (price.innerHTML === "$150.00") {
    price.innerHTML = "$100.00";
  } 
  else if (price.innerHTML === "$50.00") {
    price.innerHTML = "$100.00";
  } 
}

function PremiumService() {
  var item2 = document.getElementById("shop-item-5");
  var item3 = document.getElementById("shop-item-6");
  var price = document.getElementById("price-3");

  if (item2.innerHTML === "<br>") {
    item2.innerHTML = "✓ Removing People";
  }

  if (item3.innerHTML === "<br>") {
    item3.innerHTML = "✓ Changing Backgrounds";
  }

  if (price.innerHTML === "$100.00") {
    price.innerHTML = "$150.00";
  } 
  else if (price.innerHTML === "$50.00") {
    price.innerHTML = "$150.00";
  } 
}

function NormalPrint() {
  var price = document.getElementById("price-2");

  if (price.innerHTML === "$150.00") {
    price.innerHTML = "$50.00";
  } 
  else if (price.innerHTML === "$180.00") {
    price.innerHTML = "$50.00";
  } 
}

function FramedPrint() {
  var price = document.getElementById("price-2");

  if (price.innerHTML === "$50.00") {
    price.innerHTML = "$150.00";
  } 
  else if (price.innerHTML === "$180.00") {
    price.innerHTML = "$150.00";
  } 
}

function MetalPrint() {
  var price = document.getElementById("price-2");

  if (price.innerHTML === "$50.00") {
    price.innerHTML = "$180.00";
  } 
  else if (price.innerHTML === "$150.00") {
    price.innerHTML = "$180.00";
  } 
}

function BasicWeb() {
  var item1 = document.getElementById("shop-item-1");
  var item2 = document.getElementById("shop-item-2");
  var item3 = document.getElementById("shop-item-3");
  var price = document.getElementById("price-1");

  if (item1.innerHTML === "✓ 3 Main Webpages") {
    item1.innerHTML = "✓ 1 Main Webpage";
  }
  else if (item1.innerHTML === "✓ 5 Main Webpages") {
    item1.innerHTML = "✓ 1 Main Webpage";
  }

  if (item2.innerHTML === "✓ Home, About, &amp; Contact") {
    item2.innerHTML = "<br>";
  }
  if (item3.innerHTML === "✓ 2 Additional Pages") {
    item3.innerHTML = "<br>";
  }

  if (price.innerHTML === "$800.00") {
    price.innerHTML = "$200.00";
  } 
  else if (price.innerHTML === "$500.00") {
    price.innerHTML = "$200.00";
  } 
}

function StandardWeb() {
  var item1 = document.getElementById("shop-item-1");
  var item2 = document.getElementById("shop-item-2");
  var item3 = document.getElementById("shop-item-3");
  var price = document.getElementById("price-1");

  if (item1.innerHTML === "✓ 1 Main Webpage") {
    item1.innerHTML = "✓ 3 Main Webpages";
  }
  else if (item1.innerHTML === "✓ 5 Main Webpages") {
    item1.innerHTML = "✓ 3 Main Webpages";
  }

  if (item2.innerHTML === "<br>") {
    item2.innerHTML = "✓ Home, About, &amp; Contact";
  }

  if (item3.innerHTML === "✓ 2 Additional Pages") {
    item3.innerHTML = "<br>";
  }

  if (price.innerHTML === "$800.00") {
    price.innerHTML = "$500.00";
  } 
  else if (price.innerHTML === "$200.00") {
    price.innerHTML = "$500.00";
  } 
}

function PremiumWeb() {
  var item1 = document.getElementById("shop-item-1");
  var item2 = document.getElementById("shop-item-2");
  var item3 = document.getElementById("shop-item-3");
  var price = document.getElementById("price-1");

  if (item1.innerHTML === "✓ 1 Main Webpage") {
    item1.innerHTML = "✓ 5 Main Webpages";
  }
  else if (item1.innerHTML === "✓ 3 Main Webpages") {
    item1.innerHTML = "✓ 5 Main Webpages";
  }

  if (item2.innerHTML === "<br>") {
    item2.innerHTML = "✓ Home, About, & Contact";
  }

  if (item3.innerHTML === "<br>") {
    item3.innerHTML = "✓ 2 Additional Pages";
  }

  if (price.innerHTML === "$500.00") {
    price.innerHTML = "$800.00";
  } 
  else if (price.innerHTML === "$200.00") {
    price.innerHTML = "$800.00";
  } 
}