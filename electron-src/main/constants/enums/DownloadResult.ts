export enum DownloadResult {
  SUCCESS = 0,
  NETWORK_ERROR = 1,
  TIMEOUT = 2,
  STORAGE_ERROR = 3,
  NO_PATH = 4, // Audio Object with empty or null download path
}
