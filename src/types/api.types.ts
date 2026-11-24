export interface ApiResponse<T> {
  message: string
  status: string
  data: T
  stack?: any
}

export type Api = {
  '/v1/api/songs/{id}': {
    GET: {
      response: { message: string; status: string; data: { sourceUrl: string }; timestamp: string }
      params: { id: string }
    }
  }
  '/v1/api/songs': {
    GET: {
      response: {
        message: string
        status: string
        data: { id: string; thumbnail: string; title: string; artistsNames: string }[]
        timestamp: string
      }
      query: { offset?: number; limit?: number }
    }
  }
  '/v1/api/section-banners': {
    GET: {
      response: {
        message: string
        status: string
        data: { id: string; thumbnail: string; tag: string; title: string; description: string }[]
        timestamp: string
      }
      query: { offset?: number; limit?: number }
    }
  }
}
export type Endpoint = keyof Api
export type Method<E extends Endpoint> = keyof Api[E]
export type Params<E extends Endpoint, M extends Method<E>> = Api[E][M] extends { params: infer P } ? P : never
export type Response<E extends Endpoint, M extends Method<E>> = Api[E][M] extends { response: infer R } ? R : undefined
export type Query<E extends Endpoint, M extends Method<E>> = Api[E][M] extends { query: infer R } ? R : never
export type Body<E extends Endpoint, M extends Method<E>> = Api[E][M] extends { body: infer R } ? R : never

export type ApiOptions<E extends Endpoint, M extends Method<E>> = (Params<E, M> extends never
  ? {}
  : { params: Params<E, M> }) &
  (Query<E, M> extends never ? {} : { query: Query<E, M> }) &
  (Body<E, M> extends never ? {} : { body: Body<E, M> })
