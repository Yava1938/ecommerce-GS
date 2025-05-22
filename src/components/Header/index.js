import { Link } from 'react-router-dom';
import logo from '../../resources/logo.png'
import carrito from '../../resources/car.png'
import './index.css';  
import { useEffect } from 'react';

const Header = ({CartToggle, elementos}) => {

  useEffect(() => {
      console.log('Contando articulos:', elementos);
    }, [elementos]);

  return (
    <header className="header">
      <nav className="nav">
        <i className='header__icon'>
            <Link to="/" className="nav-link">Inicio</Link>
        </i>
        <img src={logo} alt="Logo" className="header__logo" />
        
        <i className='header__icon' onClick={CartToggle}>
          <img src={carrito} alt="Icono Carrito" className="header__img" />            
          { elementos > 0 ? <span className="badge">
            {elementos}
            </span> : ''}
        </i>
      </nav>
    </header>
  );
};

export default Header;