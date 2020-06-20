import {TloMode} from "./tlo-mode";
import {TloRedirect} from "./tlo-redirect";
import {TloCredentials} from "./tlo-credentials";
import {TloCache} from './tlo-cache';

export interface TloHttpOptions {
  mode: TloMode;
  cache: TloCache;
  credentials: TloCredentials;
  headers: {[key: string]: string};
  redirect: TloRedirect;
  referrer: string;
  referrerPolicy: ReferrerPolicy;
  integrity: string;
  keepalive: string;
  signal: AbortSignal;
}
