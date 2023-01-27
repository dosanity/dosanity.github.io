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
  
    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/basic-photoshop.webp";
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

    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/standard-photoshop.webp";
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

    document.getElementById("PhotoshopImage").src="../assets/images/photos/shop/premium-photoshop.webp";
}

// ====================================================================================

function PaperPrint() {
    var price = document.getElementById("price-2");

    if (price.innerHTML === "$150.00") {
        price.innerHTML = "$50.00";
    } 
    else if (price.innerHTML === "$180.00") {
        price.innerHTML = "$50.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/paper-prints.webp";
    }

    function FramedPrint() {
    var price = document.getElementById("price-2");

    if (price.innerHTML === "$50.00") {
        price.innerHTML = "$150.00";
    } 
    else if (price.innerHTML === "$180.00") {
        price.innerHTML = "$150.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/framed-prints.webp";
}

function MetalPrint() {
    var price = document.getElementById("price-2");

    if (price.innerHTML === "$50.00") {
        price.innerHTML = "$180.00";
    } 
    else if (price.innerHTML === "$150.00") {
        price.innerHTML = "$180.00";
    } 

    document.getElementById("theImage").src="../assets/images/photos/shop/metal-prints.webp";
}

// ====================================================================================

function BasicWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");

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

    document.getElementById("WebImage").src="../assets/images/photos/shop/basic-web.webp";
}

function StandardWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");

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

    document.getElementById("WebImage").src="../assets/images/photos/shop/standard-web.webp";
}

function PremiumWeb() {
    var item1 = document.getElementById("shop-item-1");
    var item2 = document.getElementById("shop-item-2");
    var item3 = document.getElementById("shop-item-3");
    var price = document.getElementById("price-1");

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
        price.innerHTML = "$400.00";
    } 

    document.getElementById("WebImage").src="../assets/images/photos/shop/premium-web.webp";
}

// ====================================================================================

function BasicData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");

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
}

function StandardData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");

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
}

function PremiumData() {
    var item2 = document.getElementById("shop-item-8");
    var item3 = document.getElementById("shop-item-9");
    var price = document.getElementById("price-4");

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
}

