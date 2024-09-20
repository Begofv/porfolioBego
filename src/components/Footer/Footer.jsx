import './Footer.css';
import imageBego from './../../assets/bego.jpeg';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    const creators = [
        { id: 1, name: 'Bego', avatar: imageBego, url: 'https://github.com/begofv' }
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Mostrar el footer cuando llegamos al final de la página
            if (scrollTop + windowHeight >= documentHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
            <div className="copyright">&copy; {year} Begoña Fernández Veiga</div>

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
