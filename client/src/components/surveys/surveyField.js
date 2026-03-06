import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      {error && touched && (
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default SurveyField;
