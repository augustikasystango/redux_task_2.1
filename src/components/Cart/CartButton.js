import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../store/uislice';
const CartButton = (props) => {

  const dispatch = useDispatch();

  const cartHandler = ()=>{
    dispatch(toggleAction.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
