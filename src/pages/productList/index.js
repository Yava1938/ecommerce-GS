import ProductCard from '../../components/ProductCard'; 
import Header from '../../components/Header';
import Carrito from '../../components/carrito';
import { Footer } from '../../components/footer';

import { useGetProducts } from '../../hooks/getProducts'; 
import './index.css'
import { useGetCarrito } from '../../hooks/getCarrito';


const ProductList = () => {
  const {
    carritoVisible,
    CartToggle,
    cerrarCarrito,
    elementoCarrito,
    agregarAlCarrito,
    quitarAlCarrito,
    realizaCompra,
    notifica
  } = useGetCarrito();

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