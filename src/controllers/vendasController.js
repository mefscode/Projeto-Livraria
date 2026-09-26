import * as dbVendas from '../repository/vendasRepository.js';
import { Router } from "express";

const endpoints = Router();

endpoints.post('/vendas/criar', async (req, resp) => {
    const id = req.body
    
    const venda = await dbVendas.VendaCriar(id);
        resp.send({ id });

});



export default endpoints;