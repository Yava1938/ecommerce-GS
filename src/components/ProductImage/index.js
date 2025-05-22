import React from 'react';

const ProductImage = ({ image, alt }) => {
  return (
    <article className="product-image">
      <img src={image} alt={alt} style={{ width: '100%', maxWidth: '400px' }} />
    </article>
  );
};

export default ProductImage;