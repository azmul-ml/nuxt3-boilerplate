import * as api from "~/composables/api";
import { Endpoints } from "~/api/apiConstant";
import * as authType from "~/types/authType";

/**
 * Register a user
 *
 * @param {email, password} user email, password
 * @returns {id, token}
 */
export const registerUser = async (
  payload: authType.RegisterParamsType
): Promise<authType.RegisterResponseType> => {
  try {
    const res = await api.usePost(Endpoints.AUTH_REGISTER, payload);
    return res;
  } catch (err) {
    return err;
  }
};

/**
 * Login a user
 *
 * @param {email, password} user email, password
 * @returns {token}
 */
export const loginUser = async (
  payload: authType.LoginParamsType
): Promise<authType.LoginResponseType> => {
  try {
    const res = await api.usePost(Endpoints.AUTH_LOGIN, payload);
    return res;
  } catch (err) {
    return err;
  }
};
