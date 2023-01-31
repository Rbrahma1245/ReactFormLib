import React from "react";
import { Formik } from "formik";
import "./App.css";
import * as yup from "yup";
// import TextField, { TextFieldProps } from "./components/TextField";
// import ArrayField, { FieldArrayProps } from "./components/FieldArray";
import PhoneField from "./components/PhoneField";
import { TextFieldProps } from "./components/TextField";
// import Password, { TextFieldProps } from "./components/Password";

const fieldProps: TextFieldProps = {
  header: "Label",
  name: "fieldName",
  helperText: "Enter your text",
  type: "hello",
  width: "full",
  // itemType: "string",
};

// const confirmPassword: TextFieldProps = {
//   header: "password",
//   name: "confirm",
//   helperText: "Enter your password",
//   type: "hello",
//   width: "full",
// };

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
    fieldName: yup
      .string()

      // .matches(phoneRegExp, "Phone number is not valid")

      .required("Phone number is required"),
    // fieldName: yup
    //   .string()
    //   .min(5, "Password must be 5 characters long")
    //   .matches(/[a-z]/, "Password requires a lowercase letter")
    //   .matches(/[A-Z]/, "Password requires an uppercase letter")
    //   .matches(/[0-9]/, "Password requires a number")
    //   .matches(/[^\w]/, "Password requires a symbol")
    //   .required("Password Required"),
    // confirm: yup
    //   .string()
    //   .oneOf([yup.ref("fieldName"), null], ' "Password" did not match ')
    //   .required("Invalid"),
  });

  // const name = [
  //   {
  //     fieldName: ["apple", "orange", "mango"],
  //   },
  // ];

  // const fieldName = ["apple", "orange", "mango"];

  // const fieldName = [
  //   { fieldName: "apple", type: "fruits" },
  //   { fieldName: "mango", type: "fruits" },
  //   { fieldName: "orange", type: "fruits" },
  //   { fieldName: "kiwi", type: "fruits" },
  // ];

  // const fieldName = {
  //   fieldName: [
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
          // confirm: "",
        }}
        // initialValues={{ fieldName: ["apple", "orange", "mango"] }}
        validationSchema={FormSchema}
        // initialValues={fieldName}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(formikProp) => {
          return (
            <form className="form" onSubmit={formikProp.handleSubmit}>
              {/* <TextField formikProps={formikProp} fieldProps={fieldProps} /> */}

              {/* <Password formikProps={formikProp} fieldProps={fieldProps} />
              <Password formikProps={formikProp} fieldProps={confirmPassword} /> */}

              {/* <ArrayField formikProps={formikProp} fieldProps={fieldPropss} /> */}

              <PhoneField formikProps={formikProp} fieldProps={fieldProps} />

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
