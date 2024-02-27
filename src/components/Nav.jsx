import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        width={"150px"}
        className="m-3"
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
