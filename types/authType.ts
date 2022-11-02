/** User Register Params Type */
export type RegisterParamsType = {
  email: string;
  password: string;
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
  token: string;
};
