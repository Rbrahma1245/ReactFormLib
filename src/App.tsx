import React from "react";
import "./App.css";
import * as yup from "yup";
import ReactForm from "./components/ReactForm";
import { CheckboxFieldProps } from "./components/CheckBox";
import { Option } from "./components/Types";
import { RadioFieldProps } from "./components/Radio";
import { SelectFProps } from "./components/SelectField";
import { SwitchFieldProps } from "./components/Switch";
import { FileInputField } from "./components/FileInput";

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

  const bookoptions: Option[] = [
    { value: "book1", label: "Book1" },
    { value: "book2", label: "Book2" },
    { value: "book3", label: "Book3" },
  ];
  const genderoptions: Option[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const languageoptions: Option[] = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "french", label: "French" },
  ];

  const CheckBoxFP: CheckboxFieldProps = {
    name: "books",
    options: bookoptions,
    header: "Select books",
    helperText: "Select one or more option",
    column: false,
  };

  const RadioFP: RadioFieldProps = {
    name: "gender",
    options: genderoptions,
    header: "Select gender",
    helperText: "Select any one option",
    column: true,
  };

  const SelectFP: SelectFProps = {
    name: "language",
    options: languageoptions,
    header: "Select Gender",
    emptyItem: "Select something",
    helperText: "Select any one option",
  };

  const SwitchFP: SwitchFieldProps = {
    name: "switch",
    header: "Toggle",
    helperText: "Click for toggle",
  };

  const FileInputFP: FileInputField = {
    name: "file",
    header: "Select",
    helperText: "Select any files",
    multiple: true,
  };

  const myConfig = [
    {
      type: "checkbox",
      fieldProps: CheckBoxFP,
      valueKey: "books",
    },
    {
      type: "radio",
      fieldProps: RadioFP,
      valueKey: "gender",
    },
    {
      type: "select",
      fieldProps: SelectFP,
      valueKey: "languages",
    },

    {
      type: "switch",
      fieldProps: SwitchFP,
      valueKey: "toggle",
    },

    {
      type: "file",
      fieldProps: FileInputFP,
      valueKey: "files",
    },
    {
      type: "text",
      valueKey: "name",
      fieldProps: {
        header: "header",
      },
    },
  ];

  const myInitialValues = {};

  return (
    <div>
      <ReactForm
        config={myConfig}
        initialValues={myInitialValues}
        // validationSchema={FormSchema}
        onSubmit={(values: object) => {
          console.log(values);
        }}
      />
    </div>
  );
};

export default App;
