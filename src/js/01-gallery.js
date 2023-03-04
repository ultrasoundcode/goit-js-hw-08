// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMurkUp = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkUp);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
								<a class='gallery__link'  href="${original}">
									<img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}">
									</img>
								</a>
							</div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
