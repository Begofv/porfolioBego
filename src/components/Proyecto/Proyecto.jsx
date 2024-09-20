import './Proyecto.css';
import ActionButton from '../ActionButton/ActionButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from "../Modal/Modal";
import trabajos from './trabajosProyectos.js';

const Proyecto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };


  return (
    <div className="proyectoContainer" id='proyectos'>
      <div className="proyectosHeader">
        <h1 className='tituloProyectos'>Proyectos en los que he trabajado</h1>
      </div>
      {trabajos.map((proyecto, index) => (
        <div key={index} className="proyectosCard">
          <div className="card" onClick={() => openModal(proyecto)}>
            <h2>{proyecto.nombre}</h2>
            <div className="hover-text">Mas información</div>
          </div>
          <div className='proyectosImg' onClick={() => openModal(proyecto)}>
            <img src={proyecto.img} alt={proyecto.nombre} className="projectImg" />
          </div>
        </div>
      ))}

      {isModalOpen && selectedProject && (
        <Modal
          isOpen={true}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="modalCard">

            <div className='modalHeader'>
              <h2 className='modalNombre'>{selectedProject.nombre}</h2>
            </div>

            <div modalImg>
              <img src={selectedProject.img} alt={selectedProject.nombre} className="modalImage" />
            </div>

            <div className='modalContenido'>
              <p className='modaldescripcion'>{selectedProject.descripcion}</p>
              <p>Herramientas utilizadas: {selectedProject.herramientas}</p>
            </div>
            <div className='botonesModal'>
              <div className='modalLink'>
                <ActionButton label="Ver en github" className={"modalButton"} onClick={() => window.open(selectedProject.github, '_blank')}/>
              </div>

              <div className='modalLink'>
                <ActionButton label="Proyecto en live" className={"modalButton"} onClick={() => window.open(selectedProject.link, '_blank')} />
              </div>

            </div>

          </div>
        </Modal>
      )}

      <div className='botones'>
        <div className='proyectosButton'>
          <ActionButton label="Mi Github" className={"proyectosButtons"}onClick={() => window.open('https://www.github.com/Begofv', '_blank')}/>
        </div>
        <div className='proyectosButton'>
          <a href='#contacto'>
            <ActionButton label="Contactame" className={"proyectosButtons"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
