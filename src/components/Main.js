import React from "react";

import Figma from '../images/figma.png';
import Vscode from '../images/vscode.png';
import WebStorm from '../images/webStorm.png';
import Mysql from '../images/mySql.png';
import Mathsjs from '../images/mathsjs.png';
import Iconefleche from '../images/iconefleche.png';
import Compteurreact from '../images/compteurreact.png';
import Argophp from '../images/argophp.jpg';
import Stickers from '../images/stikers.jpg';
import Github from '../images/github.png';

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

                    <div class="container-fluid row  d-flex justify-content-center">

                        <article class="article col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100">
                                <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                    <img src={Argophp} alt="Argonautes en php" />
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                        
                                    </section>
                                    <button class="bcompetences">Php et PhpMyAdmin</button>
                                </div>
                                    <h5>Ici argo php bientôt</h5>
                            </div>
                        </article>

                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100">
                                <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                    <img src={Stickers} alt="Stickers en php" />
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                    </section>
                                    <button class="bcompetences">Php et PhpMyAdmin</button>
                                </div>

                                <div className="github">
                                    <a href={"https://github.com/delphine38/stickersphp"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                                    <h1>Stickers php bientot</h1>
                            </div>       
                        </article>

                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100">
                                <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                    <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Mathsjs} alt="revision de maths" /></a>
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                        <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                        
                                        {/* il y aura image fleche et lien */}
                                    </section>
                                        <button class="bcompetences">html</button>
                                        <button class="bcompetences">Javascript</button>
                                        <button class="bcompetences">Lien du github</button>
                                </div>
                                <div className="github">
                                    <a href={"https://github.com/delphine38/testdecalculjavascript"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                                <h5 class="text-left">Application pour réviser ses Maths</h5>
                            </div>
                        </article>

                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100">
                            <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                <a href={"https://delphine38.github.io/compteurreact"} target="_blank"><img src={Compteurreact} alt="compteur en react" />
                                </a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                    <a href={"https://delphine38.github.io/compteurreact/"} target="_blank"><img src={Iconefleche}
                                        alt="compteur en react" />
                                    </a>
                                </section>
                            
                            </div>
                            <div class="text-center mt-2">
                                <button class="bcompetences">react</button>
                            </div>
                            <h5 class="text-left">Application en react pour ajouter ou enlever</h5>
                            </div>
                        </article>



                    </div>

                </div>

            </section>

            <div class="contact pt-5">
                <div id="contact">
                    <a class="text-white" href={"https://www.linkedin.com/in/delphine-rodriguez/"} target="_blank">
                        <h4 class="text-center pt-5 mb-5">Contactez-moi : Via Linkedin 🙂 </h4>
                    </a>

                    <p class="text-center">Ou par mail : delphine38@live.fr</p>
                </div>
            </div>
            <div class="github pb-5 text-center">
                <a href={"https://github.com/delphine38"} target="_blank">
                    <p>Bienvenue sur Mon lien GitHub</p>
                </a>

            </div>
        </div>
    );
}

export default Main;