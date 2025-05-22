import React from 'react';

const ProductInfo = ({ title, rating, price }) => {
  return (
    <article className="product-info">
      <h2>{title}</h2>
      <section className='info-main'>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Calificación:</strong> {rating} ⭐</p>
      </section>
    </article>
  );
};

export default ProductInfo;