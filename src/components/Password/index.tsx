import { get } from "lodash";
import React from "react";
import "./styles.css";
import { FieldProps } from "../Types";

export interface TextFieldProps {
  header: string;
  name: string;
  helperText?: string;
  type?: number | string;
}

interface TextField extends FieldProps {
  fieldProps: TextFieldProps;
}

const Password: React.FC<TextField> = ({ fieldProps, formikProps }) => {
  const { header, helperText } = fieldProps;
  const fieldValue = get(formikProps, `values.value`) as "";
  const fieldError = get(formikProps, `errors.value`) as string;
  // const errorFlag = !!fieldError;

  console.log(formikProps);

  return (
    <div className="password-field">
      {header && <label className="password-header">{header}</label>}
      <div>
        <input
          type="password"
          name="value"
          value={fieldValue}
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
        />
      </div>
      {fieldError ? (
        <span className="password-fieldError">{fieldError}</span>
      ) : (
        <span className="password-helpertext">{helperText}</span>
      )}
    </div>
  );
};

export default Password;
