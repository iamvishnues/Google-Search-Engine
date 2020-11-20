import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__page">
      <p className="ind">India</p>

      <hr
        style={{
          color: "black",
          backgroundColor: "grey",
          opacity: 0.3,
          height: 0.00000009,
        }}
      />
      <div className="footer__pagedisplay">
        <div className="footer__component">
          <p>Advertising</p>
          <p>Business</p>
          <p>About</p>
          <p>How Search works</p>
        </div>
        <div className="footer__componentBottom">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
