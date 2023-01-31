import React, { useState } from "react";
import "../EnquiryForm/EnquiryForm.css";

export default function Enquiryform() {
  const [Enquiryform, setEnquiryform] = useState(false);

  const toggleEnquiryform = () => {
    setEnquiryform(!Enquiryform);
  };

  if(Enquiryform) {
    document.body.classList.add('active-Enquiryform')
  } else {
    document.body.classList.remove('active-Enquiryform')
  }

  return (
    <>
      <button onClick={toggleEnquiryform} className="btn-Enquiryform">
      Book Your Program
      </button>

      {Enquiryform && (
        <div className="Enquiryform">
          <div onClick={toggleEnquiryform} className="overlay"></div>
          <div className="Enquiryform-content">
            <h2>Enquiry-Form</h2>
            
            <form id="fr">
                <div className="mb-3">
                  <label for="exampleInputText" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="exampleInputText" aria-describedby="textlHelp"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address:</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputNumber" className="form-label">Phone:</label>
                  <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="numberlHelp"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputTextarea" className="form-label">Message:</label>
                  <textarea className="form-control" id="exampleInputtextarea" aria-describedby="numberlTextarea" name="message" rows="3" cols="30"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


            
            <button className="close-Enquiryform" onClick={toggleEnquiryform}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
