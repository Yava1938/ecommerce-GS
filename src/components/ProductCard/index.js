import { Link } from 'react-router-dom';
import './index.css'; 

const ProductCard = ({ product, agregarAlCarrito }) => {

  const anadealCarrito = () =>{
    agregarAlCarrito(product)
  }


  return (
    <section className="product-card">
      <article className="product-image">
        <img className='product-img' src={product.image} alt={product.title} />
      </article>
      <article className="product-details">
        <h3 className='product-name'>{product.title}</h3>
        <p className='product-price'><strong>Precio:</strong> ${product.price}</p>
        <p className='product-point'><strong>Calificación:</strong> {product.rating.rate} ⭐</p>
        <section className='product-btn'>
          <Link to={`/details/${product.id}`} className="btn details">Ver detalles</Link>
          <button className="btn carrito"  onClick={() => anadealCarrito(product)}>Al carrito</button>
        </section>
      </article>
    </section>
  );
};

export default ProductCard;