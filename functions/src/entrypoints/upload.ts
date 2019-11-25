import { Request, Response } from 'express';

const express = require('express');
const cors = require('cors');

const uploadApi = express();

uploadApi.use(cors({ origin: true }));

uploadApi.post('/api/mst/:symbol', async (req: Request, res: Response) => {
    const symbol = req.params.symbol;
    try {
        res.json({
            symbol
        })
    } catch (error){
        res.status(500).send('ERR_INTERNAL_ERROR')
    }
});

export {
    uploadApi
};