import './style.css';

import { connect } from "react-redux";
import cart from '../../../redux/cart';


function AddToCart ( { cartItems } ) {

  console.log('these are cart imtes', cartItems);

  return (
    <div>
      <h1> Your cart {cartItems.length}</h1>
    </div>
  );
}

function mapStateToProps ({ cart }) {
  return {
    cartItems: cart.addToCart,
  }
}

export default connect(mapStateToProps)(AddToCart);
