import './upload.js';
import createThumbnailsFragment from './post-thumbnail.js';
import generatePosts from './post-generator.js';


// Миниатюры публикаций.

const posts = generatePosts().sort(() => Math.random() - .5);
const thumbnailsContainerElement = document.querySelector('.pictures');

thumbnailsContainerElement.append(createThumbnailsFragment(posts));
