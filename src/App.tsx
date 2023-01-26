import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import TextField from "./components/TextField";

const App = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        // validationSchema={FormSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(formikProp) => {
          return (
            <form className="form" onSubmit={formikProp.handleSubmit}>
              <TextField formikProps={formikProp} />

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
