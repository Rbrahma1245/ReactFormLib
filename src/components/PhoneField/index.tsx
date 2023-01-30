import React from "react";
import { FieldProps } from "../Types";
import { get } from "lodash";

export interface PhoneFieldProps {
  name?: string;
  countryCodeProps?: SelectProps;
  countryCodeLabel?: string;
  countryCodeFormControlProps?: FormControlProps;
  countryCodeLabelProps?: InputLabelProps;
  phoneNumberProps?: TextFieldProps;
  phoneLabel?: string;
  countryCodeContainerProps: BoxProps;
  phoneContainerProps: BoxProps;
  emptyItem?: string | boolean;
  emptyItemText?: string;
  renderOption?: (country: CountryCodeFormat, index?: number) => JSX.Element;
}

export interface PhoneFieldProps extends FieldProps {
  fieldProps?: PhoneFieldProps;
}

const PhoneField: React.FC<PhoneFieldProps> = ({ formikProps, fieldProps }) => {
  const value = (get(formikProps, `values.${fieldProps.name}`) || "") as string;
  return <div>PHONE FIELD</div>;
};

export default PhoneField;
