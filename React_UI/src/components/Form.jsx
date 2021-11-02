import React, { useState } from "react";
import axios from "axios";
import { urlRead, urlCreate, urlDelete } from "../endpoints";

import arrow from "../images/ic_arrow.png";
export default function Form({ checked, setSubmited }) {
  const [validationMessage, setValidationMessage] = useState("");
  const [formData, setFormData] = useState({ email: "", domain: "" });

  React.useEffect(() => {
    extractEmailProvider(formData.email);
  }, [formData.email]);

  function sendData() {
    axios
      .post(urlCreate, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const emailValidation = (e) => {
    let formIsValid = true;
    let value = document.forms["subscription"]["email"].value;

    let re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(value) === false) {
      setValidationMessage("Please provide a valid e-mail address");
      formIsValid = false;
    } else if (!checked) {
      setValidationMessage("You must accept the terms and conditions");
      formIsValid = false;
    } else if (!value) {
      setValidationMessage("Email address is required");
      formIsValid = false;
    } else if (value.indexOf(".co", value.length - ".co".length) !== -1) {
      setValidationMessage("We are not accepting subscriptions from Colombia");
      formIsValid = false;
    } else {
      setValidationMessage("");
      formIsValid = true;
    }
    return formIsValid;
  };

  function extractEmailProvider(email) {
    const fullDomainName = email.substring(email.lastIndexOf("@") + 1);
    const provider = fullDomainName.substring(
      0,
      fullDomainName.lastIndexOf(".")
    );

    setFormData((prevState) => ({
      ...prevState,
      domain: provider,
    }));
  }

  function emailSubmit(e) {
    e.preventDefault();
    if (emailValidation()) {
      console.log(formData.email);

      sendData();
      console.log(formData);
      setSubmited(true);
      console.log("Form submitted");

      return true;
    } else {
      console.log("Form has errors.");

      return false;
    }
  }

  function handleInput(e) {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  return (
    <form
      onSubmit={emailSubmit}
      name="subscription"
      // method="post"
      // action="contact.php"
    >
      <div className="input-group">
        <input
          value={formData.email}
          onChange={handleInput}
          name="email"
          id="email"
          placeholder="Type your email address here…"
          type="text"
        />
        <button type="submit" name="submit" id="submit" className="btn">
          <img src={arrow} alt="submit" />
        </button>
      </div>
      <p>{validationMessage}</p>
    </form>
  );
}
