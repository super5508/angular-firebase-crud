export class StorageUtil {

  public static set(key: string, value: any) {
    localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
  }

  public static get(key: string, isObject: boolean = false) {
    const value = localStorage.getItem(key);
    return isObject ? JSON.parse(value) : value;
  }

  public static refresh(key: string) {
    localStorage.removeItem(key);
  }
}
