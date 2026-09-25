import { con } from "./connection.js";

export async function LivrosAllBusca() {

    const command = `
        SELECT
            id_livro,
            nome,
            preco,
            genero
        FROM livros
    `;

    const[result] = await con.query(command, [])
    return result;
}

export async function LivroBusca(id) {

    const command = `
        SELECT
            id_livro,
            nome,
            preco,
            genero
        FROM livros
        WHERE id_livro = ?
    `;

    const [result] = await con.query(command, [id]);

    return result[0];
}

export async function LivroCriar(livros) {
    const command = `
    INSERT INTO livros (nome,preco,genero)
    values(?,?,?)
    `

    const [result] = await con.query(command, [
        livros.nome,
        livros.preco,
        livros.genero
    ]);

    return result.insertId
}

export async function LivroEditar(livros, id_livro) {
    const command = `
        UPDATE livros
        SET nome = ?,
            preco = ?,
            genero = ?
        WHERE id_livro = ?
    `;

    const [result] = await con.query(command, [
        livros.nome,
        livros.preco,
        livros.genero,
        id_livro
    ]);

    return result.affectedRows;
}

export async function LivroDeletar(id) {
    const command = `
    delete from livros where id_livro = ?
    `

    const [result] = await con.query(command, [id])
    return result.affectedRows;
}
