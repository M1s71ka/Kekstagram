import {initThumbnails} from './thumbnails.js';
import {uploadPhoto} from './form.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';

getData((photos) => initThumbnails(photos), () => showAlert());

uploadPhoto();
