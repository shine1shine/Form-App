import React, { useState, useEffect } from "react";
import Cart from "./cart";
import { useNavigate, useLocation } from "react-router";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 0;
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setFields(location.state || []);
  }, [location.state]);

  const handleAddClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  const handleRemoveClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  function navigateHandler() {
    navigate("/");
  }

  const exportCSV = () => {
    const cartData = [];

    for (let i = 0; i < count; i++) {
      const cartInstance = document.getElementById(`cart-${i}`);
      if (!cartInstance) continue; // Skip if cart instance not found

      const name = cartInstance.querySelector("#name")?.value;
      const companyName = cartInstance.querySelector("#companyName")?.value;
      const jobTitle = cartInstance.querySelector("#jobTitle")?.value;
      const companyUrl = cartInstance.querySelector("#companyUrl")?.value;
      const MobileNo = cartInstance.querySelector("#MobileNo")?.value;

      const cartEntry = {
        name,
        companyName,
        jobTitle,
        companyUrl,
        MobileNo,
      };

      cartData.push(cartEntry);
    }

    const csvData = cartData
      .map((cartEntry) => Object.values(cartEntry).join(","))
      .join("\n");

    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`;
    link.download = "form_data.csv";
    link.click();
  };

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split("\n");
      const uploadedData = [];

      lines.forEach((line) => {
        const values = line.split(",");
        const cartEntry = {
          name: values[0] || "",
          companyName: values[1] || "",
          jobTitle: values[2] || "",
          companyUrl: values[3] || "",
          MobileNo: values[4] || "",
        };
        uploadedData.push(cartEntry);
      });

      console.log("Uploaded data:", uploadedData);

      setCount(uploadedData.length); // Update the count based on the uploaded data
      setFields(uploadedData); // Set the uploaded data to the fields state
    };

    reader.onerror = (e) => {
      console.log("Error occurred while reading the file:", e.target.error);
    };

    reader.readAsText(file);
  };

  const updateField = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    setFields(updatedFields);
  };

  return (
    <div>
      <div>
        <h3>Cart</h3>
        <p>
          Go to <a href="/">Details To be written</a>{" "}
        </p>
      </div>
      <div>
        <button onClick={handleRemoveClick}>-</button>
        {count}
        <button onClick={handleAddClick}>+</button>
      </div>
      {Array.from({ length: count }).map((_, index) => (
        <Cart
          key={index}
          index={index}
          message={fields[index] || {}}
          updateField={updateField}
        />
      ))}

      <div>
        <button onClick={exportCSV}>Export CSV</button>
        <input type="file" accept=".csv" onChange={handleCSVUpload} />
      </div>
      <div>
        <button type="submit">Submit</button>{" "}
        <button onClick={navigateHandler}>Back</button>
      </div>
    </div>
  );
};

export default Counter;
