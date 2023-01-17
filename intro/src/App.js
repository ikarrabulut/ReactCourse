import Nav from './Nav.js'
import CategoryList from './CategoryList.js'
import ProductList from './ProductList.js'

function App() {
  return(
    <div>
      <Nav/>
      <CategoryList></CategoryList>
      <p>Hello React App</p>
      <ProductList/>
    </div>
  );
}

export default App;