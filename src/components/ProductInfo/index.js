const ProductInfo = ({ title, rating, reviews }) => {
  return (
    <article className="product-info">
      <h2>{title}</h2>
      <section className='info-main'>
      <p>Calificación: {rating} {'⭐'.repeat(Math.floor(rating))}</p>
      <p>{reviews} opiniones</p>
      </section>
    </article>
  );
};

export default ProductInfo;