import React from "react";
import { Formik, FormikValues } from "formik";
import MLFormBuilder from "./FormBuilder";
export * from "./FormBuilder";
// export * from "./ml-form-builder/lib";

export interface IReactFormProps extends FormikValues {
  //   config: Array<RowSchema>;
  formId?: string;
  //   actionConfig: IFormActionProps;
  //   formSettings?: BuilderSettingsProps;
  isInProgress?: boolean;
  isReadOnly?: boolean;
}

export const ReactForm: React.FC<IReactFormProps> = (props) => {
  //   console.log(props);
  const {
    config,
    formId = "1",
    initialValues = {},
    onSubmit,
    actionConfig,
    formSettings,
    isInProgress = false,
    isReadOnly = false,
    ...formikProps
  } = props;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        {...formikProps}
      >
        {(formikProp) => {
          //   console.log(formikProp);
          return (
            <MLFormBuilder
              schema={config}
              formId={formId}
              actionConfig={actionConfig}
              settings={{ ...formSettings, isReadOnly }}
              formikProps={formikProp}
              isInProgress={isInProgress}
            />
          );
        }}
      </Formik>
    </div>
  );
};

export default ReactForm;
