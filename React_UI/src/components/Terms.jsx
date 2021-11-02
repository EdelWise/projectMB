import React from "react";

export default function Terms({ checked, setChecked }) {
  return (
    <div className="tos">
      <input
        onChange={() => setChecked(!checked)}
        checked={checked}
        className="tos-checkbox"
        type="checkbox"
        name="terms-of-service"
      ></input>
      <label htmlFor="tos" className="tos-label">
        I agree to <a href="/"> terms of service</a>
      </label>
    </div>
  );
}
