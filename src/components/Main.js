import React from "react";

import Figma from '../images/figma.png';
import Vscode from '../images/vscode.png';
import WebStorm from '../images/webStorm.png';
import Mathsjs from '../images/mathsjs.png';
import Iconefleche from '../images/iconefleche.png';
import Compteurreact from '../images/compteurreact.png';
import Argophp from '../images/argophp.jpg';
import Stickers from '../images/stikers.jpg';
import Github from '../images/github.png';
import PhpMyAdmin from '../images/phpMyAdmin.png';

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
                                <h4>Figma</h4>
                                <img src={Figma} alt="figma" />
                            </article>

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Front-end</h2>
                                <h4>HTML, CSS</h4>
                                <h4>REACT.js</h4>
                                <h4>JAVASCRIPT</h4>
                                <h4>BOOTSTRAP</h4>
                                <h4>ANGULAR</h4>                               
                                <img src={Vscode} alt="vscode" />
                                <img src={WebStorm} alt="webStorm" />
                            </article>

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Back-end</h2>
                                <h4>PHP</h4>
                                <h4>SYMFONY</h4>
                                <img src={Vscode} alt="vscode" />
                                <img src={WebStorm} alt="webStorm" />
                            </article>

                            <article class="competences col-sm-3 col-lg-3">
                                <h2>Base de Données</h2>
                                <h4>MySql</h4>
                                <img src={PhpMyAdmin} alt="mySql" width="100px" />
                            </article>
                        </div>
                </div>

                <div class="realisation row">
                    {/* titre mes realisations */}
                    <div class="row w-100 p-3 d-flex justify-content-center">
                        <h3 class="text-center pt-5 mb-5 pe-5 me-5" id="realisationcompetences">Mes réalisations</h3>
                    </div>

                    {/* mes realisations */}                   
                    <div class="container-fluid row  d-flex justify-content-center">
                        {/* argophp */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="justify-content-center p-3">
                                <div class="image row justify-content-center d-flex flex-wrap align-items-center mt-2">
                                  <a href={"http://delphinerodriguezdev.fr/argophp/"} target="_blank"><img src={Argophp} alt="Argonautes en php" /></a>
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                        <section class="fleche">
                                        <a href={"http://delphinerodriguezdev.fr/argophp/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                    </section>
                                    <span class="bcompetences">Php et PhpMyAdmin</span>
                                </div>
                                <div className="github">
                                    <a href={"https://github.com/delphine38/argophp"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                                    <h5>Application pour ajouter des noms à une liste</h5>
                            </div>
                        </article>

                        {/* stickersphp */}
                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center p-3">
                                <div class="image row justify-content-center d-flex flex-wrap align-items-center mt-2">
                                   <a href={"http://delphinerodriguezdev.fr/stickersphp/"} target="_blank"><img src={Stickers} alt="Stickers en php" /></a>
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                        <a href={"http://delphinerodriguezdev.fr/stickersphp/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                    <span class="bcompetences">Php et PhpMyAdmin</span>
                                </div>

                                <div className="github">
                                    <a href={"https://github.com/delphine38/stickersphp"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                                    <h5>Stickersphp est un site de Stickers et de Flockages. <br /> Vous pouvez voir un échantillon de ce que la personne peut faire sur vos -> tee-shirts, tasses ou autres et demander des informations</h5>
                            </div>       
                        </article>

                        {/* testdecalculjavascript */}
                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100 p-3">
                                <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                    <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Mathsjs} alt="revision de maths" /></a>
                                </div>
                                <div class="text-center mt-2">
                                    <section class="fleche">
                                        <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                        <span class="bcompetences">html</span>
                                        <span class="bcompetences">Javascript</span>
                                </div>
                                <div className="github">
                                    <a href={"https://github.com/delphine38/testdecalculjavascript"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                                <h5 class="text-left">Application pour réviser ses Maths</h5>
                            </div>
                        </article>

                        {/* compteurreact */}
                        <article class="col-sm-3 col-lg-3">
                            <div class="justify-content-center h-100 p-3">
                            <div class="image row justify-content-center  h-80 d-flex flex-wrap align-items-center mt-2">
                                <a href={"https://compteurreact.netlify.app/"} target="_blank"><img src={Compteurreact} alt="compteur en react" />
                                </a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                    <a href={"https://compteurreact.netlify.app/"} target="_blank"><img src={Iconefleche}
                                        alt="compteur en react" />
                                    </a>
                                </section>
                            </div>

                            <div class="text-center mt-2">
                                <span class="bcompetences">React.js</span>
                            </div>
                            <div className="github">
                                    <a href={"https://github.com/delphine38/compteurreact"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                                </div>
                            
                            <h5 class="text-left">Application en React.js pour ajouter ou enlever</h5>
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

            
            <div class="github">
                <a href={"https://github.com/delphine38"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
            </div>
            </div>
        </div>
    );
}

export default Main;