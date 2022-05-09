import './App.css';
import freeCodeCampsLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contendor'>
        <img 
          src={freeCodeCampsLogo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp' />
      </div>
    </div>
  );
}

export default App;
