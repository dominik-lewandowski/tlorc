import {TloHttpOptions} from "./tlo-http-options";
import {TloFullResponse} from "./tlo-full-response";

export interface TloHttpModel {
  /**
   * @description Instance headers getter
   */
  headers: Headers;
  /**
   * @description This method returns only the response body. For full response use get$Full()
   */
  get<T>(url: RequestInfo, options?: TloHttpOptions): Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use get()
   */
  get$Full<T>(url: RequestInfo, options?: TloHttpOptions): Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use post$Full()
   */
  post<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use post()
   */
  post$Full<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use put$Full()
   */
  put<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use put()
   */
  put$Full<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use patch$Full()
   */
  patch<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use patch()
   */
  patch$Full<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use delete$Full()
   */
  delete<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use delete()
   */
  delete$Full<T, U>(url: RequestInfo, body: U, options?: TloHttpOptions): Promise<TloFullResponse<T>>;
}
