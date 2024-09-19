import React from 'react';
import empresas from '../Trayectoria/trayectoriaProfesional.js';
import EmpresaCard from '../EmpresaCard/EmpresaCard.jsx';
import './Timeline.css';

const Timeline = () => {
    return (
        <div className="timeline" id='experiencia'>
            <div className='timeline-titulo'>
                <h2>Mi Trayectoria Profesional</h2>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-trabajo">
                <section className="trabajo-container">
                {empresas.map((empresa) => (
                    <EmpresaCard key={empresa.id} empresa={empresa} />
                ))}
                </section>
            </div>
        </div>
    );
};

export default Timeline;
