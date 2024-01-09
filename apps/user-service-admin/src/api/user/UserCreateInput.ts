import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName: string;
  lastName: string;
  password: string;
  roles: InputJsonValue;
  username: string;
};
