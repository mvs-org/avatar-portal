import { Response } from 'express';

const express = require('express');
const cors = require('cors');


import multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

const uploadApi = express();

uploadApi.use(cors({origin: '*'}));

uploadApi.post('/api/mst/:symbol', upload.any(), (req: any, res: Response) => {
    // try {
        const symbol = req.params.symbol;

        console.log(req.file);
        console.log(req.files);
        res.json({
            symbol,
            file: req.file,
            files: req.files
        })
        // console.log('bar')
    // } catch (error) {
    //     console.error(error)
    //     res.status(200).send('ERR_INTERNAL_ERROR')
    // }
});

export {
    uploadApi
};