import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  salary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
