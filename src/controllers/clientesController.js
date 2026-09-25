import * as dbClientes   from '../repository/clientesRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/clientes/:id' , async (req,resp) => {

        const id = req.params.id;

        const cliente = await dbClientes.ClienteBusca(id);

        resp.send(cliente);
})

endpoints.post('/clientes/criar' , async (req,resp) =>{
        let cliente = req.body;

        let id = await dbClientes.ClienteCriar(cliente);

        resp.send({
                id
        })
})

endpoints.put('/clientes/mudar/:id' , async (req,resp) => {
        let id_cliente = req.params.id;
        let clientes = req.body;

        let qtd = await dbClientes.ClienteEditar(clientes,id_cliente);
        resp.send({qtd})

})

endpoints.delete('/clientes/excluir/:id', async (req,resp) => {
        let id = req.params.id;

        let qtd = await dbClientes.ClienteDeletar(id)
        resp.send({qtd})
})


export default endpoints;