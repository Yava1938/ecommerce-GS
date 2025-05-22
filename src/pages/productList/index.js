import ProductCard from '../../components/ProductCard'; 
import Header from '../../components/Header';
import Carrito from '../../components/carrito';
import { Footer } from '../../components/footer';

import { useGetProducts } from '../../hooks/getProducts'; 
import './index.css'
import { useEffect, useState } from 'react';


const ProductList = () => {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const CartToggle = () =>{
    setCarritoVisible( prev => !prev)
    console.log('carrito visible: ' + carritoVisible)
  }
  const [notifica, setNotifica] = useState(false);
  const [elementoCarrito, setElementoCarrito] = useState( () =>{const guardado = localStorage.getItem('carrito');
  return guardado ? JSON.parse(guardado) : [];
});
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


    const { products, loading, error } = useGetProducts();
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div className="main-container">
    <Header CartToggle={CartToggle} elementos= {elementoCarrito.length}/>
    <Carrito visible={carritoVisible} elementos = {elementoCarrito} eliminacion={quitarAlCarrito} comprar={realizaCompra} cerrarCarrito={cerrarCarrito}/>
    {notifica && (
      <div className="notificacion-compra">
        <span className='notificacion-texto'>
          ¡Gracias por tu compra!
          <p>Vuelve pronto...!</p>
        </span>
      </div>
    )}
    
    <section className="product-list">
      <h1>Lista de Productos</h1>
      <article className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  agregarAlCarrito={agregarAlCarrito}/>
        ))}
      </article>
    </section>
    <Footer />
  </div>
  );
};

export default ProductList;