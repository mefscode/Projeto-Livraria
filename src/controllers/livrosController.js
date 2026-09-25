import * as dbLivros from '../repository/livrosRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/livrosAll' , async (req,resp) =>{
        const livros = await dbLivros.LivrosAllBusca();

        resp.send(livros)
})

endpoints.get('/livros/:id' , async (req,resp) => {

        const id = req.params.id;

        const livro = await dbLivros.LivroBusca(id);

        resp.send(livro);
})

endpoints.post('/livros/criar' , async (req,resp) =>{
        let livro = req.body;

        let id = await dbLivros.LivroCriar(livro);

        resp.send({
                id
        })
})

endpoints.put('/livros/mudar/:id' , async (req,resp) => {
        let id_livro = req.params.id;
        let livros = req.body;

        let qtd = await dbLivros.LivroEditar(id_livro , livros);
        resp.send({qtd})

})

endpoints.delete('/livros/excluir/:id', async (req,resp) => {
        let id = req.params.id;

        let qtd = await dbLivros.LivroDeletar(id)
        resp.send({qtd})
})


export default endpoints;