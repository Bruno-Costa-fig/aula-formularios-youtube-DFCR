function FormNaoControlado() {

    function handleSubmit(evento){
        evento.preventDefault()
        
        const nome = evento.target.nome.value
        const email = evento.target.email.value
        const senha = evento.target.senha.value

        console.log({nome: nome, email: email, senha: senha})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormNaoControlado;