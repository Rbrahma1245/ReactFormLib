import { get } from "lodash";
import React from "react";
import "./styles.css";
import clsx from "clsx";
import { FormikFieldProps } from "../Types";
import { getFieldError } from "../../Utils";

export interface TextFieldProps {
  header: string;
  name: string;
  helperText?: string;
  type?: number | string;
  width?: string;
}

interface TextFieldsProps extends FormikFieldProps {
  fieldProps: TextFieldProps;
}

const TextField: React.FC<TextFieldsProps> = (props) => {
  const { fieldProps = {} as TextFieldProps, formikProps } = props;

  const { header, helperText, name, width } = fieldProps;
  const fieldValue = get(formikProps, `values.${name}`) as string;
  const fieldError = getFieldError(name || "", formikProps);
  const errorFlag = !!fieldError;

  return (
    <div className="text-field">
      {header && <label className="text-header">{header}</label>}
      <div className={clsx()}>
        <input
          className={clsx(width == "full" ? "full" : undefined)}
          type="text"
          name={name}
          value={fieldValue}
          onBlur={formikProps.handleBlur}
          onChange={formikProps.handleChange}
        />
      </div>

      {(errorFlag || helperText) && (
        <div className="label-error">
          {errorFlag ? (
            <span className="text-error error">{fieldError}</span>
          ) : (
            <span className="text-helper helpertext">{helperText} </span>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
