import React from 'react';
import {  Field, FieldArray } from 'formik';
import {MDBBtn} from 'mdb-react-ui-kit';

const HobbiesList = ({name}) => (
    
    <div>
    <h5 style={{color:"green"}}>Your hobbies:</h5>
          <FieldArray
            name="hobbies"
                
           render={arrayHelpers => (
              <div>
                  {console.log(arrayHelpers.form.values)}
                {arrayHelpers.form.values["hobbies"].length > 0 ? (

             arrayHelpers.form.values["hobbies"].map((hobby, index) => (
                    <div key={index}>
                      <Field name={`hobbies.${index}`} />
                      <MDBBtn
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')}
                      >
                        +
                      </MDBBtn>
                    </div>
                  ))
                ) : (
                  <MDBBtn type="button" onClick={() =>arrayHelpers.push('')}>
                    Add a hoppy
                  </MDBBtn>
                )}
                <div>
                </div>
              </div>
           )}
          />
  </div>

);

export default HobbiesList