import React from "react";
import { getFieldError } from "../../Utils";
import { FormikFieldProps, Option } from "../Types/index";
import { isString } from "lodash";
import "./styles.scss";
import { FormikValues } from "formik";

export interface SelectFProps {
  name: string;
  header?: string;
  options?: Option[];
  emptyItem?: string | boolean;
  helperText?: string;
  disabled?: boolean;
  nativeInputProps?: React.InputHTMLAttributes<object>;
}
interface SelectFieldProps extends FormikFieldProps {
  fieldProps?: SelectFProps;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { formikProps = {} as FormikValues, fieldProps = {} as SelectFProps } =
    props;
  const { name, header, options = [], emptyItem, helperText } = fieldProps;
  const fieldError = getFieldError(name, formikProps) || "";
  const emptyItemText = isString(emptyItem) ? emptyItem : "No option selected";
  const optionList = emptyItem
    ? [{ value: "", label: emptyItemText }, ...options]
    : options;

  return (
    <div className="select-field">
      <label htmlFor={name} className="select-field-header">
        {header}
      </label>
      <div className="select-container">
        <select
          id={name}
          onChange={formikProps.handleChange}
          className="select-option"
        >
          {optionList.map((it) => {
            return (
              <option key={it.value} value={it.value}>
                {it.label}
              </option>
            );
          })}
        </select>
      </div>

      {(helperText || fieldError) && (
        <div>
          {fieldError ? (
            <span className="select-field-error error">{fieldError}</span>
          ) : (
            <span className="helper-text helpertext">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
};
export default SelectField;
