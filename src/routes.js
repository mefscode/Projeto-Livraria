import clientes from './controllers/clientesController.js';
import livros from './controllers/livrosController.js';
import vendas from './controllers/vendasController.js';
import vendasList from './controllers/vendasListController.js';

export default function AddRoutes(api){
    api.use(clientes);
    api.use(livros);
    api.use(vendas);
    api.use(vendasList);
}