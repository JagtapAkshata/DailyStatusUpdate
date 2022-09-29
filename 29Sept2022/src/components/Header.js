import React from "react";

function Header(props) {
  const count = props.data.length;
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{count}</span>
      </div>
    </div>
  );
}

export default Header;
