import {TloMode} from "./tlo-mode";
import {TloRedirect} from "./tlo-redirect";
import {TloCredentials} from "./tlo-credentials";
import {TloCache} from './tlo-cache';
import {TloParams} from "./tlo-params";

export interface TloHttpOptions {
  mode?: TloMode;
  cache?: TloCache;
  credentials?: TloCredentials;
  headers?: Headers;
  redirect?: TloRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: string;
  signal?: AbortSignal;
  params?: TloParams;
}
