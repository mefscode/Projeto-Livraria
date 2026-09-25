import { con } from "./connection.js";

export async function ClienteBusca(id) {

    const command = `
        SELECT
            id_cliente,
            nome,
            idade,
            cidade
        FROM clientes
        WHERE id_cliente = ?
    `;

    const [result] = await con.query(command, [id]);

    return result[0];
}

export async function ClienteCriar(clientes) {
    const command = `
    INSERT INTO clientes (nome,idade,cidade)
    values(?,?,?)
    `

    const [result] = await con.query(command, [
        clientes.nome,
        clientes.idade,
        clientes.cidade
    ]);

    return result.insertId
}

export async function ClienteEditar(clientes, id_cliente) {
    const command = `
        UPDATE clientes
        SET nome = ?,
            idade = ?,
            cidade = ?
        WHERE id_cliente = ?
    `;

    const [result] = await con.query(command, [
        clientes.nome,
        clientes.idade,
        clientes.cidade,
        id_cliente
    ]);

    return result.affectedRows;
}

export async function ClienteDeletar(id) {
    const command = `
    delete from clientes where id_cliente = ?
    `

    const [result] = await con.query(command, [id])
    return result.affectedRows;
}
