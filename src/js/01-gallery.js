import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({description,original,preview}) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" data-source = "${original}" />
   </a>
</li>`).join('')
}

gallery.insertAdjacentHTML('beforeend',createMarkup(galleryItems))
let galleryNew = new SimpleLightbox('.gallery a',{captionsData:"alt",captionsDelay:250});
