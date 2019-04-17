const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navItems = document.querySelectorAll('header nav a');

// navItems.textContent = 'Services';
// navItems.style.color = 'green';


navItems.forEach( 
  function(navItem, i) { 
    navItem.textContent = siteContent['nav'][`nav-item-${i +1}`];
  });

  // cta

const h1 = document.querySelector('.cta-text h1');
h1.textContent = 'DOM IS AWESOME';

  const codeImg = document.getElementById('cta-img');
  codeImg.setAttribute('src', siteContent["cta"]["img-src"]);

  const button = document.querySelector('.cta-text button');
  button.textContent = 'Get Started';

// mainContent


  const topContentHeaders = document.querySelectorAll( '.top-content .text-content h4');
  const topContentContent = document.querySelectorAll('.top-content .text-content p');
//  const topContentHeader2 = document.querySelectorAll('.top-content .text-content h4');
//   const topContentText = document.querySelectorAll('.top-content .text-content p');
// const topContent = document.querySelectorAll('top-content');
  
  
topContentHeaders[0].textContent = siteContent['main-content'][`features-h4`];
topContentContent[0].textContent = siteContent['main-content'][`features-content`];
topContentHeaders[1].textContent = siteContent['main-content'][`about-h4`];
topContentContent[1].textContent = siteContent['main-content'][`about-content`];


// middle Image
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// bottom content
const bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4 ');
const bottomContentText = document.querySelectorAll('.bottom-content .text-content p');

bottomContentHeader[0].textContent = siteContent['main-content'][`services-h4`];
bottomContentHeader[1].textContent = siteContent['main-content'][`product-h4`];
bottomContentHeader[2].textContent = siteContent['main-content'][`vision-h4`];
bottomContentText[0].textContent = siteContent['main-content'][`services-content`];
bottomContentText[1].textContent = siteContent['main-content'][`product-content`];
bottomContentText[2].textContent = siteContent['main-content'][`vision-content`];


// Contact
const contactHeader = document.querySelectorAll('.contact h4');
const contactP = document.querySelectorAll('.contact p');
contactHeader[0].textContent = siteContent['contact'][`contact-h4`];
contactP[0].textContent = siteContent['contact'][`address`];
contactP[1].textContent = siteContent['contact'][`phone`];
contactP[2].textContent = siteContent['contact'][`email`];




// copyRight

const copyRight = document.querySelectorAll('footer p');
copyRight[0].textContent = siteContent['footer'][`copyright`];



  
