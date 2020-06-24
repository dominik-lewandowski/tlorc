import {TloHttpOptions, TloParams, Tlorc} from "..";
import {TloHttpModel} from "..";
import {TloFullResponse} from "..";

export class TloHttp implements TloHttpModel {

  private readonly _headers: Headers;

  constructor(headers?: Headers) {
    this._headers = headers || new Headers({'Content-Type': 'application/json'});
  }

  private static createUrl(url: RequestInfo, params?: TloParams): RequestInfo {
    if (typeof url !== 'string' || !params) return url;
    return url + (url.indexOf('?') === -1 ? '?' : '&') + this.encodeParams(params);
  }

  private static encodeParams(params: TloParams): string {
    return Object.keys(params).map(key => {
      const joinedParams = Array.isArray(params[key]) ? (params[key] as string[]).join(',') : params[key] as string;
      return encodeURIComponent(key) + '=' + encodeURIComponent(joinedParams);
    }).join('&');
  }

  // GET request methods
  async get<T = {}>(url: RequestInfo, options?: TloHttpOptions): Promise<T> {
    return await this.buildRequest<T>(url, 'GET', options) as T;
  }
  async get$Full<T = {}>(url: RequestInfo, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    return await this.buildRequest<T>(url, 'GET', options, undefined, true) as TloFullResponse<T>;
  }

  // POST request methods
  async post<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await this.buildRequest<T, U>(url, 'POST', options, body) as T;
  }
  async post$Full<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    return await this.buildRequest<T, U>(url, 'POST', options, body) as TloFullResponse<T>;
  }

  // PUT request methods
  async put<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await this.buildRequest<T, U>(url, 'PUT', options, body) as T;
  }
  async put$Full<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    return await this.buildRequest<T, U>(url, 'PUT', options, body, true) as TloFullResponse<T>;
  }

  // PATCH request methods
  async patch<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await this.buildRequest<T, U>(url, 'PATCH', options, body) as T;
  }
  async patch$Full<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    return await this.buildRequest<T, U>(url, 'PATCH', options, body, true) as TloFullResponse<T>;
  }

  // DELETE request methods
  async delete<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    return await this.buildRequest<T, U>(url, 'DELETE', options, body) as T;
  }
  async delete$Full<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    return await this.buildRequest<T, U>(url, 'DELETE', options, body, true) as TloFullResponse<T>;
  }

  // instance headers getter
  get headers(): Headers {
    return this._headers;
  }

  private buildOptions<T>(method: string, options?: TloHttpOptions, body?: T): RequestInit {
    let body_;

    if (options) delete options.params;
    if (body) {
      if (Tlorc.isFile(body) || Tlorc.isBlob(body) || this.fileInContentType()) body_ = body;
      else body_ = JSON.stringify(body);
    }

    return {
      headers: this._headers,
      credentials: 'same-origin',
      redirect: 'error',
      method,
      body: body_,
      ...options
    } as RequestInit;
  }

  private buildRequest<T, U = undefined>(
    url: RequestInfo,
    method: string,
    options?: TloHttpOptions,
    body?: U,
    full?: boolean
  ): Promise<TloFullResponse<T> | T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return fetch(url_, this.buildOptions( method, options, body)).then(res => {
      if (res.ok) {
        if (full) return res;
        if (this.fileInContentType()) return res.blob();
        return res.json();
      }

      const error = new Error(res.statusText);
      throw {...error, response: res};
    });
  }

  private fileInContentType(): boolean {
    const contentType = this._headers.get('Content-Type');
    if (!contentType) return false;

    return contentType.includes('octet-stream')
      || contentType.includes('zip')
    || contentType.includes('vnd.ms-excel')
    || contentType.includes('msword')
    || contentType.includes('vnd.ms-powerpoint')
    || contentType.includes('image')
    || contentType.includes('pdf');
  }
}
