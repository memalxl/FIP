import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <TextInput label="name" source="name" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
