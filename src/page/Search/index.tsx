import { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import ProductDescriptionLoader from './Loaders/ProductDescriptionLoader';
import ProductInfoLoader from './Loaders/ProductInfoLoader';
import './styles.scss';
import { Perfil } from './types/Perfil';

const Search = () => {
    const [busca, setBusca] = useState('');
    const [userData, setUserData] = useState<Perfil>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();    
        setIsLoading(true);    
        fetch(`https://api.github.com/users/${busca}`)
            .then(response => response.json())        
            .then(userResponse => setUserData(userResponse))
            .finally(() => {
                setIsLoading(false);
            });            
    }
    
    
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {        
        setBusca(event.currentTarget.value);        
    }

    return (
        <div className="search-container">
            <div className="search-content">
                <div className="row">
                    <div className="card-search">
                        <h1 className="text-title">
                            Encontre um perfil Github
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                placeholder="Usuário Github" 
                                className="form-control col-6"
                                value={busca}
                                onChange={handleChange} />
                            
                            <Button text="Encontrar" />                                                    
                        </form>
                    </div>
                </div>
                {isLoading ?
                    <ProductInfoLoader />                 
                : (  
                                 
                <div style={{display: (userData ? 'block' : 'none')}}> 
                <div className="row">   
                    <div className="card-search-result">

                        <div className="resultado">
                                                     
                            <div className="search-result-img col-3">
                                <img src={userData?.avatar_url} alt="imagem github" height="280px" />
                            </div>
                            
                            <div className="search-result col-9">
                                <div className="row">
                                    <div className="card-result-info-base card-result-info-1">
                                        Repositórios públicos: {userData?.public_repos}
                                    </div>
                                    <div className="card-result-info-base card-result-info-1">
                                        Seguidores: {userData?.followers}
                                    </div>
                                    <div className="card-result-info-base card-result-info-1">
                                        Seguindo: {userData?.following}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card-result-info-base card-result-info-3 search-result-info">
                                        <div className="result-info-text">Informações</div>
                                        <div className="card-result-info-base card-result-info-2">
                                            <strong>Empresa: </strong> {userData?.company}
                                        </div>
                                        <div className="card-result-info-base card-result-info-2">
                                            <strong>Website/Blog: </strong> {userData?.blog}
                                        </div>
                                        <div className="card-result-info-base card-result-info-2">
                                            <strong>Localidade: </strong> {userData?.location}
                                        </div>
                                        <div className="card-result-info-base card-result-info-2">
                                            <strong>Membro desde: </strong>{userData?.created_at}
                                        </div>
                                    </div>                            
                                </div>
                            </div> 
                            
                        </div>
                       
                        <div className="ver-perfil row">
                            <a href={userData?.html_url} target="_new">
                                <Button text="Ver perfil" />
                            </a>                            
                        </div>
                    </div>                                 
                </div>
                </div>
                )}
            </div>        
        </div>
    );
}

export default Search;