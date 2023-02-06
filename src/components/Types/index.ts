import { FormikProps } from "formik";

export interface FormikFieldProps {
  formikProps?: FormikProps<any>;
}

export interface Option {
  label: string;
  value: string;
}
