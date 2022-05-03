import React from "react";

import Logo from '../logo.svg';

import Logodelphine from "../images/logodelphinerodriguez.png";
import Delphine from "../images/delphinemai22.jpg";
// import Delphine from "../images/delphinesept21.jpg";
import Logodev from "../images/logodev.png";

const Header = () => {
    return(
        <div>
            <article class="header" id="portfolio">
                <section class="row">
                    <section class="logo col-lg-3 col-sm-12 m-5">
                        <img src={Logodelphine} alt="logo delphine" />
                        <section class="delphine">
                            <img src={Delphine} alt="image de delphine" width="40%" />
                        </section>
                    </section>

                    <section class="dev col-lg-3 col-sm-2 py-5">
                        <img src={Logodev} alt="logo dev" width="100%" />
                        <h4>Région Lyonnaise et remote</h4>
                        <p>Motivée et dynamique, 😉 je prends plaisir à coder et à m'améliorer pour accroître mes
                            compétences dans ce monde merveilleux du numérique. <br />
                            Curieuse de la découverte et de l'utilisation des langages :
                            React.js, ReactNative, Vue.js.</p>
                    </section>


                        <section class="col-lg-5 py-5">
                            <section className="App-header">
                            <img src={Logo} className="App-logo" alt="logo" />
                        </section>
                    </section>    
                </section>
            </article>
        </div>
    );
}

export default Header;