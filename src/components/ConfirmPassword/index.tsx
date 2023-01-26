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

const ConfirmPassword: React.FC<TextField> = ({ fieldProps, formikProps }) => {
  const { header, helperText } = fieldProps;

  const fieldErrorpass = get(formikProps, `errors.confirm`) as string;
  const fieldValuepass = get(formikProps, `values.confirm`) as "";

  console.log(formikProps);

  return (
    <div className="confirmpassword">
      {header && <label className="confirm-password-header">{header}</label>}
      <div>
        <input
          type="password"
          name="confirm"
          value={fieldValuepass}
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
        />
      </div>
      {fieldErrorpass ? (
        <span className="confirmpassword-fieldError">{fieldErrorpass}</span>
      ) : (
        <span className="confirmpassword-helpertext">{helperText}</span>
      )}
    </div>
  );
};

export default ConfirmPassword;
