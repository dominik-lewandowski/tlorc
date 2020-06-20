import {TloHttpOptions} from "..";
import {TloHttpModel} from "..";


export class TloHttp implements TloHttpModel {
  async get<T>(url: RequestInfo, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'GET'} as unknown as RequestInit)
      .then(res => res.json());
  }
  async get$Response(url: RequestInfo, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'GET'} as unknown as RequestInit);
  }

  async post<T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'POST', body} as unknown as RequestInit)
      .then(res => res.json());
  }
  async post$Response(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'POST', body} as unknown as RequestInit);
  }

  async put(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'PUT', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async put$Response(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'PUT', body} as unknown as RequestInit)
      .then(res => res.json());
  }

  async patch<T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'PATCH', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async patch$Response(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'PATCH', body} as unknown as RequestInit)
      .then(res => res.json());
  }

  async delete<T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<T> {
    return await fetch(url, {...options, method: 'DELETE', body} as unknown as RequestInit)
      .then(res => res.json())
      .then(d => d.body);
  }
  async delete$Response(url: RequestInfo, body: BodyInit, options?: TloHttpOptions): Promise<Response> {
    return await fetch(url, {...options, method: 'DELETE', body} as unknown as RequestInit)
      .then(res => res.json());
  }
}
