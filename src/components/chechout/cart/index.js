import './style.css';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import cart from '../../../redux/cart';
import products from '../../../redux/products';


function AddToCart ( { cartItems, productsData } ) {

  console.log('these are cart imtes', cartItems);

  return (
    <div className="checkout_cart_wrapper wrapper">
      <h3> Your have {cartItems.length} items in your cart</h3>

        {cartItems.map((item) => {
          return (
            <div key={item.id} className="checkout_cart_wrapper_items">
              <div className="checkout_cart_wrapper_items-img">
                <img src={item.images} alt="" />
              </div>
              <div className="checkout_cart_wrapper_items-info">
                <div className="checkout_cart_wrapper_items-info-title">
                  Item name: {item.title}
                </div>
                <div className="checkout_cart_wrapper_items-info-quantity">
                  Choosed quantity: {item.choosedQuantity}
                </div>
              </div>
            </div>
          );
        })}


        <Link to="/checkout/step1">
          <div className="checkout_cart_wrapper_items_checkout-btn"> Checkout </div>
        </Link>

    </div>
  );
}

function mapStateToProps ({ cart, products }) {
  return {
    cartItems: cart.addToCart,
    productsData: products.data,

  }
}

export default connect(mapStateToProps)(AddToCart);
