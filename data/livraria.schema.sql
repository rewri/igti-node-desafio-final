CREATE TABLE public.autores (
    autor_id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL
);

CREATE TABLE public.clientes (
    cliente_id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    telefone TEXT NOT NULL,
    endereco TEXT NOT NULL
);

CREATE TABLE public.livros (
    livro_id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    valor NUMERIC NOT NULL,
    estoque INTEGER NOT NULL,
    autor_id INTEGER NOT NULL,
    CONSTRAINT fk_livros FOREIGN KEY(livro_id) REFERENCES livros(livro_id)
);

CREATE TABLE public.vendas (
    venda_id SERIAL PRIMARY KEY,
    valor NUMERIC NOT NULL,
    data date NOT NULL,
    livro_id INTEGER NOT NULL,
    cliente_id INTEGER NOT NULL,
    CONSTRAINT fk_livros FOREIGN KEY(livro_id) REFERENCES livros(livro_id),
    CONSTRAINT fk_clientes FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id)
);