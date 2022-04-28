import React from "react";

import Figma from '../images/figma.png';
import Vscode from '../images/vscode.png';
import WebStorm from '../images/webStorm.png';
import Mysql from '../images/mySql.png';

const Main = () => {
    return(
        <div className="main">
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

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Front-end</h2>
                                <p>HTML, CSS</p>
                                <p>JAVASCRIPT</p>
                                <p>BOOTSTRAP</p>
                                <p>ANGULAR</p>
                                <p>REACT.js</p>
                                <img src={Vscode} alt="vscode" />
                                <img src={WebStorm} alt="webStorm" />
                            </article>

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Back-end</h2>
                                <p>PHP</p>
                                <p>SYMFONY</p>
                                <img src={Vscode} alt="vscode" />
                                <img src={WebStorm} alt="webStorm" />
                            </article>

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Base de Données</h2>
                                <p>MySql</p>
                                <img src={Mysql} alt="mySql" />
                            </article>
                        </div>
                </div>

                <div class="realisation row">
                    <div class="row w-100 p-3 d-flex justify-content-center">
                        <h3 class="text-center pt-5 mb-5 pe-5 me-5" id="realisationcompetences">Mes réalisations</h3>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Main;