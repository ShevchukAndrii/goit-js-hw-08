// Add imports above this line
import { galleryItems } from './gallery-items';
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

ulEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const originalSize = e.target.dataset.source;
    console.log(originalSize);
    const instance = basicLightbox.create(`
    <img width= "700" src=${originalSize}>
`)
    instance.show();
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
        instance.close();
    }
})
})

console.log(galleryItems);
