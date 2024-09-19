import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contact-container" id='contacto'>
            <h1>Contacto</h1>
            <p>
                Me gustaría seguir aprendiendo y tener la posibilidad de desarrollarme laborlamene.
                Si te ha gustado mi porfolio, quieres darme una oportunidad o darme algun consejo de mejora, puedes hacerlo a traves de este formulario:

            </p>
            <form className="contactoForm">
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre</label>
                    <input className="input" type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" name="email" placeholder="ejemplo@example.com" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="textarea" id="mensaje" name="mensaje" placeholder="Escriba su consulta..."></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
            <div className='enlacesContacto'>
                <p>
                    También puedes ponerte en contacto conmigo a traves de:
                     
                        <p><strong>Teléfono:</strong> <a href="tel:603180484">652 72 01 99</a></p>
                        <p><strong>Email:</strong> <a href="mailto:begofv13@gmail.com">begofv13@gmail.com</a></p>
                </p>
            </div>
        </div>
    );
}

export default Contacto;
