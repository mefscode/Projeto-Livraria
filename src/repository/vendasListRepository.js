import { con } from "./connection.js";

export async function VendasListar() {
    const command = `
        SELECT
            c.nome AS cliente,
            l.nome AS livro,
            v.preco,
            v.data_venda
        FROM venda v
        JOIN clientes c ON c.id_cliente = v.id_cliente
        JOIN livros l ON l.id_livro = v.id_livro
        ORDER BY v.data_venda DESC
    `;

    const [result] = await con.query(command);
    return result;
}