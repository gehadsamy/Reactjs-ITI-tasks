import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        // onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Please enter a valid email address")
                .required("Email field is required"),
            password: yup.string().required("Password field is required"),
        }),

    });
    return (
        <MDBContainer >
            <MDBRow className="row col-7 align-items-center mx-auto">
                <MDBCol >
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" /> Login:
                                </h3>
                            </MDBCardHeader>
                            <form onSubmit={formik.handleSubmit}>
                                <div style={{ padding: 20 }}>
                                    <MDBInput className="mb-2"
                                        label="Type your email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        icon="envelope"
                                        group
                                        error="wrong"
                                        success="right"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="m-2" style={{ color: "red" }}>{formik.errors.email}</div>
                                    )}

                                    <MDBInput className="mb-2"
                                        label="Type your password"
                                        icon="lock"
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="m-2" style={{ color: "red" }}>{formik.errors.password}</div>
                                    )}
                                    <label htmlFor="rememberMe" style={{ display: "block" }}>
                                        remember me
                                    </label>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        id="rememberMe"
                                        onChange={formik.handleChange}
                                        defaultChecked={formik.values.rememberMe}
                                    />

                                    <MDBBtn style={{ display: "block" }}>Login</MDBBtn>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <div className="font-weight-light">
                                    <a>Not a member? Sign Up</a>
                                    <a>Forgot Password?</a>
                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>


        </MDBContainer>

    );
};
export default Login;