import './style.css';
import  React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import category from '../../../redux/category';
import products from '../../../redux/products';
import cart from '../../../redux/cart';
import { fetchProcucts } from '../../../redux/products/actions';
import { addtoCartFunction } from '../../../redux/cart/actions';



import Categories from '../../categories';

function Products ( { cartItems, productsData, fetchProcucts, choosedCat, addtoCartFunction = () => {} } ) {


  useEffect(() => {
    fetchProcucts(choosedCat);
  },[choosedCat]);

  function addProductsToCart (item) {
    addtoCartFunction(item)
  }


  return (
    <div className="products-wrapper wrapper  wrapper-m">
      <h1 className=""> Products </h1>

      <Categories />

      <div className="products-wrapper-products">

        {
          productsData.map((item) => {
          return (
            <div key={item.id} className="products-wrapper-products-item">
              <div className="products-wrapper-products-item-img">
                <img src={item.images} alt="img"/>
              </div>

              <div className="products-wrapper-products-item-info">
                <h2>{item.title}</h2>
                <span>Price: {item.price} </span>
              </div>

              <div className="products-wrapper-products-item-buttons">
                <div> <Link to={item.id}>View product</Link> </div>
              </div>
            </div>
          )
        })
      }

      </div>
    </div>
  );
}

function mapStateToProps ({ category, products, cart }) {
  return {
    choosedCat: category.choosed_cat,
    productsData: products.data,
    cartItems: cart.addToCart,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProcucts: (choosedCat) => dispatch(fetchProcucts(choosedCat)),
    addtoCartFunction: (id) => dispatch(addtoCartFunction(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
