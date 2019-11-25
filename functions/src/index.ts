import * as functions from 'firebase-functions';
import { listApi } from './entrypoints/list';
import { uploadApi } from './entrypoints/upload';
import { showApi } from './entrypoints/show';

export const list = functions.https.onRequest(listApi)
export const show = functions.https.onRequest(showApi)
export const upload = functions.https.onRequest(uploadApi)
