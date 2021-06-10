import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValues } from './StateProvider';


function Header() {

    const[{ basket }/* , dispatch */] = useStateValues();

    return (
        <div className="header">
            <Link to="/"> 
                <img 
                    className="header__logo" 
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'  
                    alt="header logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link className="login__link" to='/login'>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Bonjour, Identifiez-vous
                        </span>
                        <span className="header__optionLineTwo">
                            {/* Compte et listes */}
                            Se connecter
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
