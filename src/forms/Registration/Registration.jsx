import { Formik, Form, Field, ErrorMessage } from "formik";
import Fields from "./Fields";
import ArrayField from "./ArrayField.jsx"
import * as yup from "yup";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBIcon} from 'mdb-react-ui-kit';


const RegisterForm = () => {
    const initialValues = {
        userName:'',
    email: "",
    password: "",
    confirmPass:"",
    gender: "",
    hobbies:[],
    active: false,

  };
  const onSubmit=(values) =>{
      setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
      };     
  const validationSchema = yup.object({
      userName:yup.string().required("This field is required"),
        email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    confirmPass:yup
    .string()
    .required()
    .oneOf([yup.ref("password"),null], "it doesn't match your password"),
    gender: yup.string().required(),
    active: yup.string().required(),
  });

    return (
        <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >{(formik) => {
        return (
<MDBContainer>
<Form className="row col-7 align-items-center mx-auto">
      <MDBRow>
        <MDBCol>
          <MDBCard className="text-center h-25">
            <div className="pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  sign up
                </h3>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
                  <MDBIcon fab className="fa-twitter white-text fa-lg p-3" />
                  <MDBIcon fab className="fa-google-plus-g white-text fa-lg p-1" />
                </a>
           
              </MDBRow>
            </div>
</MDBCard>
</MDBCol>
</MDBRow>


         
                <div style={{ padding: 20 }}>
                    <Fields  name="userName" type="text" />
                    <Fields  name="email" type="email" />
                    <Fields  name="password" type="password" />
                    <Fields  name="confirmPass" type="password" />
                     {/* Gender */}
                    <Field name="gender">
                        {(Fields) => {
                            return (
                                <>
                                    <label htmlFor="gender" style={{ display: "block" }} >Gender </label>
                                    <select name="gender" id="gender" {...Fields.gender}>
                                        <option value="">Select...</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                    
                                    <ErrorMessage name="gender">
                                        {(errMessage) => {
                                            return (
                                            <div style={{ color: "red" }}>{errMessage}</div>
                                            );
                                        }}
                                    </ErrorMessage>
                                </> 
                            )
                        }}
                    </Field>
                    <Fields label="Active" name="active" type="checkBox" />
                    <ArrayField name="hobbies"/> 
                    <MDBBtn style={{ display: "block" }}>submit</MDBBtn>
                </div>
            </Form>
            </MDBContainer>
        )}
    }</Formik>
    
  );
}

export default RegisterForm;