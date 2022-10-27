//Last Updated Date 
document.getElementById("last-modified").innerHTML = `<span class="highlight">Last Updated: ${document.lastModified}</span>`;

//Current Year Date
document.getElementById("current-year").innerHTML = new Date().getFullYear();

// select all data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//----------------------------------------------------------------------------
//Progressive Loading Images

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
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }