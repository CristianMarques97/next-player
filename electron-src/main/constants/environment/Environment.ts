import { app } from 'electron'

export function getVar<T>(variable: string,defaultValue?: T,): T {
  const local = process.env[variable] || defaultValue
  if (!!local) {
    return JSON.parse(process.env[variable] || `${defaultValue}`)
  }
  return null
}

const env = (): 'dev' | 'staging' | 'prod' => {
  if (app.isPackaged || !process.env.DEV_MODE) {
    return process.env.PRERELEASE ? 'staging' : 'prod'
  }
  return 'dev'
}

export default class Environment {
  static env = env()
  static api = getVar('API', '')
  static spotifyApi = getVar('SPOTIFY_API', '')
  static AppPort = getVar('NEXT_PORT', 3000)
}
