import { $fetch, FetchOptions } from 'ohmyfetch'

const useApiHandler = (url: string, payload?: FetchOptions) => {
  const config = useRuntimeConfig();

  const options: FetchOptions = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache'
    },
   ...payload
  }

  return $fetch(`${config.baseUrl}${url}`, {
    ...options,
    async onResponse({ request, response, options }) {
      console.log('[fetch response]')
    },
    async onResponseError({ request, response, options }) {
      console.log('[fetch response error]')
    },

    async onRequest({ request, options }) {
      console.log('[fetch request]')
    },
    async onRequestError({ request, options, error }) {
      console.log('[fetch request error]')
    }
  })
}


export const useGet = (url: string, options?: FetchOptions) => {
    return useApiHandler(url, options)
}

export const usePost = (url: string, payload?: any) => {
  return useApiHandler(url, { method: 'POST', body: {...payload} })
}

export const usePut = (url: string, payload?: any) => {
  return useApiHandler(url, { method: 'PUT', body: {...payload} })
}

export const usePatch = (url: string, payload?: any) => {
  return useApiHandler(url, { method: 'PATCH', body: {...payload} })
}

export const useDelete = (url: string, payload?: any) => {
  return useApiHandler(url, { method: 'DELETE', body: {...payload} })
}