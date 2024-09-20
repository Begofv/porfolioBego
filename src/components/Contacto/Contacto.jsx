import './Contacto.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();
    const [message, setMessage] = useState(''); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7f4704a', 'template_uhkumjc', form.current, {
                publicKey: 'UGjHkZoCbQl_MjKZS',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!');
                    setMessage('¡Formulario enviado con éxito!');
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessage('Ocurrió un error al enviar el formulario. Inténtalo de nuevo.'); 
                },
            );
    };

    return (
        <div className="contact-container" id='contacto'>
            <h1>Contacto</h1>
            <p>
                Me gustaría seguir aprendiendo y tener la posibilidad de desarrollarme laboralmente.
                Si te ha gustado mi porfolio, quieres darme una oportunidad o darme algún consejo de mejora, puedes hacerlo a través de este formulario:
            </p>

            <form ref={form} onSubmit={sendEmail} className="contactoForm">
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre</label>
                    <input className="input" type="text" id="nombre" name="user_name" placeholder="Tu nombre" required />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" name="user_email" placeholder="ejemplo@example.com" required />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="textarea" id="mensaje" name="message" placeholder="Escriba su consulta..." required></textarea>
                </div>
                <button type="submit" className="submit-button" value="Send">Enviar</button>
            </form>

            {/* mensaje de confirmación */}
            {message && (
                <p className="confirmation-message">{message}</p>
            )}

            <div className='enlacesContacto'>
                <p>
                    También puedes ponerte en contacto conmigo a través de:
                </p>
                <p><strong>Teléfono:</strong> <a href="tel:603180484">652 72 01 99</a></p>
                <p><strong>Email:</strong> <a href="mailto:begofv13@gmail.com">begofv13@gmail.com</a></p>
            </div>
        </div>
    );
}

export default Contacto;
