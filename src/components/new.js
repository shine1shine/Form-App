import React from "react";

export default function Button({ exportCSV, handleCSVUpload }) {
  return (
    <div>
      <button onClick={exportCSV}>Export CSV</button>
      <input type="file" accept=".csv" onChange={handleCSVUpload} />
    </div>
  );
}
