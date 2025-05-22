import React from 'react';

const ProductDescription = ({ description, category }) => {
  return (
    <article className="product-description">
      <p><strong>Categoría:</strong> {category}</p>
      <h3>Descripción</h3>
      <p>{description}</p>
    </article>
  );
};

export default ProductDescription;