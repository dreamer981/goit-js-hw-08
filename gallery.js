const images = [
  {
    url: "images/1.png",
    alt: "Working",
    original: "images/Large-1.jpg", 
  },
  {
    url: "images/2.png",
    alt: "New Idea",
    original: "images/Large-2.jpg", 
  },
  {
    url: "images/3.png",
    alt: "Develop experience",
    original: "images/Large-3.jpg", 
  },
  {
    url: "images/4.png",
    alt: "Meeting",
    original: "images/Large-4.jpg", 
  },
  {
    url: "images/5.png",
    alt: "Rest time",
    original: "images/Large-5.jpg", 
  },
  {
    url: "images/6.png",
    alt: "Working space",
    original: "images/Large-6.jpg", 
  },
  {
    url: "images/7.png",
    alt: "Working space",
    original: "images/Large-7.jpg", 
  },
  {
    url: "images/8.png",
    alt: "Working space",
    original: "images/Large-8.jpg", 
  },
  {
    url: "images/9.png",
    alt: "Working space",
    original: "images/Large-9.jpg", 
  },
];

const gallery = document.querySelector(".gallery");


const galleryMarkup = images
  .map(
    (image) => `
      <li>
        <img
          class="gallery-image"
          src="${image.url}"
          alt="${image.alt}"
          data-source="${image.original}" />
      </li>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const isImage = event.target.classList.contains("gallery-image");
  if (!isImage) return;

  const originalImageUrl = event.target.dataset.source;


  const instance = basicLightbox.create(`
    <img src="${originalImageUrl}" alt="Large image" />
  `);
  instance.show();

 
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
