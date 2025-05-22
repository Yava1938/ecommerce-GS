import { useEffect, useRef } from 'react';
import icon from '../../resources/basura.png'
import './index.css';  

const Carrito = ({visible, elementos, eliminacion, comprar, cerrarCarrito}) => {
  const referenciaCarrito = useRef()

  useEffect(() => {
    console.log('Carrito actualizado:', elementos);
  }, [elementos]);

  useEffect(() => {
    const afueraCarrito = (event) =>{
      if(visible && !referenciaCarrito.current.contains(event.target)){
        cerrarCarrito()
      }
    }
      document.addEventListener('mousedown', afueraCarrito);
      return () => {
        document.removeEventListener('mousedown', afueraCarrito)
      }
    }, [visible, cerrarCarrito]);
  
  return (
    <section className={`cart ${visible ? 'show': ''}`} ref={referenciaCarrito} >
            <h2 className="cart__title">MI CARRITO</h2>
            {elementos.length > 0?   
            <section className='cart__main'>
              {elementos.map((element, index) => (
                <article className='carrito-product' key={index}>
                  <section className='cart-product-img'>
                    <img src={element.image} alt={element.title} className='cart-product-imgage'/>
                  </section>
                  <section className='cart-product-details'>
                    <article className='cart-product-title'>
                      <h3>{element.title}</h3>
                    </article>
                    <article className='cart-product-price'>
                      <h4>${element.price}</h4>
                    </article>
                  </section>
                  <section className='cart-product-icon'>
                    <img src={icon} alt="icon eliminar" className="delete__icon" onClick={() =>{eliminacion(index)}}/>
                  </section>
                </article>
          ))}
            </section>
             : 
            <section>
              <h2 className='cart__empty'>Tu carrito esta vacio</h2>
            </section>
              } 
              <section className='car_comprar'>
                <button className="cart__button" id="btn__comprar" disabled={elementos.length === 0} onClick={() => {
                  comprar(); 
                  }} >COMPRAR</button>
              </section>
        </section>
  );
};

export default Carrito;