import React from "react";
import { Field } from "formik";
import Errormassege from "./Errormassege";
import {MDBInput, MDBValidation} from "mdb-react-ui-kit";

const Fields = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(Fields) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}>
              {label}
            </label>
            <MDBValidation  noValidate>
            <MDBInput
            label={name}
              type={type}
              id={name}
              {...Fields.field}
              defaultChecked={Fields.field.value}
            />
            </MDBValidation>
            
            <Errormassege name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default Fields;