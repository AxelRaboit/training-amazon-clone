import React from 'react';
import './Home.css';
import ImgSlider from './ImgSlider';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <ImgSlider />

            <div  className="home__row">
                <Product 
                    id="38492049"
                    title="Nintendo Switch avec paire de Joy-Con Rouge Néon et Bleu Néon" 
                    price={249.95}
                    image="/images/homeProduct/product-home-1.jpg"
                    rating={4}
                />
                <Product
                    id="39452249"
                    title="2021 Apple iPad Pro (11 Pouces, Wi-FI, 128 Go) - Gris sidéral (3ᵉ génération)" 
                    price={899.00}
                    image="/images/homeProduct/product-home-4.jpg"
                    rating={4}
                />
            </div>

            <div  className="home__row">
                <Product
                    id="18395099"
                    title="2020 Apple MacBook Pro avec Apple M1 Chip (13 Pouces, 8 Go RAM, 256 Go SSD) - Gris sidéral" 
                    price={1304.99}
                    image="/images/homeProduct/product-home-3.jpg"
                    rating={5}
                />
                <Product
                    id="98335599"
                    title="Sony WH1000XM4| Casque Bluetooth à réduction de bruit sans fil, 30 heures d'autonomie, avec micro pour appels téléphoniques, optimisé pour Amazon Alexa et Google assistant, Noir" 
                    price={329.99}
                    image="/images/homeProduct/product-home-2.jpg"
                    rating={5}
                />
                <Product
                    id="18132099"
                    title="Moniteur Portable Écran USB C, IVV Moniteur Externe 15.6 pouces FHD1920X1080, IPS Ecran PC avec HDMI pour Ordinateur Portable, PC, Smartphones, MacBook Pro, Xbox, PS4, avec Étui de Protection (Schwarz)" 
                    price={189.99}
                    image="/images/homeProduct/product-home-5.jpg"
                    rating={1}
                />
            </div>
            
            <div  className="home__row">
                <Product
                    id="48395011"
                    title="Yum Asia Sakura Cuiseur à riz avec bol en céramique et logique floue avancée, (8 tasses, 1,5 litre), 6 fonctions de cuisson du riz, 6 fonctions multicuiseur, écran LED Motouch, 220-240V" 
                    price={134.90}
                    image="/images/homeProduct/product-home-6.jpg"
                    rating={4}
                />
                <Product
                    id="18395541"
                    title="Sony Alpha 7 III | Appareil Photo Numérique Hybride Plein Format ( 24,2 MP, AF en 0.02s, Suivi des Yeux, stabilisation interne 5 axes, 4K HLG, Batterie Haute Capacité) (ILCE7M3, A7M3)" 
                    price={2149.00}
                    image="/images/homeProduct/product-home-7.jpg"
                    rating={5}
                />
                <Product
                    id="98391029"
                    title="Nouveau Apple iPhone 12 Pro Max (256 Go) - Bleu Pacifique" 
                    price={1365.00}
                    image="/images/homeProduct/product-home-8.jpg"
                    rating={4}
                />
            </div>
            <div  className="home__row">
                <Product
                    id="12995321"
                    title="Logitech MX Keys Advanced Clavier sans Fil Rétroéclairé, Bluetooth, Saisie Tactile Réactive, Rétroéclairage, USB-C, Clavier QWERTY Anglais - Noir" 
                    price={99.43}
                    image="/images/homeProduct/product-home-9.jpg"
                    rating={5}
                />
                <Product
                    id="18191019"
                    title="2021 Apple iMac (24 Pouces, Puce Apple M1 avec CPU 8 cœurs et GPU 7 cœurs, Deux Ports, 8 Go RAM, 256 Go) - Bleu" 
                    price={1449.00}
                    image="/images/homeProduct/product-home-10.jpg"
                    rating={5}
                />
            </div>
            <div  className="home__row">
                <Product
                    id="23355099"
                    title="Focusrite Scarlett 2i2 3rd Gen Audio Interface" 
                    price={105.00}
                    image="/images/homeProduct/product-home-11.jpg"
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home;
