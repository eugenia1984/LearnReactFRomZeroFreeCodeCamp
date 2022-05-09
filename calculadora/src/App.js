import './App.css';
import freeCodeCampsLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampsLogo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className="contenedor-calculadora">
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>7</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
