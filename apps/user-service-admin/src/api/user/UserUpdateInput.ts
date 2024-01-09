import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string;
  lastName?: string;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
