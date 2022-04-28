import React from "react";

import Logodelphine from "../images/logodelphinerodriguez.png";
import Delphine from "../images/delphinesept21.jpg";
import Logodev from "../images/logodev.png";

const Header = () => {
    return(
        <div>
            <article class="header" id="portfolio">
                <section class="logo col-lg-2 col-sm-12 m-5">
                    <img src={Logodelphine} alt="logo delphine" />
                    <section class="delphine">
                        <img src={Delphine} alt="image de delphine" width="40%" />
                    </section>
                </section>
            
                <section>
                    <article class="row m-5">
                        <article class="dev col-lg-2 col-sm-2 py-5">
                            <img src={Logodev} alt="logo dev" width="100%" />
                        </article>
                        <br />

                        <h4>Région Lyonnaise et remote</h4>
                        <p>Motivée et dynamique, 😉 je prends plaisir à coder et à m'améliorer pour accroître mes
                            compétences dans ce monde merveilleux du numérique. <br />
                            Curieuse de la découverte et de l'utilisation d'autres langages,
                            react, vue.js.
                        </p>
                        
                    </article>
                </section>
            
            </article>
   
        </div>
    );
}

export default Header;