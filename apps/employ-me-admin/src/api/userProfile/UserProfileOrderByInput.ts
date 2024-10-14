import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
