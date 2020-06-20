import {TloHttpOptions} from "..";
import {TloHttpModel} from "..";


export class TloHttp implements TloHttpModel {
  async get<T>(url: RequestInfo, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'GET'} as unknown as RequestInit)
      .then(res => res.json());
  }
  async get$Response<T>(url: RequestInfo, options?: TloHttpOptions): Promise<Response & {body: T | ReadableStream | null}> {
    return await fetch(url, {...options, method: 'GET'} as unknown as RequestInit);
  }

  async post<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'POST', body} as unknown as RequestInit)
      .then(res => res.json());
  }
  async post$Response<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<Response & {body: T | ReadableStream | null}> {
    return await fetch(url, {...options, method: 'POST', body} as unknown as RequestInit);
  }

  async put<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'PUT', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async put$Response<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<Response & {body: T | ReadableStream | null}> {
    return await fetch(url, {...options, method: 'PUT', body} as unknown as RequestInit)
      .then(res => res.json());
  }

  async patch<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'PATCH', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async patch$Response<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<Response & {body: T | ReadableStream | null}> {
    return await fetch(url, {...options, method: 'PATCH', body} as unknown as RequestInit)
      .then(res => res.json());
  }

  async delete<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'DELETE', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async delete$Response<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<Response & {body: T | ReadableStream | null}> {
    return await fetch(url, {...options, method: 'DELETE', body} as unknown as RequestInit)
      .then(res => res.json());
  }
}
