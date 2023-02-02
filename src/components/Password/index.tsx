import { get } from "lodash";
import React from "react";
import "./styles.scss";
import clsx from "clsx";
import { FormikFieldProps } from "../Types";
import { getFieldError } from "../../Utils";

export interface PasswordFieldProps {
  header: string;
  name: string;
  helperText?: string;
  type?: number | string;
  width?: string;
}
interface PasswordFieldsProps extends FormikFieldProps {
  fieldProps: PasswordFieldProps;
}

const Password: React.FC<PasswordFieldsProps> = (props) => {
  const { fieldProps = {} as PasswordFieldProps, formikProps } = props;

  const { header, helperText, name, width } = fieldProps;
  const fieldValue = get(formikProps, `values.${name}`) as string;
  const fieldError = getFieldError(name || "", formikProps);
  const errorFlag = !!fieldError;

  return (
    <div className="password-field">
      {header && <label className="password-header">{header}</label>}
      <div className="password-box">
        <input
          className={clsx(width == "full" ? "full" : undefined)}
          type="password"
          autoComplete="off"
          placeholder={`${header}`}
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
