import React from 'react'
import './SubMenu.css';

function SubMenu() {
    return (
        <div className="submenu">
            <ul className="submenu__list">
                <li>Meilleurs Ventes</li>
                <li>Amazon Basics</li>
                <li>Dernières Nouveautés</li>
            </ul>
            <div className="submenu__info">
                <p>Prime Day, c'est les 21 et 22 juin</p>
            </div>
        </div>
    )
}

export default SubMenu
