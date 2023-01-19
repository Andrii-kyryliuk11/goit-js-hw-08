// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
};

function createGalleryMarkup(galleryItems) {
  const arrayOfMarkup = [];

  galleryItems.forEach(image => {
    arrayOfMarkup.push(
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
    );
  });

  refs.gallery.innerHTML = arrayOfMarkup.join('');
}

createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

