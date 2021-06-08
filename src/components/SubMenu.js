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
                <p>Prime Day, c'est les 21 et 22 juin</p>
            </div>
        </div>
    )
}

export default SubMenu
