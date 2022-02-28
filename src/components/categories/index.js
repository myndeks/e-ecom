import  React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import category from '../../redux/category';
import { fetchCat } from '../../redux/category/actions';
import './style.css';


function Categories ( {choosedCat, toogleMenu = () => {}, fetchCat, catData } ) {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    fetchCat();
  },[]);

  function choseCategoryToShoww (item) {
    toogleMenu(item);
  }

  return (
    <div className="products-wrapper-categories">
    {
      catData.map((item) => {
        return (
          <span onClick={() => choseCategoryToShoww(item.category)} key={item.id}>{item.category} </span>
        );
      })
    }
    </div>
  );
}

function mapStateToProps ({ category }) {
  return {
    choosedCat: category.choosed_cat,
    catData: category.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toogleMenu: (id) => dispatch({ type: 'CHOOSE_CAT', id }),
    fetchCat: () => dispatch(fetchCat())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
