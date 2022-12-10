class Header1 extends HTMLElement {
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
            
            <a href="https://www.instagram.com/dosanity/?hl=en"><img class="contacts-btn" src="assets/images/icons/insta.png"></a>
            <a href="mailto:anthonydo888@gmail.com"><img class="contacts-btn" src="assets/images/icons/email.png"></a>
            <a href="https://www.linkedin.com/in/dosanity/"><img class="contacts-btn" src="assets/images/icons/linkedin.png"></a>
            <a href="https://github.com/dosanity"><img class="contacts-btn" src="assets/images/icons/github.png"></a>

            <div class="footer-bottom">
                <p class='m-0 text-center text-white' id='copyright'>&copy; ` + new Date().getFullYear() + ` ANTHONY DO, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
