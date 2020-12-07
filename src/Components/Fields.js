import React from "react";

const Fields = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Fields;
