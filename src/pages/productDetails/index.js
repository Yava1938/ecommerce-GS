import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/getProducts';
import Header from '../../components/Header';
import Carrito from '../../components/carrito';
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import ProductDescription from '../../components/ProductDescription';
import ProductPrice from '../../components/ProductPrice';
import carrito from '../../resources/car.png'
import { Footer } from '../../components/footer';
import './index.css'
import { useGetCarrito } from '../../hooks/getCarrito';

const ProductDetails = () => {

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

  const { id } = useParams();
  const { product, loading, error } = useGetProductById(id);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div className="main-container">
  <Header CartToggle={CartToggle} elementos = {elementoCarrito.length} />
  <Carrito visible={carritoVisible} elementos = {elementoCarrito} eliminacion={quitarAlCarrito}  comprar={realizaCompra} cerrarCarrito={cerrarCarrito}/>
  
  {notifica && (
      <div className="notificacion-compra">
        <span className='notificacion-texto'>
          ¡Gracias por tu compra!
          <p>Vuelve pronto...!</p>
        </span>
      </div>
    )}
  <section className="product-specific-details">

      <ProductImage image={product.image} alt={product.title} sizeW={'390px'} sizeMW={'450px'}/>
    
    <section className='specific-detail-info'>
          <ProductInfo title={product.title} rating={product.rating.rate} reviews={product.rating.count}/>
        <hr />
        <section className='specific-detail-main'>
      <ProductPrice  price={product.price} />
          <button className="btn-specific-detail-car" onClick={() => {agregarAlCarrito(product)}}>Al carrito
            <img src={carrito} alt='Agregar al carrito' className='icon-carrito'/>
          </button>
        </section>
          <hr />
      <ProductDescription description={product.description} category={product.category} />
    </section>
  </section>
  <Footer />
  </ div >
  );
};

export default ProductDetails;