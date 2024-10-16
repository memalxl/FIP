import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
