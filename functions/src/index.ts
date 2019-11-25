import * as functions from 'firebase-functions';
import { listApi } from './entrypoints/list';

export const list = functions.https.onRequest(listApi)
