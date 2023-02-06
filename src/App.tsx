import React from "react";
import "./App.css";
import * as yup from "yup";
import ReactForm from "./components/ReactForm";

const App = () => {
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const FormSchema = yup.object({
    name: yup.string().required("Text Required"),
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
    phoneNo: yup.string().required("Phone number is required"),
  });

  const myConfig = [
    {
      type: "text",
      valueKey: "name",
      fieldProps: {
        header: "Enter your Name",
        helperText: "Enter your text",
        width: "full",
        fullWidth: true,
      },
    },

    {
      type: "password",
      valueKey: "Password",
      fieldProps: {
        header: "Password",
        helperText: "Enter your password",
        // width: "full",
      },
    },

    {
      type: "password",
      valueKey: "confirmPass",
      fieldProps: {
        header: "Confirm password",
        helperText: "Confirm your password",
        // width: "full",
      },
    },
    {
      type: "phone",
      valueKey: "phoneNo",
      fieldProps: {
        header: "phone No. ",
        helperText: "Enter your phone no.",
        // itemType: "string",
      },
    },
  ];

  const myInitialValues = {};

  return (
    <div>
      <ReactForm
        config={myConfig}
        initialValues={myInitialValues}
        validationSchema={FormSchema}
        onSubmit={(values: object) => {
          console.log(values);
        }}
      />
    </div>
  );
};

export default App;
