import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createMarkUp(galleryItems) {
  return galleryItems
    .map((item) => {
      return `
      <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
     `;
    })
    .join("");
}

const imgGalleryEl = document.querySelector(".gallery");
const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;
imgGalleryEl.addEventListener("click", onClickImg);

let instance = "";
function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  document.addEventListener("keydown", onModalCloseToEscape);
}
function onModalCloseToEscape(evt) {
  if (evt.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onModalCloseToEscape);
  }
}

