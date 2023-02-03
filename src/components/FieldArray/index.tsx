import React from "react";
import { get } from "lodash";
import "./styles.scss";
import { FieldArray, FieldArrayRenderProps, FormikValues } from "formik";
import { FormikFieldProps } from "../Types";
import { getComponentConfig } from "../../Utils";

export interface FieldArrayProps {
  name: string;
  header: string;
  helperText: string;
  itemType?: string;
  id?: string;
  addButtonText?: string;
  addButton?: JSX.Element;
  removeButton?: JSX.Element;
  onAddButtonClick?: () => Promise<any | undefined>;
  onRemoveButtonClick?: (index: number) => Promise<boolean>;
}

interface FieldsArrayprops extends FormikFieldProps {
  fieldProps?: FieldArrayProps;
}

const ArrayField: React.FC<FieldsArrayprops> = (props) => {
  const {
    fieldProps = {} as FieldArrayProps,
    formikProps = {} as FormikValues,
  } = props;
  // console.log(fieldProps);

  const {
    addButtonText = "Add",
    header,
    // helperText,
    name,
    itemType,
    addButton,
    removeButton,
    onAddButtonClick,
    onRemoveButtonClick,
  } = fieldProps;

  const fieldValue = get(formikProps, `values.${name}`) || [];

  const itemComponentConfig = getComponentConfig(itemType);

  const handleElementAdd = async (arrayHelpers: FieldArrayRenderProps) => {
    if (!onAddButtonClick) {
      arrayHelpers.push(fieldValue);
      return;
    }
    const res = await onAddButtonClick();
    if (res) {
      arrayHelpers.push(res ?? {});
    }
  };

  const handleElementRemove = async (
    arrayHelpers: FieldArrayRenderProps,
    index: number
  ) => {
    if (!onRemoveButtonClick) {
      arrayHelpers.remove(index);
      return;
    }
    const isRemoved = await onRemoveButtonClick(index);
    if (isRemoved) arrayHelpers.remove(index);
  };

  return (
    <div className="array-field">
      {header && <label className="fieldarray-header">{header}</label>}

      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <div>
            {(fieldValue || []).map((value: any, index: number) => (
              <div className="fieldarray-box" key={`${name}-${index}`}>
                {React.cloneElement(itemComponentConfig.component, {
                  name: name,
                  itemIndex: index,
                  arrayHelpers,
                  fieldValue: value,
                  formikProps,
                  ...itemComponentConfig.props,
                })}

                {removeButton ? (
                  removeButton
                ) : (
                  <button
                    className="arrayRemoveIcon"
                    onClick={() => handleElementRemove(arrayHelpers, index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            {addButton ? (
              addButton
            ) : (
              <button
                type="button"
                className="arrayAddIcon"
                onClick={() => handleElementAdd(arrayHelpers)}
              >
                {addButtonText}
              </button>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default ArrayField;
