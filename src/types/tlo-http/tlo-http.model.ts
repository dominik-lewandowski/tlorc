import {TloHttpOptions} from "./tlo-http-options";

export interface TloHttpModel {
  /**
   * @description This method returns only the response body. For full response use get$Response()
   */
  get: <T>(url: RequestInfo, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use get()
   */
  get$Response: (url: RequestInfo, options?: TloHttpOptions) => Promise<Response>;

  /**
   * @description This method returns only the response body. For full response use post$Response()
   */
  post: <T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use post()
   */
  post$Response: (url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<Response>;

  /**
   * @description This method returns only the response body. For full response use put$Response()
   */
  put: (url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<Response>;
  /**
   * @description This method returns the full response object. To only get the response body, use put()
   */
  put$Response: (url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<Response>;

  /**
   * @description This method returns only the response body. For full response use patch$Response()
   */
  patch: <T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use patch()
   */
  patch$Response: (url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<Response>;

  /**
   * @description This method returns only the response body. For full response use delete$Response()
   */
  delete: <T>(url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<T>;
  /**
   * @description This method returns the full response object. To only get the response body, use delete()
   */
  delete$Response: (url: RequestInfo, body: BodyInit, options?: TloHttpOptions) => Promise<Response>;
}
