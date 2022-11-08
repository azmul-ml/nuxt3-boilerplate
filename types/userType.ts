/** User Params Type */
export type UserType = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

/** Create User Type */
export type CreateUserType = {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
