import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
