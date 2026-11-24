import { BASE_API_URL } from '@/constants'
import type { ApiOptions, Endpoint, Method, Response } from '@/types/api.types'
export default async function apiClient<E extends Endpoint, M extends Method<E>>({
  endpoint,
  method,
  options
}: {
  endpoint: E
  method: M
  options?: ApiOptions<E, M>
}) {
  let url: string = BASE_API_URL + endpoint
  const opts = options as unknown
  if (opts && typeof opts === 'object' && 'params' in opts && typeof opts.params === 'object') {
    for (const [key, value] of Object.entries(opts.params!)) {
      url = url.replace(`{${key}}`, encodeURIComponent(String(value)))
    }
  }
  if (opts && typeof opts === 'object' && 'query' in opts && typeof opts.query === 'object') {
    const queryString = new URLSearchParams({ ...opts.query }).toString()
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString
    }
  }
  const res = await fetch(url, {
    method: method as string,
    headers: {
      'Content-Type': 'application/json'
    },
    body:
      opts && typeof opts === 'object' && 'body' in opts && typeof opts.body === 'object'
        ? JSON.stringify(opts.body)
        : undefined
  })
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`)
  }
  return (await res.json()) as Response<E, M>
}
