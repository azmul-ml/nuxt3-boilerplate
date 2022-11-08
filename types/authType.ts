/** User Register Params Type */
export type RegisterParamsType = {
  email: string | null;
  password: string | null;
};

/** User Register Sucessfull Response Type */
export type RegisterResponseType = {
  id: string;
  token: string;
};

/** User Login Params Type */
export type LoginParamsType = RegisterParamsType;

/** User Login Sucessfull Response Type */
export type LoginResponseType = {
  token: string | null;
};
