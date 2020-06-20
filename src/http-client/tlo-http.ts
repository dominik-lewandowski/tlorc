import {TloHttpOptions, TloParams} from "..";
import {TloHttpModel} from "..";
import {TloFullResponse} from "..";

export class TloHttp implements TloHttpModel {

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

  private static addOptions(method: string, options?: TloHttpOptions): RequestInit {
    if (options) delete options.params;
    return {credentials: 'same-origin', redirect: 'error', method, ...options} as RequestInit;
  }

  async get<T = {}>(url: RequestInfo, options?: TloHttpOptions): Promise<T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'GET', options))
      .then(res => res.json());
  }
  async get$Response<T>(url: RequestInfo, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'GET', options));
  }

  async post<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'POST', options))
      .then(res => res.json());
  }
  async post$Response<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'POST', options));
  }

  async put<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'PUT', options))
      .then(res => res.json())
      .then(d => d.body);
  }
  async put$Response<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'PUT', options))
      .then(res => res.json());
  }

  async patch<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'PATCH', options))
      .then(res => res.json())
      .then(d => d.body);
  }
  async patch$Response<T = {}, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'PATCH', options))
      .then(res => res.json());
  }

  async delete<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'DELETE', options))
      .then(res => res.json())
      .then(d => d.body);
  }
  async delete$Response<T = null, U = {}>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>> {
    const url_ = TloHttp.createUrl(url, options ? options.params : undefined);
    return await fetch(url_, TloHttp.addOptions( 'DELETE', options))
      .then(res => res.json());
  }
}
