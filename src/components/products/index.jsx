import ProductItem from './product-components/product-item';

const productData = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const ProductList = () => {
  return (
    <div>
      <h3>E-Commerce Products</h3>
      <ProductItem />
      <ul>
        {productData.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
