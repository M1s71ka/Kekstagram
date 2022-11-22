import {createDescriptions} from './data.js';
import {initThumbnails} from './thumbnails.js';
import {uploadPhoto} from './form.js';

const photosData = createDescriptions();

initThumbnails(photosData);

uploadPhoto();
