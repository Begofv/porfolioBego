import ActionButton from '../ActionButton/ActionButton';
// import { useNavigate } from 'react-router-dom';
import './Intro.css';

import begoImage from '../../assets/bego.jpeg';




const Intro = () => {

    return (
        <div className="introContainer" id="sobre-mi">
            <section className="introContent">


                <div className='introImg'>
                    <img src={begoImage} alt="yo" />

                </div>

                <div className='intro'>
                    <div className='introText'>
                        <h2>Hola! Soy Bego(ña), Desarrolladora Web Ful STack/Administrativa</h2>

                        <p>Tras varios años trabajando como Administrativa, decidí dar un nuevo rumbo a mi carrera estudiando el Bootcamp de Desarrollo Web Full Stack de la BBK con The Bridge, un bootcamp intensivo de desarrollo web, el cual completé con éxito.<br></br>
                            <br></br> Durante este proceso, descubrí mi pasión por la programación y adquirí una sólida comprensión de tecnologías front-end y back-end. <br></br>
                            <br></br> Además, esta experiencia me permitió desarrollar proyectos reales, consolidando tanto mis habilidades técnicas como mi capacidad para resolver problemas de forma creativa. <br></br>
                            <br></br> Sin duda, ha sido una etapa clave en mi crecimiento profesional y personal.</p>
                    </div>

                    <div className="linkedin" onClick={() => window.open('https://www.linkedin.com/in/begoña-fdez-veiga', '_blank')}>
                        <h3>Mi Linkedin</h3>
                    </div>


                </div>

            </section>

        </div>
    );
}

export default Intro;