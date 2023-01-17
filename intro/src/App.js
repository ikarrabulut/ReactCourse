import Nav from "./Nav.js";
import CategoryList from "./CategoryList.js";
import ProductList from "./ProductList.js";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Nav />
        </Col>
      </Row>
      <Row>
        <Col className="border" sm="3">
          <CategoryList></CategoryList>
        </Col>
        <Col className="border" sm="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
