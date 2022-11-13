import { Endpoints } from "~/api/apiConstant";
import * as authType from "~/types/authType";

/**
 * Register a user
 *
 * @param {email, password} user email, password
 * @returns {id, token}
 */
export const registerUser = async (payload: authType.RegisterParamsType): Promise<any> => {
  try {
    const SUB_URL = Endpoints.AUTH_REGISTER;
    const options = {
      key: `${SUB_URL}/register/${payload.email}`,
    };
    const res = await usePost(SUB_URL, options, payload);
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
export const loginUser = async (payload: authType.LoginParamsType): Promise<any> => {
  try {
    const SUB_URL = Endpoints.AUTH_LOGIN;
    const options = {
      key: `${SUB_URL}/login/${payload.email}`,
    };
    const res = await usePost(Endpoints.AUTH_LOGIN, options, payload);
    return res;
  } catch (err) {
    return err;
  }
};
