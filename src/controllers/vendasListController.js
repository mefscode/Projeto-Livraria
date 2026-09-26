import * as dbVendasList from '../repository/vendasListRepository.js';
import { Router } from "express";

const endpoints = Router();

endpoints.get('/vendas', async (req, resp) => {
    const vendas = await dbVendasList.VendasListar();
    resp.send(vendas);
});

export default endpoints;