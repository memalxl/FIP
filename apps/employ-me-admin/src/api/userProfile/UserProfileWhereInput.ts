import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
};
