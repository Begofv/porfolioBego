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
                        <h2>Hola! Soy Begoña, Desarrolladora Web Full Stack y Administrativa.</h2>

                        <p>Después de varios años trabajando como administrativa, decidí dar un nuevo rumbo a mi carrera estudiando el Bootcamp de Desarrollo Web Full Stack de la BBK con The Bridge, un curso intensivo de desarrollo web que completé con éxito.<br></br>
                            <br></br> Durante este proceso, descubrí mi pasión por la programación y adquirí una sólida comprensión de tecnologías tanto de front-end como de back-end. <br></br>
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