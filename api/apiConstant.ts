/** Version parameter for endpoint URL */
const VERSION_URL = "/api";

/** Private endpoint URLs */
const USERS = VERSION_URL + "/users";

/** Public endpoint URLs */
const AUTH_REGISTER = VERSION_URL + "/register";
const AUTH_LOGIN = VERSION_URL + "/login";

/**
 * Enum with all api endpoints
 * @readonly
 * @enum {string}
 */
export const Endpoints = Object.freeze({
  USERS: USERS,
  AUTH_REGISTER: AUTH_REGISTER,
  AUTH_LOGIN: AUTH_LOGIN,
});

/**
 * API response status codes enum
 * @readonly
 * @enum {number}
 */
export const ResponseStatus = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  DENIED: 412,
  REDIRECT: 503,
});

/**
 * API can in some cases format the data:
 * * Objects: List of objects (recommended)
 * * Table: Table format with headers and rows (not recommended)
 */
export const APIDataFormat = Object.freeze({
  OBJECTS: "objects",
  TABLE: "table",
  XLSX: "xlsx",
});

/**
 * Default amount of record per page from API
 *
 */
export const DEFAULT_RESULTS_PER_PAGE = 20;
export const DEFAULT_ALL_RESULTS_PER_PAGE = 60;
export const PER_PAGE_SIZE = 20;

export const DEFAULT_API_PARAMS = {
  limit: DEFAULT_RESULTS_PER_PAGE,
  page: 1,
};
