//Last Updated Date 
document.getElementById("last-modified").innerHTML = `<span class="highlight">Last Updated: ${document.lastModified}</span>`;

//Current Year Date
document.getElementById("current-year").innerHTML = new Date().getFullYear();


//----------------------------------------------------------------------------
//Progressive Loading Images


// select all data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

//loads correct image and removes the placeholder
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

//loop through each img and load it
imagesToLoad.forEach((img) => {
    loadImages(img);
  });

//intersection Observer = load images only when the user scrolls down

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }