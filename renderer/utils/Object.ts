export default class ObjectUtils {
  static copyObject<T>(obj: T): T {
    const copy = JSON.stringify(obj)
    return JSON.parse(copy)
  }
}
