import { useState, useEffect } from 'react';



export const useGetCarrito = () => {
const [carritoVisible, setCarritoVisible] = useState(false);
  const [elementoCarrito, setElementoCarrito] = useState( () =>{const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  const [notifica, setNotifica] = useState(false);
    
    const CartToggle = () =>{
    setCarritoVisible( prev => !prev)
    console.log('carrito visible: ' + carritoVisible)
    }

    const agregarAlCarrito = (product) =>{
    console.log(product)
    setElementoCarrito(prev => [...prev, product])
  }

  const quitarAlCarrito = (product) =>{
    setElementoCarrito(prev => {
    const nuevo = [...prev];  
    nuevo.splice(product, 1); 
    return nuevo;
  });
  }

  const cerrarCarrito = () =>{
    setCarritoVisible(false);
  }

 const realizaCompra = ()=>{
    console.log('false')
    setNotifica(true)
    setElementoCarrito([])
    localStorage.removeItem('carrito');
    CartToggle()
     setTimeout(() => {
                   setNotifica(false); 
                 }, 3000);
  }

  useEffect(() => {
  console.log('Productos en el carrito:', elementoCarrito);
  localStorage.setItem('carrito', JSON.stringify(elementoCarrito));
}, [elementoCarrito]);

return {
    carritoVisible,
    CartToggle,
    cerrarCarrito,
    elementoCarrito,
    agregarAlCarrito,
    quitarAlCarrito,
    realizaCompra,
    notifica,
  };
    
}

