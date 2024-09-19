import './Footer.css';

import imageBego from './../../assets/bego.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const year = new Date().getFullYear();
    const creators = [
        { id: 1, name: 'Bego', avatar: imageBego, url: 'https://github.com/begofv' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
            <div className="copyright">&copy; {year} Begoña Fernández Veiga</div>

            <div className="footer-icons">
                <a href="https://www.instagram.com" className='icon_link' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icon" />
                </a>

                <a href="https://www.facebook.com" className='icon_link' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size='2x' className='footer-icon' />
                </a>

                <a href="https://linktr.ee/horizonteslejanos" className='icon_link' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} size="2x" className="footer-icon" />
                </a>
            </div>

            <div className="creators">
                {creators.map(creator => (
                    <a key={creator.id} href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
                        <div className="creator">
                            <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
                            <span className="creator-name">{creator.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;