import { AxiosRequestConfig } from "axios";

export function compareObjects<T extends object>(obj1: T, obj2: T): any {
  const result: any = {};
  for (let prop in obj1) {
    if (obj2.hasOwnProperty(prop)) {
      result[prop] = obj1[prop] !== obj2[prop];
    }
  }
  return result as T;
}

export function generateConfigHeaderToken(token?: string): AxiosRequestConfig {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
