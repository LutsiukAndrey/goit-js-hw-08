// // Add imports above this line
// import { galleryItems } from './gallery-items';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// // Change code below this line

// console.log(galleryItems);
// const gallaryRef = document.querySelector('.gallery');
// const gallary = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>`;
//   })
//   .join('');
// gallaryRef.insertAdjacentHTML('beforeend', gallary);

// let galleryShow = new SimpleLightbox('.gallery a');
// galleryShow.on('show.simplelightbox', function () {});
