import { useForm } from "react-hook-form";

function ReactHookForm() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    function enviarDados(dados){
        console.log(dados)
    }

    return (
        <form onSubmit={handleSubmit(enviarDados)}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" {...register('nome')} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" {...register('email')} />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" {...register('senha')} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default ReactHookForm;