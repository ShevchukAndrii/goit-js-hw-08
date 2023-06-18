// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const createItem = ({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
};

const createItemForUl = galleryItems.map(createItem).join('');
const ulEl = document.querySelector(".gallery");
ulEl.insertAdjacentHTML('beforeend', createItemForUl);
ulEl.style.listStyle = 'none';
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250', 
})
