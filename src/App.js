import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';



function App() {

  const toggle = useSelector((state) => state.toggle.showCart)
  const cart = useSelector((state) => state.cart);

  const fetchCart = async () => {
    try {
      const data = await axios.put(`https://my-project-d40ec-default-rtdb.firebaseio.com/cart.json
`, cart);
    } catch (error) {
      console.log(`Error fetching cart details`, error)
    }

  }
  useEffect(() => {
    fetchCart();
  }, [cart]);


  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
