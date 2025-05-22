import React from 'react';

const ProductRating = ({ reviews }) => {
  return (
    <article className="product-rating">
      <p><strong>Reseñas:</strong> {reviews} opiniones</p>
    </article>
  );
};

export default ProductRating;