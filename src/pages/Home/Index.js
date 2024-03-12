import './style.css';
import { Link } from 'react-router-dom';
const Home = () => {



    return(
        
        <main className="home">
            <img src="https://stories.freepiklabs.com/storage/36930/business-decisions-bro-5328.png" alt="Logo" />
            <div>
                <h1>Meu Titulo</h1>
                <p>asdnaskdhaskudghaskudbhaskdhbasukdbhakudasudbhasukdhaukdas
                    djasljdhnadnasdsadhnsadhassdjaskdasdadhad
                </p>
                <button><Link to={'/Services'}><a href="">Acessar Serviços</a></Link></button>
            </div>
        </main>
    )
}
export default Home;