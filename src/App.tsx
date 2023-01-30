import React from "react";
import { Formik } from "formik";
import "./App.css";
import * as yup from "yup";
import TextField, { TextFieldProps } from "./components/TextField";
import Password from "./components/Password";
// import ConfirmPassword from "./components/ConfirmPassword";

const fieldProps: TextFieldProps = {
  header: "Label",
  name: "fieldName",
  helperText: "Enter your text",
  type: "hello",
};

const confirmPassword: TextFieldProps = {
  header: "password",
  name: "confirm",
  helperText: "Enter your password",
  type: "hello",
};

const App = () => {
  const FormSchema = yup.object({
    // fieldName: yup.string().required("Invalid"),
    fieldName: yup
      .string()
      .min(5, "Password must be 5 characters long")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
    confirm: yup
      .string()
      .oneOf([yup.ref("fieldName"), null], ' "Password" did not match ')
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          fieldName: "",
          confirm: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(formikProp) => {
          return (
            <form className="form" onSubmit={formikProp.handleSubmit}>
              {/* <TextField formikProps={formikProp} fieldProps={fieldProps} /> */}

              <Password formikProps={formikProp} fieldProps={fieldProps} />
              <Password formikProps={formikProp} fieldProps={confirmPassword} />

              <button className="btn-submit" type="submit">
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
