import ActionButton from '../ActionButton/ActionButton';

import './Presentacion.css';


const Presentacion = () => {
  


    return (
        <div className="comienzoContainer hidden-mobile" id='home'>
            <div className='comienzotexto'>
                <h2>Desarrolladora Web, Full Stack/ Administrativa</h2>
            </div>
            <div className='comienzoBoton'>
                <a href='#contacto'> 

                    <ActionButton label="Contactame" className={"comienzoButton"} />
                </a>

            </div>
        </div>
    );
}

export default Presentacion;