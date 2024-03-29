// ====================================================================================

// Navigation Bar Template

// ====================================================================================

class Header8 extends HTMLElement {
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
                        <a href="../portfolio"><b>Portfolio</b></a>
                        <a href="../gallery"><b>Gallery</b></a>
                        <a href="../about"><b>About</b></a>
                        <a href="../contact"><b>Contact</b></a>
                        <!-- <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a> -->
                        <a class="active" href="../shop"><b>Shop</b></a>
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
              <a href="https://www.instagram.com/dosanity/?hl=en" target="_blank" rel="noopener noreferrer"><img class="contacts-btn" src="../assets/images/icons/insta.png"></a>
              <a href="mailto:anthonydo888@gmail.com"><img class="contacts-btn" src="../assets/images/icons/email.png"></a>
              <a href="https://www.linkedin.com/in/dosanity/" target="_blank" rel="noopener noreferrer"><img class="contacts-btn" src="../assets/images/icons/linkedin.png"></a>
              <a href="https://github.com/dosanity" target="_blank" rel="noopener noreferrer"><img class="contacts-btn" src="../assets/images/icons/github.png"></a>
            </div>

            <div class="footer-bottom">
                <p class='m-0 text-center text-white' id='copyright'>&copy; ` + new Date().getFullYear() + ` ANTHONY DO, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);

// ====================================================================================

// Filter Button

// ====================================================================================

$('#photoshop-editing button').click(function(){
    $('#photoshop-editing button').removeClass('current');
    $(this).addClass('current');
    // var selector = $(this).attr('filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
     return false;
});

$('#gallery-prints button').click(function(){
    $('#gallery-prints button').removeClass('current');
    $(this).addClass('current');
    // var selector = $(this).attr('filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
     return false;
});

$('#professional-website button').click(function(){
    $('#professional-website button').removeClass('current');
    $(this).addClass('current');
    // var selector = $(this).attr('filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
     return false;
});

$('#data-analysis button').click(function(){
    $('#data-analysis button').removeClass('current');
    $(this).addClass('current');
    // var selector = $(this).attr('filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
     return false;
});

// ====================================================================================

// Change Text (Services)

// ====================================================================================

function BasicService() {
    var item2 = document.getElementById("shop-item-5");
    var item3 = document.getElementById("shop-item-6");
    var price = document.getElementById("price-3");
    var price2 = document.getElementById("mobile-price-3");
  
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

    if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$50.00";
      } 
      else if (price2.innerHTML === "$100.00") {
        price2.innerHTML = "$50.00";
      } 
  
    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/basic-photoshop.webp";
  }
  
function StandardService() {
    var item2 = document.getElementById("shop-item-5");
    var item3 = document.getElementById("shop-item-6");
    var price = document.getElementById("price-3");
    var price2 = document.getElementById("mobile-price-3");

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

    if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$100.00";
    } 
    else if (price2.innerHTML === "$50.00") {
        price2.innerHTML = "$100.00";
    } 

    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/standard-photoshop.webp";
}

function PremiumService() {
    var item2 = document.getElementById("shop-item-5");
    var item3 = document.getElementById("shop-item-6");
    var price = document.getElementById("price-3");
    var price2 = document.getElementById("mobile-price-3");

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

    if (price2.innerHTML === "$100.00") {
        price2.innerHTML = "$150.00";
    } 
    else if (price2.innerHTML === "$50.00") {
        price2.innerHTML = "$150.00";
    } 

    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/premium-photoshop.webp";
}

// ====================================================================================

function PaperPrint() {
    var price = document.getElementById("price-2");
    var price2 = document.getElementById("mobile-price-2");

    if (price.innerHTML === "$150.00") {
        price.innerHTML = "$50.00";
    } 
    else if (price.innerHTML === "$180.00") {
        price.innerHTML = "$50.00";
    } 

    if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$50.00";
    } 
    else if (price2.innerHTML === "$180.00") {
        price2.innerHTML = "$50.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/paper-prints.webp";
    }

    function FramedPrint() {
    var price = document.getElementById("price-2");
    var price2 = document.getElementById("mobile-price-2");

    if (price.innerHTML === "$50.00") {
        price.innerHTML = "$150.00";
    } 
    else if (price.innerHTML === "$180.00") {
        price.innerHTML = "$150.00";
    } 

    if (price2.innerHTML === "$50.00") {
        price2.innerHTML = "$150.00";
    } 
    else if (price2.innerHTML === "$180.00") {
        price2.innerHTML = "$150.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/framed-prints.webp";
}

function MetalPrint() {
    var price = document.getElementById("price-2");
    var price2 = document.getElementById("mobile-price-2");

    if (price.innerHTML === "$50.00") {
        price.innerHTML = "$180.00";
    } 
    else if (price.innerHTML === "$150.00") {
        price.innerHTML = "$180.00";
    } 

    if (price2.innerHTML === "$50.00") {
        price2.innerHTML = "$180.00";
    } 
    else if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$180.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/metal-prints.webp";
}

// ====================================================================================

function BasicWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");
    var price2 = document.getElementById("mobile-price-1");

    if (item1.innerHTML === "✓ 3 Main Webpages") {
        item1.innerHTML = "✓ 1 Main Webpage";
    }
    else if (item1.innerHTML === "✓ 5 Total Webpages") {
        item1.innerHTML = "✓ 1 Main Webpage";
    }

    if (item2.innerHTML === "✓ Home, About, &amp; Contact") {
        item2.innerHTML = "<br>";
    }
    if (item3.innerHTML === "✓ 2 Additional Pages") {
        item3.innerHTML = "<br>";
    }

    if (price.innerHTML === "$600.00") {
        price.innerHTML = "$150.00";
    } 
    else if (price.innerHTML === "$400.00") {
        price.innerHTML = "$150.00";
    } 

    if (price2.innerHTML === "$600.00") {
        price2.innerHTML = "$150.00";
    } 
    else if (price2.innerHTML === "$400.00") {
        price2.innerHTML = "$150.00";
    } 

    document.getElementById("WebImage").src="../assets/images/photos/shop/basic-web.webp";
}

function StandardWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");
    var price2 = document.getElementById("mobile-price-1");

    if (item1.innerHTML === "✓ 1 Main Webpage") {
        item1.innerHTML = "✓ 3 Main Webpages";
    }
    else if (item1.innerHTML === "✓ 5 Total Webpages") {
        item1.innerHTML = "✓ 3 Main Webpages";
    }

    if (item2.innerHTML === "<br>") {
        item2.innerHTML = "✓ Home, About, &amp; Contact";
    }

    if (item3.innerHTML === "✓ 2 Additional Pages") {
        item3.innerHTML = "<br>";
    }

    if (price.innerHTML === "$600.00") {
        price.innerHTML = "$400.00";
    } 
    else if (price.innerHTML === "$150.00") {
        price.innerHTML = "$400.00";
    } 

    if (price2.innerHTML === "$600.00") {
        price2.innerHTML = "$400.00";
    } 
    else if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$400.00";
    } 

    document.getElementById("WebImage").src="../assets/images/photos/shop/standard-web.webp";
}

function PremiumWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");
    var price2 = document.getElementById("mobile-price-1");

    if (item1.innerHTML === "✓ 1 Main Webpage") {
        item1.innerHTML = "✓ 5 Total Webpages";
    }
    else if (item1.innerHTML === "✓ 3 Main Webpages") {
        item1.innerHTML = "✓ 5 Total Webpages";
    }

    if (item2.innerHTML === "<br>") {
        item2.innerHTML = "✓ Home, About, &amp; Contact";
    }

    if (item3.innerHTML === "<br>") {
        item3.innerHTML = "✓ 2 Additional Pages";
    }

    if (price.innerHTML === "$400.00") {
        price.innerHTML = "$600.00";
    } 
    else if (price.innerHTML === "$150.00") {
        price.innerHTML = "$600.00";
    } 

    if (price2.innerHTML === "$400.00") {
        price2.innerHTML = "$600.00";
    } 
    else if (price2.innerHTML === "$150.00") {
        price2.innerHTML = "$600.00";
    } 

    document.getElementById("WebImage").src="../assets/images/photos/shop/premium-web.webp";
}

// ====================================================================================

function BasicData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");
    var price2 = document.getElementById("mobile-price-4");

    if (item2.innerHTML === "✓ Webscraping &amp; API Integration") {
        item2.innerHTML = "<br>";
    }
    if (item3.innerHTML === "✓ Machine Learning Algorithms") {
        item3.innerHTML = "<br>";
    }

    if (price.innerHTML === "$200.00") {
        price.innerHTML = "$100.00";
    } 
    else if (price.innerHTML === "$300.00") {
        price.innerHTML = "$100.00";
    } 

    if (price2.innerHTML === "$200.00") {
        price2.innerHTML = "$100.00";
    } 
    else if (price2.innerHTML === "$300.00") {
        price2.innerHTML = "$100.00";
    } 
}

function StandardData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");
    var price2 = document.getElementById("mobile-price-4");

    if (item2.innerHTML === "<br>") {
        item2.innerHTML = "✓ Webscraping &amp; API Integration";
    }

    if (item3.innerHTML === "✓ Machine Learning Algorithms") {
        item3.innerHTML = "<br>";
    }

    if (price.innerHTML === "$100.00") {
        price.innerHTML = "$200.00";
    } 
    else if (price.innerHTML === "$300.00") {
        price.innerHTML = "$200.00";
    } 

    if (price2.innerHTML === "$100.00") {
        price2.innerHTML = "$200.00";
    } 
    else if (price2.innerHTML === "$300.00") {
        price2.innerHTML = "$200.00";
    } 
}

function PremiumData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");
    var price2 = document.getElementById("mobile-price-4");

    if (item2.innerHTML === "<br>") {
        item2.innerHTML = "✓ Webscraping &amp; API Integration";
    }

    if (item3.innerHTML === "<br>") {
        item3.innerHTML = "✓ Machine Learning Algorithms";
    }

    if (price.innerHTML === "$100.00") {
        price.innerHTML = "$300.00";
    } 
    else if (price.innerHTML === "$200.00") {
        price.innerHTML = "$300.00";
    } 

    if (price2.innerHTML === "$100.00") {
        price2.innerHTML = "$300.00";
    } 
    else if (price2.innerHTML === "$200.00") {
        price2.innerHTML = "$300.00";
    } 
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
// document.querySelector('.collapsible').click();
