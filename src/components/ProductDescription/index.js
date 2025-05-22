import React from 'react';

const ProductDescription = ({ description, category }) => {
  return (
    <article className="product-description">
      <h3>Descripción</h3>
      <p>{description}</p>
      <p><strong>Categoría:</strong> {category}</p>
    </article>
  );
};

export default ProductDescription;