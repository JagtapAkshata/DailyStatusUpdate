import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
const Home = (props) => {
  return (
    <>
      {/* Home Component
      <div className="add-to-cart">
        <i className="fa fa-cart-plus"></i>
      </div> */}
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__480.jpg"
            alt="img"
            width="100px"
            height="100px"
          />
        </div>
        <div className="text-wrapper item">
          <span>Mobile</span>
          <p>Price : Rs.20,000</p>
        </div>
        <div className="btn-wrapper mt-2 item">
          <button
            className="btn btn-info"
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
