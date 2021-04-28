import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6 home-text">
                <h1 className="text-title">
                    Desafio do Capítulo 3, <br />Bootcamp DevSuperior
                </h1>
                <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /> <br/>
                Favor observar as instruções passadas no capítulo sobre a <br/> elaboração deste projeto. <br/><br/>
                Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: antforfigma@gmail.com
                </p>
                <Link to="/search">
                    <Button text="Começar" />
                </Link>                
            </div>
        </div>                
    </div>
);

export default Home;