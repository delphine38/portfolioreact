import React from "react";

import Figma from '../images/figma.png';
import Vscode from '../images/vscode.png';
import WebStorm from '../images/webStorm.png';
import Mathsjs from '../images/mathsjs.jpg';
import Iconefleche from '../images/iconefleche.png';
import Compteurreact from '../images/compteurreact.jpg';
import Argophp from '../images/argophp.jpg';
import Stickers from '../images/stikers.jpg';
import Github from '../images/github.png';
import PhpMyAdmin from '../images/phpMyAdmin.png';
import Crudessai from '../images/crudreactnodesql.jpg';
import Velosymfony from '../images/velosymfony.jpg';
import Maladies from '../images/maladies.jpg';
import CrudJavascript from '../images/crudjavascript.jpg';

const Main = () => {

//      handleClick = () => {
//     console.log('Cliqué');
//   }
    return(
        <div className="backgroundColor">
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


                        {/* crud Javascript */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <a href={"https://createreadupdatedeletejavascript.netlify.app/"} target="_blank">
                                    <img class="card-img-top" src={CrudJavascript} alt="exercice C.R.U.D en javascript" />
                                </a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                        <section class="fleche">
                                        <a href={"https://createreadupdatedeletejavascript.netlify.app/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                        </section>
                                    </section>
                                    <span class="bcompetences">Javascript</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/CreateReadUpdateDelete"} target="_blank"><img src={Github} alt="gitHub de C.R.U.D. en javascript" width="10px" /></a>
                            </div>
                            <h5>exercice en javascript pour lister les missions à réalisés</h5>
                        </article>

                        {/* crud react.js node sql */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <img class="card-img-top" src={Crudessai} alt="essai react node sql" />
                            </div>
                            <div class="text-center mt-2">
                                {/* <section class="fleche">
                                        <section class="fleche">
                                        <a href={"http://delphinerodriguezdev.fr/argophp/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                        </section>
                                    </section> */}
                                    <span class="bcompetences">React.js</span>
                                        <span class="bcompetences">Node.js</span>
                                            <span class="bcompetences">sql</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/crudreactnodeclient"} target="_blank"><img src={Github} alt="gitHub de crud" width="10px" /></a>
                            </div>
                            <h5>Application non déployer qui permet en local d'ajouter, modifier, supprimer</h5>
                        </article>


                        {/* projet en cours velosymfony */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <img class="card-img-top"  src={Velosymfony} alt="vélo tous et handicapé avec symfony" />
                            </div>
                            <div class="text-center mt-2">
                                {/* <section class="fleche">
                                        <section class="fleche">
                                            <a href={"http://delphinerodriguezdev.fr/velosymfony/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                        </section>
                                    </section> */}
                                    <span class="bcompetences">Symfony</span>
                                        <span class="bcompetences">PhpMyAdmin</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/velosymfony2"} target="_blank"><img src={Github} alt="gitHub de vélo symfony" width="10px" /></a>
                            </div>
                                <h5>Application de vélos pour tous et pour handicapés en cours de codage</h5>
                        </article>

                        {/* argophp */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                {/* <a href={"http://delphinerodriguezdev.fr/argophp/"} target="_blank"><img class="card-img-top"  src={Argophp} alt="Argonautes en php" /></a> */}
                                <img class="card-img-top"  src={Argophp} alt="Argonautes en php" />
                            </div>
                            <div class="text-center mt-2">
                                {/* <section class="fleche">
                                    <section class="fleche">
                                        <a href={"http://delphinerodriguezdev.fr/argophp/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                </section> */}
                                    <span class="bcompetences">Php et PhpMyAdmin</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/argophp"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                            </div>
                                <h5>Application pour ajouter des noms à une liste</h5>
                            
                        </article>

                        {/* stickersphp */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                {/* <a href={"http://delphinerodriguezdev.fr/stickersphp/"} target="_blank"><img src={Stickers} alt="Stickers en php" /></a> */}
                                <img src={Stickers} alt="Stickers en php" />
                            </div>
                            <div class="text-center mt-2">
                                {/* <section class="fleche">
                                    <section class="fleche">
                                        <a href={"http://delphinerodriguezdev.fr/stickersphp/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                </section> */}
                                    <span class="bcompetences">Php et PhpMyAdmin</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/stickersphp"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                            </div>
                                <h5>Application pour ajouter des noms à une liste</h5>
                        </article>

                        {/* testdecalculjavascript */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Mathsjs} alt="revision de maths" /></a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                    <section class="fleche">
                                        <a href={"https://delphine38.github.io/testdecalculjavascript"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                </section>
                                    <span class="bcompetences">html</span>
                                    <span class="bcompetences">Javascript</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/testdecalculjavascript"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                            </div>
                                <h5 class="text-left">Application pour réviser ses Maths</h5>
                        </article>

                        {/* Blog sur les maladies rares*/}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <a href={"https://maladiesrares.netlify.app/"} target="_blank"><img src={Maladies} alt="Blog sur des maladies rares" /></a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                    <section class="fleche">
                                        <a href={"https://maladiesrares.netlify.app/"} target="_blank"><img src={Iconefleche} alt="image de fleche" /></a>
                                    </section>
                                </section>
                                    <span class="bcompetences">Angular</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/blogmaladiesang"} target="_blank"><img src={Github} alt="gitHub de maladies" width="10px" /></a>
                            </div>
                                <h5>Blog sur les maladies rares</h5>
                        </article>

                        {/* compteurreact */}
                        <article class="article col-sm-3 col-lg-3">
                            <div class="img-wrapper">
                                <a href={"https://compteurreact.netlify.app/"} target="_blank"><img src={Compteurreact} alt="compteur en react" /></a>
                            </div>
                            <div class="text-center mt-2">
                                <section class="fleche">
                                    <section class="fleche">
                                        <a href={"https://compteurreact.netlify.app/"} target="_blank"><img src={Iconefleche} alt="compteur en react" /></a>
                                    </section>
                                </section>
                                    <span class="bcompetences">React.js</span>
                            </div>
                            <div className="github">
                                <a href={"https://github.com/delphine38/compteurreact"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                            </div>
                                <h5 class="text-left">Application en React.js pour ajouter ou enlever</h5>
                        </article>

                    </div>

                </div>
                {/* <button a href={"https://github.com/delphine38/cvdevreact"}>jljk</button> */}
                
                <a target="_blank" class="buttoncv" href="https://cvdevreact.netlify.app/">Voir mon CV</a>

                

            </section>

            
        </div>
    );
}

export default Main;