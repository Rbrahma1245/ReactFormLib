import { get } from "lodash";
import { FormikValues } from "formik";

export const getFieldError = (fieldName: string, formikProps: FormikValues) => {
  const fieldError = get(formikProps, `errors.${fieldName}`);
  const isTouched = get(formikProps, `touched.${fieldName}`);
  if (!isTouched && formikProps.submitCount < 1) return "";
  return fieldError;
};
