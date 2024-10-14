import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  salary?: IntNullableFilter;
  title?: StringNullableFilter;
};
