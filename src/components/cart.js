import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Cart({ message, index, props }) {
  const location = useLocation();
  const [fields, setFields] = useState({
    nameChecked: false,
    companyNameChecked: false,
    jobTitleChecked: false,
    companyUrlChecked: false,
    MobileNoChecked: false,
  });
  useEffect(() => {
    setFields(location.state);
  }, [location.state]);
  const handleChange = (event, field) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: event.target.value,
    }));
  };
  return (
    <>
      <div id={`cart-${index}`}>
        <form>
          <legend>
            <h3>{`Card ${index + 1}`}</h3>
          </legend>
          {fields.nameChecked ? (
            <div>
              <label>Name : </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={fields.name || message.name || ""}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
          ) : null}
          {fields.companyNameChecked ? (
            <div>
              <label>Company Name : </label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter Company name"
                value={fields.companyName || message.companyName || ""}
                onChange={(e) => handleChange(e, "companyName")}
              />
            </div>
          ) : null}
          {fields.jobTitleChecked ? (
            <div>
              <label>Job Title : </label>
              <input
                id="jobTitle"
                type="text"
                placeholder="Enter job Title"
                value={fields.jobTitle || message.jobTitle || ""}
                onChange={(e) => handleChange(e, "jobTitle")}
              />
            </div>
          ) : null}
          {fields.companyUrlChecked ? (
            <div>
              <label>Company Website URL : </label>
              <input
                id="companyUrl"
                type="url"
                placeholder="Enter Website URL"
                value={fields.companyUrl || message.companyUrl || ""}
                onChange={(e) => handleChange(e, "companyUrl")}
              />
            </div>
          ) : null}
          {fields.MobileNoChecked ? (
            <div>
              <label>Mobile No. </label>
              <input
                id="MobileNo"
                type="tel"
                placeholder="Enter Mobile No."
                value={fields.MobileNo || message.MobileNo || ""}
                onChange={(e) => handleChange(e, "MobileNo")}
              />
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}
