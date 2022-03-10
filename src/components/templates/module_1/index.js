import './style.css';


function ModuleOne () {
  return (
    <div className="module_one_wrapper wrapper m-wrapper">

      <div className="module_one_wrapper_left">
        <div className="module_one_wrapper_left-img">
          <img src="https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h1-img-1.jpg" alt="" />
        </div>
        <div className="module_one_wrapper_left-content">
          <p>ONLINE STORE</p>
          <h1>Meet Woo excellence</h1>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Nunc scelerisque viverra.
          </p>
          <div className="module_one_wrapper_left-content_btn">View More</div>
        </div>
      </div>

      <div className="module_one_wrapper_left">
        <div className="module_one_wrapper_left-content">
          <p>HANDMADE & NEW</p>
          <h1>Experience custom made items</h1>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Nunc scelerisque viverra.
          </p>
          <div className="module_one_wrapper_left-content_btn">View More</div>
        </div>
        <div className="module_one_wrapper_right-img">
          <img src="https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h1-img-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ModuleOne;
