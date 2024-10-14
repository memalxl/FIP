import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <TextInput label="name" source="name" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
