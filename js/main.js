import {createDescriptions} from './data.js';
import {insertThumbnailsMarkup} from './thumbnails.js';

const photosData = createDescriptions();

insertThumbnailsMarkup(photosData);
