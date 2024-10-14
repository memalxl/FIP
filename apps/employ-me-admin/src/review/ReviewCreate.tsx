import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
