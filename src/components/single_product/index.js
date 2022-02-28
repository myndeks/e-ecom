import { useParams, useHistory} from "react-router-dom";
import React, { useState } from 'react';
import { connect } from "react-redux";
import products from '../../redux/products';
import { addtoCartFunction } from '../../redux/cart/actions';

import './style.css'

function SingleProduct ( { productsData, cartItems, addtoCartFunction = () => {} } ) {

  let { id } = useParams();

  const data = productsData.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  function addQuantity () {
    if (quantity < data.quatity) {
      setQuantity( quantity + 1 );
    }
  }

  function minusQuantity () {
    if (quantity !== 0) {
      setQuantity( quantity - 1 );
    }
  }

  function addProductsToCart (data, quantity) {
    addtoCartFunction(data, quantity)
  }

  return (
    <div className="single_product_wrapper wrapper">
      <div className="signle_product">
        <div className="signle_product_image">
          <img src={data.images} alt="" />
        </div>

        <div className="signle_product_info">
          <h1>{data.title}</h1>
          <p>Price: {data.price}</p>
          <p>Quantity: {data.quatity}</p>
          <hr />

          <div className="signle_product_info_quantity">
            <div className="signle_product_info_quantity_add" onClick={addQuantity}>+</div>
            <div className="signle_product_info_quantity_count">{quantity}</div>
            <div className="signle_product_info_quantity_minus" onClick={minusQuantity}>-</div>
          </div>


          <button className="signle_product_btn_add_to_cart" onClick={() => addProductsToCart(data, quantity)}> Add to cart </button>

        </div>
      </div>
    </div>
  );
}

function mapStateToProps ({ products, cart }) {
  return {
    productsData: products.data,
    cartItems: cart.addToCart,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addtoCartFunction: (data, quantity) => dispatch(addtoCartFunction(data, quantity))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
