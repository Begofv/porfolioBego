import ActionButton from '../ActionButton/ActionButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import empresas from './trayectoriaProfesional.js';
import './Trayectoria.css';
import Modal from '../Modal/Modal.jsx';

const Trayectoria = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmpresa, setSelectedEmpresa] = useState(null);
    const navigate = useNavigate();

    const openModal = (empresa) => {
        setSelectedEmpresa(empresa);
        setIsModalOpen(true);
    };



  return (
    <div className="trayectoriaContainer">
        <div className='tituloTrayectoria'>
            <h1 className='TrayectoriaTitulo'>Trayectoria Profesional</h1>
        </div>
        <div className='trayectoriaLine'>
            <section className="trayectoriaContent">

                {empresas.map((empresa) => (
                    <div className="trayectoriaItem" key={empresa.id}>
                        <div className="trayectoriaLogo">
                            <img src={empresa.logo} alt={empresa.nombre} className='empresaLogo'/>
                        </div>
                        <div className="trayectoriaText">
                            <h2>{empresa.nombre}</h2>
                            <p>{empresa.puesto}</p>
                            <p>{empresa.descripcion}</p>
                            <p>{empresa.fecha}</p>

                            <div className='trayectoriaButton'>
                                <ActionButton label="Ver más" className={"trayectoriaButton"} onClick={() => openModal(empresa)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    </div>
  );
}

export default Trayectoria;