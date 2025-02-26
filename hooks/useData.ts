import useSwr from 'swr'
import endpoints from 'endpoints.json'

const baseUrl = process.env.NEXT_PUBLIC_PUBLIC_API
const fetcher = (url: string) => fetch(url).then((r) => r.json())

const configFetcher = (url: string) =>
  fetch(url, { method: 'OPTIONS' }).then((r) => r.json())

const authFetcher = (url: string, token: string) =>
  fetch(url, { headers: { Authorization: 'Bearer ' + token } }).then((r) =>
    r.json()
  )

export const useFetchData = (
  path: string | string[],
  fetcher: any,
  token?: string
) => {
  if (!path) {
    throw new Error('Path is required')
  }
  const url = `${baseUrl}${path}`
  const key = token ? [url, token] : url
  const { data, error } = useSwr(key, fetcher)

  return { data, error }
}

export const useData = (path: string) => useFetchData(path, fetcher)

export const useFormSchema = (path: string) => {
  const { data, error } = useFetchData(path, configFetcher)
  return { data: data?.actions?.POST, error }
}

export const useDataWithToken = (path: string, token: string) => {
  const { data, error } = useFetchData(path, authFetcher, token)

  return { data, error }
}

export const useUserTypeForm = () => useFormSchema(endpoints['registration'])
export const useProductsForm = () => useFormSchema(endpoints['donate/item'])
export const useServicesForm = () =>
  useFormSchema(endpoints['donate/transport_service'])
export const useVolunteeringForm = () =>
  useFormSchema(endpoints['donate/volunteering'])
