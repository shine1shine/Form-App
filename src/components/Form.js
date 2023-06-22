import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Countercomponent from "./count";

function Form() {
  const [nameChecked, setNameChecked] = useState(
    localStorage.getItem("nameChecked") === "true"
  );
  const [companyNameChecked, setCompanyNameChecked] = useState(
    localStorage.getItem("companyNameChecked") === "true"
  );
  const [jobTitleChecked, setJobTitleChecked] = useState(
    localStorage.getItem("jobTitleChecked") === "true"
  );
  const [companyUrlChecked, setCompanyUrlChecked] = useState(
    localStorage.getItem("companyUrlChecked") === "true"
  );
  const [MobileNoChecked, setMobileNoChecked] = useState(
    localStorage.getItem("MobileNoChecked") === "true"
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("nameChecked", nameChecked);
    localStorage.setItem("companyNameChecked", companyNameChecked);
    localStorage.setItem("jobTitleChecked", jobTitleChecked);
    localStorage.setItem("companyUrlChecked", companyUrlChecked);
    localStorage.setItem("MobileNoChecked", MobileNoChecked);
  }, [
    nameChecked,
    companyNameChecked,
    jobTitleChecked,
    companyUrlChecked,
    MobileNoChecked,
  ]);

  const handleNameChange = () => {
    setNameChecked(!nameChecked);
  };

  const handleCompanyChange = () => {
    setCompanyNameChecked(!companyNameChecked);
  };

  const handleTitleChange = () => {
    setJobTitleChecked(!jobTitleChecked);
  };

  const handleUrlChange = () => {
    setCompanyUrlChecked(!companyUrlChecked);
  };

  const handleMobileNoChange = () => {
    setMobileNoChecked(!MobileNoChecked);
  };

  function navigateHandler(e) {
    e.preventDefault();
    if (
      nameChecked ||
      companyNameChecked ||
      jobTitleChecked ||
      companyUrlChecked ||
      MobileNoChecked
    ) {
      navigate("/counter", {
        state: {
          nameChecked,
          companyNameChecked,
          jobTitleChecked,
          companyUrlChecked,
          MobileNoChecked,
        },
      });
    } else {
      console.log("Checkbox not selected");
    }
  }

  return (
    <div>
      <h3>Form App</h3>
      <p>
        Go to <Link to="/counter">Card details</Link>{" "}
      </p>{" "}
      <form>
        <label>
          Enter your name : <input type="text" />
        </label>
        <div>
          <label>
            {" "}
            <input
              value="test"
              type="checkbox"
              name="name"
              id="name"
              checked={nameChecked}
              onChange={handleNameChange}
            />
            Name
          </label>
          <label>
            {" "}
            <input
              value="test"
              type="checkbox"
              checked={companyNameChecked}
              onChange={handleCompanyChange}
            />
            Company Name
          </label>
          <label>
            {" "}
            <input
              value="test"
              type="checkbox"
              checked={jobTitleChecked}
              onChange={handleTitleChange}
            />
            Job Title
          </label>
          <label>
            {" "}
            <input
              value="test"
              type="checkbox"
              checked={companyUrlChecked}
              onChange={handleUrlChange}
            />
            Company website URL
          </label>
          <label>
            {" "}
            <input
              value="test"
              type="checkbox"
              checked={MobileNoChecked}
              onChange={handleMobileNoChange}
            />
            Mobile No.
          </label>
        </div>
      </form>
      <div className="counter">
        <Countercomponent />
        <div>
          <button type="submit" onClick={navigateHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
