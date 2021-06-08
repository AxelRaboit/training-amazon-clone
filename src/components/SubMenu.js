import React from 'react';
import './SubMenu.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SubMenu() {
    return (
        <div className="submenu">
        <div className="submenu__content__left">
            <div className="container__location">
                <LocationOnIcon className="location__icon"/>
                <div className="location__name">
                    <p>Livré en</p>
                    <p>France</p>
                </div>
            </div>
            <ul className="submenu__list">
                <li>Meilleurs Ventes</li>
                <li>Amazon Basics</li>
                <li>Dernières Nouveautés</li>
            </ul>
        </div>
            <div className="submenu__info">
                <img className="amazonprime__playerButton" src="/images/submenu/playerAmazonPrime.png" alt="amazon prime player button"/>
                <p className="playerAmazonPrime__text">Prime Video</p>
                <p className="submenu__info__separator">|</p>
                <p className="submenu__info__text">Essai gratuit de 30 jours</p>
            </div>
        </div>
    )
}

export default SubMenu
