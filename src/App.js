import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toggleAction } from './store/uislice';
import Notification from './components/UI/Notification';


function App() {

  const dispatch = useDispatch();

  const toggle = useSelector((state) => state.toggle.showCart)
  const cart = useSelector((state) => state.cart);
  const notification= useSelector((state)=>state.toggle.notification)

  const fetchCart = async () => {
    dispatch(toggleAction.showNotification({
      status:'Pending',
      title : 'Sending..',
      messsage:'Sending cart data!'
    }))
    try {
      
      const data = await axios.put(`https://my-project-d40ec-default-rtdb.firebaseio.com/cart.json
`, cart);
dispatch(toggleAction.showNotification({
  status:'success',
  title : 'Success',
  messsage:'Sent cart data!'
}))

    } catch (error) {
      dispatch(toggleAction.showNotification({
        status:'error',
        title : 'Error..',
        messsage:'Oops ! , Sending cart data failed!'
      }))
      console.log(`Error fetching cart details`, error)
    }

  }
  useEffect(() => {

 
    fetchCart();
  }, [cart,dispatch]);


  return (
    <>
   {notification && <Notification status = {notification.status} message={notification.message} title={notification.title}/>}
       <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
    </>
   
  );
}

export default App;
