import { Request, Response } from 'express';
import { storage, initializeApp, } from 'firebase-admin';
import { createReadStream } from 'fs';
import { ok } from 'assert';
initializeApp()
const iconBucket = storage().bucket()

const express = require('express');
const cors = require('cors');

const showApi = express();

showApi.use(cors({ origin: true }));

showApi.get('/mst/:filename', async (req: Request, res: Response) => {
    const filename = req.params.filename;
    try {
        ok(/^[A-Z0-9\.]+\.png$/.test(filename), 'ERR_INVALID_SYMBOL')
        const file = await iconBucket.file(`mst/${filename}`).get();
        res.set('Cache-Control', 'public, max-age=3600, s-maxage=600');
        file[0].createReadStream().pipe(res)
    } catch (error) {
        if (error.message === 'ERR_INVALID_SYMBOL') {
            res.status(500).send(error.message)
            return
        }
        switch (error.code) {
            case 404:
                res.set('Cache-Control', 'public, max-age=3600, s-maxage=600');
                createReadStream('icon/default.png').pipe(res)
                break;
            default:
                console.error(error)
                res.status(500).send('ERR_INTERNAL_ERROR')
        }
    }
});

export {
    showApi
};