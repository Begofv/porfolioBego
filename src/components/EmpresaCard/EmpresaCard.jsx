import "./EmpresaCard.css";
import { useState } from 'react';

const EmpresaCard = ({ empresa }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`cardEmpresa ${isOpen ? 'selected' : ''}`} // Aplica la clase 'selected' cuando esté abierto
        > 
            <details className="cardNombre" open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
                <summary className="cardTitle">
                    {empresa.nombre}
                    <div className="subtitulo">
                        {empresa.puesto}
                    </div>
                </summary>

                <div className="cardDetalles">
                    <div className="descripcion">
                        <p className="tituloD">Descripción</p>
                        <p className="empresaD"> {empresa.descripcion}</p>
                    </div>
                    <div className="duracion">
                        <p className="tituloD">Fecha</p>
                        <p className="empresaD">{empresa.fecha}</p>
                    </div>
                </div>
            </details>
        </div>
    );
};

export default EmpresaCard;