import { con } from "./connection.js";

export async function VendaCriar(venda) {
    const command = `
        INSERT INTO venda (id_cliente, id_livro, preco)
        SELECT ?, id_livro, preco
        FROM livros
        WHERE id_livro = ?
    `;

    const [result] = await con.query(command, [
        venda.id_cliente,
        venda.id_livro
    ]);

    if (result.affectedRows === 0) {
        throw new Error('Livro não encontrado');
    }

    return result.insertId;
}

export async function VendasBusca() {
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