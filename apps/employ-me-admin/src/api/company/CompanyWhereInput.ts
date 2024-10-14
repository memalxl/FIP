import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
