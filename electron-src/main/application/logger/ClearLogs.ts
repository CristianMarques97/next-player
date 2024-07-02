import { getLogPath } from "./Winston"
import path from 'path'

const findRemoveSync = require("find-remove")
const DAY = 86400
/**
 * Clear old log files with 30 days
 */
export default () => {
  const rootDir = getLogPath()
  const playedSongs = path.join(rootDir, 'played_songs')

  findRemoveSync(rootDir, { age: { seconds: DAY * 30 } })
  findRemoveSync(playedSongs, { age: { seconds: DAY * 30 } })

}
