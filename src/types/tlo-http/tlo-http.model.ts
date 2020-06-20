import {TloHttpOptions} from "./tlo-http-options";
import {TloFullResponse} from "./tlo-full-response";

export interface TloHttpModel {
  /**
   * @description This method returns only the response body. For full response use get$Response()
   */
  get: <T>(url: RequestInfo, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use get()
   */
  get$Response: <T>(url: RequestInfo, options?: TloHttpOptions) => Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use post$Response()
   */
  post: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use post()
   */
  post$Response: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use put$Response()
   */
  put: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use put()
   */
  put$Response: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use patch$Response()
   */
  patch: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use patch()
   */
  patch$Response: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<TloFullResponse<T>>;

  /**
   * @description This method returns only the response body. For full response use delete$Response()
   */
  delete: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use delete()
   */
  delete$Response: <T, U>(url: RequestInfo, body: U, options?: TloHttpOptions) => Promise<TloFullResponse<T>>;
}
