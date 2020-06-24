export abstract class Tlorc {

  static isFile<T>(value: T): boolean {
    return 'File' in window && value instanceof File;
  }

  static isBlob<T>(value: T): boolean {
    return 'Blob' in window && value instanceof Blob;
  }
}
