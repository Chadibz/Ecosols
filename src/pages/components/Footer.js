import {FaFacebook, FaInstagram , FaLinkedin} from 'react-icons/fa';

const logg = new URL("./Navbar/logo.png",import.meta.url)
export default function Footer() {
    return (
        
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><img className='img-footer' src={logg} width="100"></img></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contactez-nous</h4>
                    <ul>
                        <li><a href="#">Siège social GAFSA : Avenue El Hakim Gafsa -Z1 -2100</a></li>
                        <li><a href="#">Numéro de téléphone : 58176730</a></li>
                        <li><a href="#">E-mail : contact@ecosolution.com</a></li>
                       
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="https://www.google.tn/maps/place/Eco-solutions+Tunisie/@34.4194778,8.7919754,20.24z/data=!4m19!1m13!4m12!1m4!2m2!1d10.2039484!2d36.8684776!4e1!1m6!1m2!1s0x12f897ae381063a5:0xc39ffecc72c2b584!2sEco-solutions+Tunisie,+Gafsa!2m2!1d8.7920781!2d34.4195375!3m4!1s0x12f897ae381063a5:0xc39ffecc72c2b584!8m2!3d34.4195375!4d8.7920781?hl=fr">Localisation de la société</a></li>
                        <li><a href="#">??</a></li>
                        <li><a href="#">??</a></li>
                        <li><a href="#">??</a></li>
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href=''><FaFacebook/></a> 
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaLinkedin/></a>
                
                    </div>
                </div>
            </div>
        </div>
   </footer>
    );}
