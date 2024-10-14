import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
