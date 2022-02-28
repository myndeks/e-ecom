import './style.css';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import cart from '../../../redux/cart';

function Nav ( { cartItems } ) {
  return (
    <div className="nav_wrapper wrapper">
      <h1 className="nav_wrapper-logo"><Link to="/">Furniture</Link></h1>
      <div className="nav_wrapper-items">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/">Products</Link></span>
        <span><Link to="/">About us</Link></span>
        <span><Link to="/">Contacts</Link></span>

        <span><Link to="/chechout">Cart Items ({cartItems.length})</Link></span>
      </div>
    </div>
  );
}

function mapStateToProps ({ cart }) {
  return {
    cartItems: cart.addToCart,
  }
}

export default connect(mapStateToProps)(Nav);
