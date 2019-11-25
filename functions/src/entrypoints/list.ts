import { Request, Response } from 'express';
import { get } from 'superagent';
import { EXPLORER_URL } from '../config/metaverse.config';

const express = require('express');
const cors = require('cors');

const listApi = express();

listApi.use(cors({ origin: true }));

listApi.get('/api/list/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    try {
        const outputList = await get(`${EXPLORER_URL}v2/avatar/${name}/assets`)
        res.json(outputList.body.result)
    } catch (error){
        res.status(500).send('ERR_INTERNAL_ERROR')
    }
});

export {
    listApi
};