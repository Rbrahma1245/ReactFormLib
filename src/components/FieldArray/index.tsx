import { FormikValues } from "formik";
import { get } from "lodash";
import React from "react";
import { FieldProps } from "../Types";

export interface FieldArrayProps {
  name: string;
  helperText: string;
  id: string;
  itemType?: string;
  //   addButtonProps?: ButtonProps;
  addButtonText?: string;
  addButton?: JSX.Element;
  removeButton?: JSX.Element;
  //   removeButtonProps?: IconButtonProps;
  //   textFieldProps?: TextFieldProps;
  onAddButtonClick?: () => Promise<any | undefined>;
  onRemoveButtonClick?: (index: number) => Promise<boolean>;
}
export interface FieldsArrayProps extends FieldProps {
  fieldProps?: FieldArrayProps;
}

const FieldArray: React.FC<FieldsArrayProps> = (props) => {
  const {
    fieldProps = {} as FieldArrayProps,
    formikProps = {} as FormikValues,
  } = props;

  const values = get(formikProps, `values.${fieldProps.name}`);
  // console.log(values);

  console.log(fieldProps);
  console.log(formikProps);

  return (
    <div>
      Field Array
      <br />
      <input
        type="text"
        name="name"
        value={values}
        onBlur={formikProps.handleBlur}
        onChange={formikProps.handleChange}
      />
    </div>
  );
};

export default FieldArray;
