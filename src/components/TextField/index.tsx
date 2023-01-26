import { get } from "lodash";
import React from "react";

const TextField: React.FC = (props) => {
  const { formikProps } = props;
  const fieldValue = get(formikProps, `values.name`) || "";

  console.log(fieldValue);
  console.log(formikProps);
  return (
    <div>
      <input
        type="text"
        name="name"
        value={fieldValue}
        onBlur={formikProps.handleBlur}
        onChange={formikProps.handleChange}
      />
    </div>
  );
};

export default TextField;
