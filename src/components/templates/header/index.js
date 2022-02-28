import './style.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NextImg from './next.png';
import PreviousImg from './previous.png';

function Header () {

  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesError, setImagesError] = useState(null);
  const [indexOfImage, setIndexOfImage] = useState(0);

  useEffect(() => {
    try {
         axios.get('https://6218fa5181d4074e859df204.mockapi.io/hero')
          .then(res => {
            setImages(res.data)
            setLoading(false);
          })
      } catch (error) {
        setImagesError(error);
      }
  },[]);

  function previousBtn () {

    if (indexOfImage === 0 ) {
      setIndexOfImage(images.length - 1);
    } else {
      setIndexOfImage(indexOfImage - 1);
    }

  }

  function nextBtn () {
    if (indexOfImage === images.length - 1 ) {
      setIndexOfImage(0);
    } else {
      setIndexOfImage(indexOfImage + 1);
    }
  }



  return (
    <div>
      {loading && <div> Loading... </div>}
      {!loading && (
        <div className="header_wrapper wrapper">
          <div className="header_wrapper-image">
            <img src={images[indexOfImage].img} alt="image"/>
          </div>

          <div className="header_wrapper-content">
            <h1>{images[indexOfImage].title}</h1>
            <p>{images[indexOfImage].subtitle}</p>
          </div>

          <div className="header_wrapper-navigations">
            <div onClick={previousBtn} className="header_wrapper-left">
              <img className="header_wrapper-left-img" src={PreviousImg} alt="next"/>
            </div>
            <div onClick={nextBtn} className="header_wrapper-right">
              <img className="header_wrapper-right-img" src={NextImg} alt="next"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
