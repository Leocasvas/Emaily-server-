import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFlieds";
import { useNavigate } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFromReview = ({ onCancel, formValues, submitSurvey }) => {
  const navigate = useNavigate();
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className=" yellow darken-3 btn-flat white-text left"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, navigate)}
        type="submit"
        className="teal btn-flat white-text right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFromReview);
