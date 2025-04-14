import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../store/uislice';
import { useSelector } from 'react-redux';
const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector(state=>state.cart.totalQuantity);
  const cartHandler = ()=>{
    dispatch(toggleAction.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  ); 
};

export default CartButton;
