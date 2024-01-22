import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

import ProductCard from './ProductCard';
import { ProductProps } from '../types/ProductProps';

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        console.log(response.data);
        setProductsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h3>List of Products</h3>
      <Row
        lg={3}
        md={2}
        xs={1}
        className="g-3"
        id="product-list">
        {productsData.map((product: ProductProps) => (
          <Col>
            <ProductCard
              key={product.id}
              product={product}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
