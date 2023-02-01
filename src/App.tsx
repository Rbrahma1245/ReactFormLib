import React from "react";
import { Formik } from "formik";
import "./App.css";
import * as yup from "yup";
import TextField, { TextFieldProps } from "./components/TextField";
import Password, { PasswordFieldProps } from "./components/Password";
import PhoneField, { PhoneFieldProps } from "./components/PhoneField";

// import ArrayField, { FieldArrayProps } from "./components/FieldArray";

const fieldProps: TextFieldProps = {
  header: "Label text",
  name: "fieldName",
  helperText: "Enter your text",
  width: "full",
  // itemType: "string",
};

const passwordProps: PasswordFieldProps = {
  header: "Password",
  name: "Password",
  helperText: "Enter your password",
  width: "full",
  // itemType: "string",
};

const confirmPassword: PasswordFieldProps = {
  header: "Confirm password",
  name: "confirmPass",
  helperText: "Confirm your password",
  width: "full",
};

const phoneProps: PhoneFieldProps = {
  header: "Label phone ",
  name: "phoneno",
  helperText: "Enter your phone no.",
  // itemType: "string",
};

// const fieldPropss: FieldArrayProps = {
//   header: "Label",
//   name: "fieldName",
//   helperText: "Enter your text",
//   itemType: "string",
// };

const App = () => {
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const FormSchema = yup.object({
    fieldName: yup.string().required("Text Required"),
    Password: yup
      .string()
      .min(5, "Password must be 5 characters long")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Password Required"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("Password"), null], ' "Password" did not match ')
      .required("Required"),
    phoneno: yup.string().required("Phone number is required"),
  });

  // const arrayfieldProps = [
  //   { fieldName: "apple", type: "fruits" },
  //   { fieldName: "mango", type: "fruits" },
  //   { fieldName: "orange", type: "fruits" },
  //   { fieldName: "kiwi", type: "fruits" },
  // ];

  // const arrayfieldProps = {
  //   arrayfieldProps: [
  //     { fieldName: "apple", type: "fruits" },
  //     { fieldName: "mango", type: "fruits" },
  //     { fieldName: "orange", type: "fruits" },
  //     { fieldName: "kiwi", type: "fruits" },
  //   ],
  // };

  return (
    <div>
      <Formik
        initialValues={{
          fieldName: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(formikProp) => {
          return (
            <form className="form" onSubmit={formikProp.handleSubmit}>
              <TextField formikProps={formikProp} fieldProps={fieldProps} />

              <Password formikProps={formikProp} fieldProps={passwordProps} />
              <Password formikProps={formikProp} fieldProps={confirmPassword} />

              <PhoneField formikProps={formikProp} fieldProps={phoneProps} />

              {/* <ArrayField formikProps={formikProp} fieldProps={arrayfieldProps} /> */}

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
