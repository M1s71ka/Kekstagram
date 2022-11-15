import {createDescriptions} from './data.js';
import {initThumbnails} from './thumbnails.js';

const photosData = createDescriptions();

initThumbnails(photosData);
