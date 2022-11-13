import { Endpoints } from "~/api/apiConstant";
import * as userType from "~/types/userType";

/**
 * Get all users
 *
 * @returns {id, email, first_name, last_name, avatar}
 */
export const fetchUsers = async (): Promise<any> => {
  try {
    const SUB_URL = Endpoints.USERS;
    const options = {
      key: `${SUB_URL}/users`,
    };
    const res = await useGet(SUB_URL, options);
    return res;
  } catch (err) {
    return err;
  }
};

/**
 * Create a user
 *
 * @param {email, first_name, last_name, avatar} user id, email, first_name, last_name, avatar
 * @returns {id, email, first_name, last_name, avatar}
 */
export const createUser = async (payload: userType.CreateUserType): Promise<any> => {
  try {
    const SUB_URL = Endpoints.USERS;
    const options = {
      key: `${SUB_URL}/create/${payload.email}`,
    };
    const res = await usePost(SUB_URL, options, payload);
    return res;
  } catch (err) {
    return err;
  }
};

/**
 * Get a user
 *
 * @param {id} user id
 * @returns {id, email, first_name, last_name, avatar}
 */
export const getUserById = async (id: string): Promise<any> => {
  try {
    const SUB_URL = Endpoints.USERS + "/" + id;
    const options = {
      key: SUB_URL,
    };
    const res = await useGet(SUB_URL, options);
    return res;
  } catch (err) {
    return err;
  }
};

/**
 * Update a user
 *
 * @param {email, first_name, last_name, avatar} user id, email, first_name, last_name, avatar
 * @returns {id, email, first_name, last_name, avatar}
 */
export const updateUser = async (id: string, payload: userType.CreateUserType): Promise<any> => {
  try {
    const SUB_URL = Endpoints.USERS + "/" + id;
    const options = {
      key: `${SUB_URL}/update/${Math.random()}`,
    };
    const res = await usePatch(SUB_URL, options, payload);
    return res;
  } catch (err) {
    return err;
  }
};
