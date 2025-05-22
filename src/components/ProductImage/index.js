// const ProductImage = ({ image, alt, sizeW, sizeMW}) => {
//   return (
//     <article className="product-image">
//       <img src={image} alt={alt} style={{ width: '100%', maxWidth: '400px' }} />
//     </article>
//   );
// };


const ProductImage = ({ image, alt, sizeW, sizeMW}) => {
  return (
    <article className="product-image">
      <img src={image} alt={alt} style={{ width: sizeW || '100%', maxWidth: sizeMW || '400px' }} />
    </article>
  );
};

export default ProductImage;