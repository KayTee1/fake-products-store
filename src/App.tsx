import { Container } from 'react-bootstrap';
import Products from './components/Products';

function App() {
  return (
    <Container>
      <h1 style={{ fontWeight: 'bold' }}>Fake Store</h1>
      <Products />
    </Container>
  );
}

export default App;
