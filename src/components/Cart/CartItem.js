import classes from './CartItem.module.css';
import { counterActions } from '../../store/counter';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const counter = useSelector((state) => state.counter);

  const increaseHandler = () => {
    dispatch(counterActions.increase())
  }
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());

  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{counter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
