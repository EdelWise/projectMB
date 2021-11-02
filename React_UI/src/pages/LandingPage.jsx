import React, { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Form from "../components/Form";
import Terms from "../components/Terms";
import SocialBar from "../components/SocialBar";
import successIMG from "../images/ic_success.png";

export default function LandingPage() {
  const [checked, setChecked] = useState(false);
  const [submited, setSubmited] = useState(false);

  return (
    <div className="split-screen">
      <div className="split-left">
        <Header />
        <main>
          {submited && (
            <div className="success-image">
              <img src={successIMG} alt="trophy success"></img>
            </div>
          )}
          <Heading submited={submited} />
          {!submited && (
            <>
              <Form setSubmited={setSubmited} checked={checked} />
              <Terms checked={checked} setChecked={setChecked} />
            </>
          )}

          <hr />
          <SocialBar />
        </main>
      </div>
      <div className="split-right"></div>
    </div>
  );
}
