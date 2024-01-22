import { ProductProps } from '../types/ProductProps';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { title, price, image } = product;
  return (
    <Card className="h-100" id="product-card">
      <Card.Img
        variant="top"
        src={image}
        height="350px"
        style={{ objectFit: 'contain' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column  ">
          <span className="fs-2" id="product-title">{title}</span>
          <span className="mt-3 text-muted" id="product-price">{price}€</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
