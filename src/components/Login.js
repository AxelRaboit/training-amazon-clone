import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    };

    const register = e => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link className="login__link" to="/">
                <img className="login__logo" src="/images/logo/amazonLogo.png" alt="amazon logo" />
            </Link>

            <div className="login__container">
                <h1>Se connecter</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Mot de passe</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login__signInButton">S'identifier
                    </button>
                </form>


                <p>
                    En vous inscrivant, vous acceptez les conditions d'utilisation 
                    & de vente d'AMAZON CLONE. Veuillez consulter notre avis de 
                    confidentialité, notre avis sur les cookies et nos annonces 
                    basées sur les centres d'intérêt.
                </p>

                <button onClick={register} className="login__registerButton">
                    Créer votre compte Amazon
                </button>

            </div>
        </div>
    )
}

export default Login
