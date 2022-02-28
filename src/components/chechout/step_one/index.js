import './style.css'

function StepOne () {
  return (
    <div className="checkout_step_one_wrapper wrapper">

      <h2>Fill in your shipping details:</h2>

      <div className="checkout_step_one_wrapper-details">

        <div className="checkout_step_one_wrapper-details-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="checkout_step_one_wrapper-details_name_surename">
          <div className="checkout_step_one_wrapper-details-first_name">
            <label htmlFor="first_name">First name</label>
            <input type="text" id="first_name" name="first_name" />
          </div>

          <div className="checkout_step_one_wrapper-details-last_name">
            <label htmlFor="last_name">Last name</label>
            <input type="text" id="last_name" name="last_name" />
          </div>
        </div>

        <div className="checkout_step_one_wrapper-details-addres">
          <label htmlFor="addres">Address</label>
          <input type="addres" id="addres" name="addres" />
        </div>

        <div className="checkout_step_one_wrapper-details-addres_two">
          <div className="checkout_step_one_wrapper-details-addres_two">
            <label htmlFor="addres">Address :<span>Optional</span></label>
            <input type="addres" id="addres" name="addres" />
          </div>

          <div className="checkout_step_one_wrapper-details-post_code">
            <label htmlFor="post_code">Post code</label>
            <input type="post_code" id="post_code" name="post_code" />
          </div>
        </div>

        <div className="checkout_step_one_wrapper-details-addres_details">
          <div className="checkout_step_one_wrapper-details-addres_details_city">
            <label htmlFor="city">City</label>
            <input type="city" id="city" name="city" />
          </div>

          <div className="checkout_step_one_wrapper-details-addres_details_city">
            <label htmlFor="region">Region <span>Optional</span></label>
            <input type="region" id="region" name="region" />
          </div>
        </div>

        <div className="checkout_step_one_wrapper-details-phone_number">
          <label htmlFor="phone_number">Phone number:</label>
          <input type="mobile" id="phone_number" name="phone_number" />
        </div>


        <div className="">

        </div>




      </div>
    </div>
  );
}

export default StepOne;
