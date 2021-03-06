import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValues } from './StateProvider';
import { auth } from './Firebase';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Header() {

    const[{ basket, user }/* , dispatch */] = useStateValues();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/"> 
                <img 
                    className="header__logo" 
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'  
                    alt="header logo"
                />
            </Link>

            <div className="container__location">
                <LocationOnIcon className="location__icon"/>
                <div className="location__name">
                    <p>Livré en</p>
                    <p>France</p>
                </div>
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link className="login__link" to={!user && '/login' }>
                    <div onClick={handleAuthentication}  className="header__option">
                        <span className="header__optionLineOne">
                            {user ? `Bonjour ${user.email}` : 'Bonjour, Identifiez-vous'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Se deconnecter' : 'Se connecter' }
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Retours
                    </span>
                    <span className="header__optionLineTwo">
                        et Commandes
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Votre
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                
                <Link className="checkout__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
