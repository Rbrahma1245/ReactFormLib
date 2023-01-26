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

  const fieldErrorpass = get(formikProps, `errors.confirm`) as string;
  const fieldValuepass = get(formikProps, `values.confirm`) as "";

  // const errorFlagpass = !!fieldError;
  // console.log(errorFlagpass);
  // console.log(fieldErrorpass);

  console.log(formikProps);

  return (
    <div>
      {header && <label className="header">{header}</label>}
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
        <span className="fieldError">{fieldError}</span>
      ) : (
        <span className="helpertext">{helperText}</span>
      )}
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
        <span className="fieldError">{fieldErrorpass}</span>
      ) : (
        <span className="helpertext">{helperText}</span>
      )}

      {/* {(errorFlag || helperText) && (
        <label className="label-error">
          {errorFlag ? (
            <span className="fieldError">{fieldError}</span>
          ) : (
            <label className="helpertext">{helperText} </label>
          )}
        </label>
      )} */}
    </div>
  );
};

export default Password;
