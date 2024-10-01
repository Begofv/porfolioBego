import ActionButton from '../ActionButton/ActionButton';
import { useNavigate } from 'react-router-dom';

import './Curriculum.css';


const Curruculum = () => {
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/contacto');
    }


    return (
        <div className="curriculumContainer">
            <div className='curriculumtexto'>
                <h2 className='curriculumText'>Si quieres saber más sobre mi experiencia laboral, puedes descargar mi curriculum en el siguiente botón, o puedes ver mi LinkedIn</h2>
            </div>
            <div className="curriculumButtons">
                <div className='descargar'>
                    <a className='curriculumButton' href='./assets/Bego_Fdez_Veiga_CV.pdf' download='Bego_Fdez_Veiga_CV.pdf'>
                        <h3>Descargar Curriculum</h3>
                    </a>
                </div>
                <div className='enlace'>

                    <div className="linkedinCurriculum" onClick={() => window.open('https://www.linkedin.com/in/begoña-fdez-veiga', '_blank')}>
                        <h3>Mi LinkedIn</h3>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Curruculum;