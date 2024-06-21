// Catalogue.js
import React from 'react';
import './styles.css'; 

const products = [
  {
    id: 1,
    name: 'Go-jo hoodie',
    price: '$19.99',
    image: 'https://m.media-amazon.com/images/I/417TIBahiJL._AC_UY1100_.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    name: 'kakashi hoodie',
    price: '$29.99',
    image: 'https://images-cdn.ubuy.co.in/63559dd5d7c58b1e1e57cf96-mens-anime-hoodies-3d-printing.jpg', 
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },

];

const Catalogue = () => {
  return (
    <div className="catalogue-container">
      <h2>Products Catalogue</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p>{product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
