import React from "react";

import Figma from '../images/figma.png';

const Main = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="mySidenav">

            </nav>

            <section class="container-fluid">
                <div class="row w-100 p-3 d-flex justify-content-center">
                    <h3 class="text-center pt-5 mb-5 pe-5 me-5" id="realisationcompetences">Mes compétences</h3>
                        <div class="row flex-wrap text-center">
                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Maquettage</h2>
                                <p>Figma</p>
                                <img src={Figma} alt="figma" />
                            </article>
                        </div>

                </div>


            </section>


                
        </div>
    );
}

export default Main;