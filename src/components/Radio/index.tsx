import { get } from "lodash";
import React from "react";
import "./styles.scss";
import clsx from "clsx";
import { FormikFieldProps } from "../Types/index";
import { getFieldError } from "../../Utils";
import { FormikValues } from "formik";

export interface Option {
  value: string;
  label: string;
}

export interface RadioFieldProps {
  options: Option[];
  name: string;
  header?: string;
  helperText?: string;
  column?: boolean;
  disabled?: boolean;
  nativeInputProps?: React.InputHTMLAttributes<object>;
}
interface RadioProps extends FormikFieldProps {
  fieldProps?: RadioFieldProps;
}

const Radio: React.FC<RadioProps> = (props) => {
  const {
    formikProps = {} as FormikValues,
    fieldProps = {} as RadioFieldProps,
  } = props;
  const { options = [], name, helperText, header, column } = fieldProps;
  const fieldValue: string = get(formikProps, `values.${name}`) || "";

  const fieldError = getFieldError(name, formikProps) as string;

  return (
    <div className={clsx("radio-field", name)}>
      {<span className="radio-header">{header}</span>}
      <div className={clsx("radio-container", column ? "column" : undefined)}>
        {options.map((it) => (
          <span key={it.value} className="radio-label">
            <input
              className="radio-input"
              type="radio"
              name={name}
              value={it.value}
              checked={fieldValue === it.value}
              onChange={formikProps.handleChange}
            />
            {it.label}
          </span>
        ))}
      </div>

      {(fieldError || helperText) && (
        <span>
          {fieldError ? (
            <span className="radio-error error">{fieldError}</span>
          ) : (
            <span className="helper-text helpertext">{helperText}</span>
          )}
        </span>
      )}
    </div>
  );
};
export default Radio;
