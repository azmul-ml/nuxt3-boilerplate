import { Endpoints } from "~/api/apiConstant";
import * as userType from "~/types/userType";

/**
 * Get all users
 *
 * @returns {id, email, first_name, last_name, avatar}
 */
export const fetchUsers = async (): Promise<userType.UserType[]> => {
  try {
    const res = await useGet(Endpoints.USERS);
    return res.data;
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
export const createUser = async (
  payload: userType.CreateUserType
): Promise<userType.UserType> => {
  try {
    const res = await usePost(Endpoints.USERS, payload);
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
export const getUserById = async (id: string): Promise<userType.UserType> => {
  try {
    const res = await useGet(Endpoints.USERS + "/" + id);
    return res.data;
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
export const updateUser = async (
  id: string,
  payload: userType.CreateUserType
): Promise<userType.UserType> => {
  try {
    const res = await usePatch(`${Endpoints.USERS}/${id}`, payload);
    return res;
  } catch (err) {
    return err;
  }
};
