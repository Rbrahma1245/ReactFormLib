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

const TextField: React.FC<TextField> = ({ fieldProps, formikProps }) => {
  const { header, helperText } = fieldProps;

  const fieldValue = get(formikProps, `values.value`) as "";
  const fieldError = get(formikProps, `errors.value`) as string;
  const errorFlag = !!fieldError;

  console.log(formikProps);

  return (
    <div>
      {header && <label className="header">{header}</label>}
      <div>
        <input
          type="text"
          name="value"
          value={fieldValue}
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
        />
      </div>

      {(errorFlag || helperText) && (
        <div className="label-error">
          {errorFlag ? (
            <span className="fieldError">{fieldError}</span>
          ) : (
            <span className="helpertext">{helperText} </span>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
