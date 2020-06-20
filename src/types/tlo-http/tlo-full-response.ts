export type TloFullResponse<T> = Response & {body: T | ReadableStream | null};
