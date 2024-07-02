import winston from 'winston'
import path from 'path'
import { app } from 'electron'
import util from 'util'
import App from '../../App'
import Environment from '../../constants/environment/Environment'

const today = new Date()

const todayFilename = (name: string) => {
  return `${name}-${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}.log`
}

export const getLogPath = () => {
  const defaultLogPath = !!app ? app.getPath('logs') : App.logPath
  const userLogPath = process.env.LOG_DUMP
  if (userLogPath) {
    return userLogPath
  }
  return defaultLogPath
}

const myFormat = winston.format.printf(({ message, label, timestamp }) => {
  if (typeof message === 'object') {
    message = JSON.stringify(message)
  }
  return `(${label}) ${timestamp} -> ${util.inspect(message)}`
})

const infoLogger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.prettyPrint(),
    winston.format.splat(),
    winston.format.label({ label: 'log' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new winston.transports.File({
      dirname: path.join(getLogPath()),
      filename: todayFilename('player-log'),
      level: 'info',
    }),
  ],
})

const errorLogger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({ label: 'error' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new winston.transports.File({
      dirname: path.join(path.join(getLogPath(), 'errors')),
      filename: todayFilename('player-errors'),
      level: 'error',
    }),
  ],
})

const songLogger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({ label: 'song' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new winston.transports.File({
      dirname: path.join(path.join(getLogPath(), 'played_songs')),
      filename: todayFilename('played-songs'),
      level: 'info',
    }),
  ],
})

if (app && Environment.env === 'dev') {
  infoLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
  errorLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
  songLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

const logger = {
  info: infoLogger.info.bind(infoLogger),
  error: errorLogger.error.bind(errorLogger),
  song: songLogger.info.bind(songLogger),
}

export default logger
