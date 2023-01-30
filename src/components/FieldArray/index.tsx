import { get } from "lodash";
import React from "react";
import "./styles.css";
import { FieldArray, FieldArrayRenderProps, FormikValues } from "formik";
// import clsx from "clsx";
import { FieldProps } from "../Types";
// import { getComponentConfig, getFieldError } from "../../Utils";

export interface FieldArrayProps {
  name: string;
  header: string;
  helperText: string;
  id?: string;
  itemType?: string;
  addButtonText?: string;
  addButton?: JSX.Element;
  removeButton?: JSX.Element;
  onAddButtonClick?: () => Promise<any | undefined>;
  onRemoveButtonClick?: (index: number) => Promise<boolean>;
}

interface FieldsArrayprops extends FieldProps {
  fieldProps: FieldArrayProps;
}

const ArrayField: React.FC<FieldsArrayprops> = ({
  fieldProps = {} as FieldArrayProps,
  formikProps = {} as FormikValues,
}) => {
  const {
    addButtonText = "Add",
    header,
    // helperText,
    name,
    // itemType,
    addButton,
    removeButton,
    onAddButtonClick,
    onRemoveButtonClick,
  } = fieldProps;

  const fieldValue = get(formikProps, `values.${name}`) || [];
  // console.log(fieldValue, name, get(formikProps, `values`));
  // console.log(formikProps);

  // const itemComponentConfig = getComponentConfig(itemType);

  const handleElementAdd = async (arrayHelpers: FieldArrayRenderProps) => {
    console.log(arrayHelpers);
    if (!onAddButtonClick) {
      arrayHelpers.push(fieldValue);
      return;
    }
    const res = await onAddButtonClick();
    if (res) {
      console.log("After await call");
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
    <div className="text-field">
      {header && <label className="text-header">{header}</label>}

      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <div>
            {(fieldValue || []).map(({ fieldName, type }, index: number) => (
              <div className="ttt" key={`${name}-${index}`}>
                {/* {console.log(value, index)} */}
                {React.cloneElement(<p>{fieldName}</p>, {
                  // itemComponentConfig.component
                  // name: name,
                  // itemIndex: index,
                  // arrayHelpers,
                  // fieldValue: fieldName,
                  // formikProps,
                  // ...itemComponentConfig.props,
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
