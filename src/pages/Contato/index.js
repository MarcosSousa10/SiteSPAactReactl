import "./style.css";


const contato = () => {



    return(
        
        <div className="contato">
            <h1>Preencha O Formulario   </h1>
            <form>
                <input type="text" placeholder="Nome Completo"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="telefone"/>
                <input type="submit" />
            </form>
        </div>
    )
}
export default contato;