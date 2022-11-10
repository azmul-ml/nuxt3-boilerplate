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
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
};
