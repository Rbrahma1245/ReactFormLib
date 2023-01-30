import { get } from "lodash";
import React from "react";
import "./styles.css";
import clsx from "clsx";
import { FieldProps } from "../Types";
import { getFieldError } from "../../Utils";

export interface TextFieldProps {
  header: string;
  name: string;
  helperText?: string;
  type?: number | string;
  width?: string;
}
interface TextField extends FieldProps {
  fieldProps: TextFieldProps;
}

const Password: React.FC<TextField> = ({ fieldProps, formikProps }) => {
  const { header, helperText, name, width } = fieldProps;
  const fieldValue = get(formikProps, `values.${name}`) as string;
  const fieldError = getFieldError(name || "", formikProps);
  const errorFlag = !!fieldError;

  return (
    <div className="password-field">
      {header && <label className="password-header">{header}</label>}
      <div>
        <input
          className={clsx(width == "full" ? "full" : undefined)}
          type="password"
          autoComplete="off"
          name={name}
          value={fieldValue}
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
        />
      </div>

      {(errorFlag || helperText) && (
        <div className="label-error">
          {errorFlag ? (
            <span className="password-error error">{fieldError}</span>
          ) : (
            <span className="password-helper helpertext">{helperText} </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Password;
