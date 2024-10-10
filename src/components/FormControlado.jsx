import { useState } from "react";

function FormControlado() {

    const [usuario, setUsuario] = useState({
        nome: "",
        email: "",
        senha: ""
    })

    function handleSubmit(e){
        e.preventDefault()

        console.log(usuario)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={usuario.nome} onChange={(e) => setUsuario({...usuario, nome: e.target.value})} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value})} />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" value={usuario.senha} onChange={(e) => setUsuario({...usuario, senha: e.target.value})} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormControlado;