const useApiHandler = async (subUrl: string, payload?: any) => {
  const { baseURL } = useRuntimeConfig();

  const options = {
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
    ...payload,
  };

  const URL = `${baseURL}${subUrl}`;

  console.log(subUrl, options);

  return await useFetch(URL, {
    ...options,
    async onResponse({}) {
      // request, response, options
      console.log("[fetch response]");
    },
    async onResponseError({}) {
      //request, response, options
      console.log("[fetch response error]");
    },

    async onRequest({}) {
      // request, options
      console.log("[fetch request]");
    },
    async onRequestError({}) {
      //  request, options, error
      console.log("[fetch request error]");
    },
  });
};

export const useGet = (subUrl: string, options?: any) => {
  return useApiHandler(subUrl, options);
};

export const usePost = (subUrl: string, options: any, payload?: any) => {
  return useApiHandler(subUrl, { method: "POST", ...options, body: { ...payload } });
};

export const usePut = (subUrl: string, options: any, payload?: any) => {
  return useApiHandler(subUrl, { method: "PUT", ...options, body: { ...payload } });
};

export const usePatch = (subUrl: string, options: any, payload?: any) => {
  return useApiHandler(subUrl, { method: "PATCH", ...options, body: { ...payload } });
};

export const useDelete = (subUrl: string, payload?: any) => {
  return useApiHandler(subUrl, { method: "DELETE", body: { ...payload } });
};
