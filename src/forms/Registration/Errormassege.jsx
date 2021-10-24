import React from "react";
import { ErrorMessage } from "formik";

import { Alert } from "react-bootstrap";

const Errormassege = ({ name }) => {
    // const [show, setShow] = useState(true);

    return (
      <ErrorMessage name={name}>
        {(errMessage) => {
           
        //  <div style={{ color: "red" }}>{errMessage}</div>;
          return <Alert variant="danger" className="mb-1 mt-1">
          {errMessage}
        </Alert>;
        }}
      </ErrorMessage>
    );
  };
  
  export default Errormassege;