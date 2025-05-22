import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/getProducts';
import Header from '../../components/Header';
import Carrito from '../../components/carrito';
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import ProductDescription from '../../components/ProductDescription';
import ProductRating from '../../components/ProductRating';
import carrito from '../../resources/car.png'
import { Footer } from '../../components/footer';
import './index.css'

const ProductDetails = () => {

  const [carritoVisible, setCarritoVisible] = useState(false);
  const CartToggle = () =>{
    setCarritoVisible( prev => !prev)
    console.log('carrito visible: ' + carritoVisible)
  }

  const [elementoCarrito, setElementoCarrito] = useState([])
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
  const { id } = useParams();
  const { product, loading, error } = useGetProductById(id);

  useEffect(() => {
    console.log('Productos en el carrito:', elementoCarrito);
  }, [elementoCarrito]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div className="main-container">
  <Header CartToggle={CartToggle} elementos = {elementoCarrito.length} />
  <Carrito visible={carritoVisible} elementos = {elementoCarrito} eliminacion={quitarAlCarrito} />
  <section className="product-specific-details">
    <section className='specific-detail-img'>
      <ProductImage image={product.image} alt={product.title} />
    </section>
    <section className='specific-detail-info'>
        <section className='specific-detail-main'>
          <ProductInfo title={product.title} rating={product.rating.rate} price={product.price} />
          <button className="btn-specific-detail-car" onClick={() => {agregarAlCarrito(product)}}>Al carrito
            <img src={carrito} alt='Agregar al carrito' className='icon-carrito'/>
          </button>
        </section>
      <ProductDescription description={product.description} category={product.category} />
      <ProductRating  reviews={product.rating.count} />
    </section>
  </section>
  <Footer />
  </ div >
  );
};

export default ProductDetails;