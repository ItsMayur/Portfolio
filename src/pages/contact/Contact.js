import React, { useState, useRef } from "react";

import "./contact.css";
import { Alert } from "bootstrap";

const Contact = () => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbz_Ji_Qa9XrSorvqxLXH65kQgyZc2-hAHWdDxSdfj4kACafQoBJldor4UPBDZhLFww/exec";

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        alert("Message send sucessfully.We will react to you soon.");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="Contact">
      <div className="contactLeft">
        <div className="contactHeading">
          <h1>Let's chat. </h1>
          <h1> Tell me about your project.</h1>
        </div>
        <p>Let's create something together 👋</p>
        <div className="contactMail">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.17318 2.76121C10.207 1.91879 12.4619 1.771 14.5882 2.34075C16.7145 2.91049 18.5935 4.16595 19.9335 5.91239C21.2736 7.65883 22 9.79866 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6039 15.4659C14.6942 16.4116 13.4158 17 12 17C9.23859 17 7.00001 14.7614 7.00001 12C7.00001 9.23858 9.23859 7 12 7C13.1256 7 14.1644 7.37195 15 7.99964C15.0002 7.44752 15.4478 7 16 7C16.5523 7 17 7.44772 17 8V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12C20 10.2389 19.4189 8.52707 18.3468 7.12991C17.2748 5.73276 15.7716 4.7284 14.0706 4.2726C12.3695 3.8168 10.5656 3.93503 8.93855 4.60897C7.31153 5.2829 5.95235 6.47487 5.07181 8C4.19127 9.52514 3.83859 11.2982 4.06846 13.0442C4.29832 14.7902 5.09789 16.4116 6.34316 17.6569C7.58843 18.9021 9.2098 19.7017 10.9558 19.9316C12.7018 20.1614 14.4749 19.8087 16 18.9282C16.4783 18.6521 17.0899 18.8159 17.366 19.2942C17.6422 19.7725 17.4783 20.3841 17 20.6603C15.0936 21.7609 12.8773 22.2018 10.6948 21.9145C8.51224 21.6271 6.48553 20.6277 4.92895 19.0711C3.37236 17.5145 2.3729 15.4878 2.08557 13.3053C1.79823 11.1228 2.23909 8.90642 3.33976 7C4.44043 5.09359 6.13941 3.60363 8.17318 2.76121ZM15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15C13.6569 15 15 13.6569 15 12Z"
                fill="#c33030"
              />
            </svg>
          </div>
          <div>
            <p>
              <strong>Mail me at</strong>
            </p>
            <div>
              <a id="Email" href="mailto:its.mayur718@gmail.com">
                its.mayur718@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFlip">
        <div className="contactRightFlip"></div>
        <div className="contactRight">
          <div id="contactRightHeading">
            <h2>Send us a message</h2>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <input type="text" name="Name" id="" placeholder="Full name" />
            <input type="email" name="Email" id="" placeholder="Email" />
            <input type="number" name="Number" id="" placeholder="Number" />
            <input type="text" name="Subject" id="" placeholder="Subject" />
            <p>Tell us more about your project</p>
            <textarea
              name="MoreProjectDetails"
              id="MoreProjectDetails"
              placeholder=""
              rows="5"
            />
            <input
              type="submit"
              name="submit"
              value={loading ? "Loading..." : "Send Message"}
              id="SendMessageBtn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
