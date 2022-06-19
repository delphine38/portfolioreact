import React from "react";

import Github from '../images/github.png';


const Contact = () => {
    return(
        <div className="backgroundColor">
            {/* <h3 class="contacth1 text-center pt-5 mb-5 pe-5 me-5" id="contact">Contactez-moi</h3> */}
            <h3 class="contacth1" id="contact">Contactez-moi</h3>

            <div className="contact">
                <form name="contact" 
                        method="post" 
                        className='contact_form' 
                        data-netlify="true" 
                        onSubmit="submit">

                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder='Votre nom, prénom, entreprise 🙂'/>
                    
                        <input type="email" name="email" placeholder='Votre email'/>
                    
                        <textarea name="message" placeholder='Votre message ici ...'></textarea>
                    
                        <button type="submit" className='btn btn-primary'>Envoyer</button>
                    
                    </form>

                    <div class="contact pt-5">
                        <div id="contact">
                            <a class="text-white" href={"https://www.linkedin.com/in/delphine-rodriguez/"} target="_blank">
                                <h4 class="text-center pt-5 mb-5">Via Linkedin 🙂 </h4>
                            </a>

                            <a class="buttoncv" href="mailto:delphine38@live.fr?body=">M'envoyer un email</a>
                                {/* <a class="buttoncv" href="mailto:delphine38@live.fr?body=">M'envoyer un email</a> */}
                        </div>
                    </div>
                <div class="github pb-5 text-center">
                    <a href={"https://github.com/delphine38"} target="_blank">
                        <p>Visitez Mon GitHub</p>
                    </a>

                
                    <div class="github">
                        <a href={"https://github.com/delphine38"} target="_blank"><img src={Github} alt="gitHub de stickers" width="10px" /></a>
                    </div>
                </div>
            </div>
            
            {/* <div class="navigation nav-bar pt-3 nav justify-content-center mx-auto">
                <ul>
                    <li class="d-inline nav-items m-4"><a class="text-white" href="#portfolio">Accueil</a></li>
                    <li class="d-inline nav-items m-4"><a class="text-white" href="#realisationcompetences">Compétences et
                        Réalisations</a></li>
                </ul>
            </div> */}
        </div>
    );
}
export default Contact;