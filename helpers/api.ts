const useApiHandler = async (subUrl: string, payload?: any) => {
  const config = useRuntimeConfig();

  const options = {
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
    ...payload,
  };

  const URL = `${config.public.baseUrl}${subUrl}`;

  return await useFetch(URL, {
    ...options,
    async onResponse({}) {
      // request, response, options
    },
    async onResponseError({}) {
      //request, response, options
    },

    async onRequest({}) {
      // request, options
    },
    async onRequestError({}) {
      //  request, options, error
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
