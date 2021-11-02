import React from "react";

export default function Heading({ submited }) {
  return (
    <div className="heading">
      <h1 className="main-heading">
        {submited ? "Thanks for subscribing!" : "Subscribe to newsletter"}
      </h1>
      <h3 className="sub-heading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </h3>
    </div>
  );
}
