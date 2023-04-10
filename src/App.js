import React, { useState } from 'react';
import './styles/App/App.css';
import './styles/Form/Form.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Shairen from './assets/img/logoCabeceraShairen.png';
import { Formulario, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './Elementos/Formularios';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './componentes/input';
import Carousel from './componentes/Carousel';

function App() {
  const [Nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [Correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [Telefono, cambiarTelefono] = useState({ campo: '', valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formualrioValido, cambiarFormularioValido] = useState(null)

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const enviarFormulario = () => {
    const nombre = Nombre.campo;
    const correo = Correo.campo;
    const telefono = Telefono.campo;

    const datos = { name: nombre, email: correo, phone: telefono };

    const url = 'http://127.0.0.1:8000/api/index?';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok) {
          cambiarFormularioValido(true);
          cambiarNombre({ campo: '', valido: null });
          cambiarCorreo({ campo: '', valido: null });
          cambiarTelefono({ campo: '', valido: null });
        } else {
          cambiarFormularioValido(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // cambiarFormularioValido(false);
      });
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      Nombre.valido === 'true' &&
      Correo.valido === 'true' &&
      Telefono.valido === 'true' &&
      terminos
    ) {
      enviarFormulario();
    } else {
      cambiarFormularioValido(false)
    }
  }

  return (
    <div className="App">
      <header>
        <div className='navbar'>
          <img src={Shairen} alt='LogoShairen' id='logoShairen'></img>
          <a href='Home'>Home</a>
          <a href='#s2'>About</a>
          <a href='#s3'>Products</a>
          <a href='#s4'>Services</a>
          <a href='#s5'>Contact us</a>
        </div>
      </header>

      <main className='sections'>

        <section id='s1'>
          <div id='d1'>
            <h1>Sed ut perspiciatis unde omnis iste natus</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. </p>
          </div>
        </section>

        <section id='s2'>
          <div id='d2'>
            <h1 id='h1-2-1'>We Help Businesses</h1>
            <h1 id='h1-2-2'>Grow and Innovate</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
          </div>
        </section>

        <section id='s3'>
          <div id='d3'>
            <Carousel></Carousel>
          </div>
        </section>

        <section id='s4'>
          <div id='d4'>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Service #1
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Service #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Service #3
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='s5'>
          <div id='d5'>
            <Formulario action="" onSubmit={onSubmit}>

              <Input
                estado={Nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Nombre"
                placeholder="Santiago"
                name="name"
                leyendaError="Solo se pueden utilizar caracteres alfabeticos"
                expresionRegular={expresiones.nombre}
              />

              <Input
                estado={Correo}
                cambiarEstado={cambiarCorreo}
                tipo="email"
                label="Correo"
                placeholder="correo@gmail.com"
                name="email"
                leyendaError="No se pueden utilizar espacios ni simbolos"
                expresionRegular={expresiones.correo}
              />

              <Input
                estado={Telefono}
                cambiarEstado={cambiarTelefono}
                tipo="text"
                label="Telefono"
                placeholder="2997852936"
                name="phone"
                leyendaError="Utilice de 7 a 14 numeros"
                expresionRegular={expresiones.telefono}
              />

              <ContenedorTerminos>
                <label>
                  <input
                    type='checkbox'
                    name='terminos'
                    id='terminos'
                    checked={terminos}
                    onChange={onChangeTerminos}
                  ></input>
                  Acepto los terminos y condiciones
                </label>
              </ContenedorTerminos>


              {formualrioValido === false && <MensajeError>
                <p>
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  <b>Error:</b> Por favor rellena el formulario correctamente.
                </p>
              </MensajeError>}


              <ContenedorBotonCentrado>
                <Boton type='submit'>Enviar</Boton>
                {formualrioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
              </ContenedorBotonCentrado>
            </Formulario>


          </div>
        </section>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
