import Navi from "./Navi.js";
import CategoryList from "./CategoryList.js";
import ProductList from "./ProductList.js";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navi />
        </Col>
      </Row>
      <Row>
        <Col className="border p-2" sm="4">
          <CategoryList></CategoryList>
        </Col>
        <Col className="border p-2" sm="8">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
