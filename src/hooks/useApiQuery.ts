import apiClient from '@/api/apiClient'
import type { ApiOptions, Response, Endpoint, Method } from '@/types/api.types'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useApiQuery<E extends Endpoint, M extends Method<E>>({
  endpoint,
  method,
  apiOptions,
  useQueryOptions
}: {
  endpoint: E
  method: M
  apiOptions?: ApiOptions<E, M>
  useQueryOptions?: Omit<UseQueryOptions<Response<E, M>>, 'queryKey' | 'queryFn'>
}) {
  const defaultQueryKey = [endpoint, method, apiOptions]
  return useQuery({
    queryKey: defaultQueryKey,
    queryFn: () => apiClient({ endpoint, method, options: apiOptions }),
    ...useQueryOptions
  })
}
