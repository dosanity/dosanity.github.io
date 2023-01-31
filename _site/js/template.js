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

        <div id="mySideContacts" class="SideContacts hidden">
            <a href="https://www.linkedin.com/in/dosanity/" id="linkedin">
                <div>Linkedin</div>
                <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 18.5">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="white"></path>
                </svg>
            </a>
            <a href="https://github.com/dosanity" id="github">
                <div>Github</div>
                <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 18.5">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="white"></path>
                </svg>
            </a>
            <a href="mailto:anthonydo888@gmail.com" id="email">
                <div>Email</div>
                <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" stroke-width:"0" viewBox="0 3 30 32">
                    <clipPath><path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " fill="white"></path></clipPath><g><path fill="white" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 "></path></g>
                </svg>
            </a>
            <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer" id="resume">
                <div>Resume</div>
                <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 19">
                <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" fill="white"></path> <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z" fill="white"></path>
                </svg>
            </a>
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
                        <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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

      <div id="mySideContacts" class="SideContacts hidden">
          <a href="https://www.linkedin.com/in/dosanity/" id="linkedin">
              <div>Linkedin</div>
              <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 18.5">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="white"></path>
              </svg>
          </a>
          <a href="https://github.com/dosanity" id="github">
              <div>Github</div>
              <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 18.5">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="white"></path>
              </svg>
          </a>
          <a href="mailto:anthonydo888@gmail.com" id="email">
              <div>Email</div>
              <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" stroke-width:"0" viewBox="0 3 30 32">
                  <clipPath><path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " fill="white"></path></clipPath><g><path fill="white" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 "></path></g>
              </svg>
          </a>
          <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer" id="resume">
              <div>Resume</div>
              <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" stroke-width:"0" viewBox="0 0 18.5 19">
              <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" fill="white"></path> <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z" fill="white"></path>
              </svg>
          </a>
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
                      <!-- <a href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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
                      <a href="../assets/pdf/Anthony_ResumeATS.pdf" target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
                      <!-- <a class="active" href="../shop"><i class="fa fa-shopping-bag"></i></a> -->
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