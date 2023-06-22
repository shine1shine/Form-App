import { useState } from "react";
import React from "react";
import Cart from "./cart";

export default function Button(exportCSV, handleCSVUpload) {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  return (
    <div>
      <button onClick={toggleOptions}>Upload Csv</button>
      {showOptions && (
        <div>
          <button onClick={exportCSV}>Export CSV</button>
          <input type="file" accept=".csv" onChange={handleCSVUpload} />
        </div>
      )}
    </div>
  );
}
