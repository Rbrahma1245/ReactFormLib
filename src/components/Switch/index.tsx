import React from "react";
import { FormikFieldProps, Option } from "../Types/index";
import "./styles.scss";
import { get } from "lodash";
import { FormikValues } from "formik";

export interface SwitchFieldProps {
  name?: string;
  header?: string;
  helperText?: string;
  disabled?: boolean;
  nativeInputProps?: React.InputHTMLAttributes<object>;
}

interface SwithcProps extends FormikFieldProps {
  fieldProps?: SwitchFieldProps;
}

const Switch: React.FC<SwithcProps> = (props) => {
  const {
    formikProps = {} as FormikValues,
    fieldProps = {} as SwitchFieldProps,
  } = props;
  const { header, name, helperText } = fieldProps;

  const fieldValue = get(formikProps, `values.${name}`);
  const handleOnChange = () => {
    formikProps.setFieldValue(`${name}`, !fieldValue);
  };
  return (
    <div className="switch-field">
      <span className="switch-header">{header}</span>
      <label className="switch-container">
        <input
          className="slider"
          type="checkbox"
          checked={!!fieldValue}
          value={fieldValue}
          onChange={handleOnChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="helper-text helpertext">{helperText}</span>
    </div>
  );
};

export default Switch;
