import PlayerAudio from '@models/PlayerAudio'
import ObjectUtils from '../../utils/Object'
import ArrayUtils from '../../utils/Array'
import { Howl, Howler } from 'howler'

class HowlPlayer {
  // Private static variable to hold the single instance
  private static instance: HowlPlayer = null

  private queue: PlayerAudio[]
  private player: Howl
  private volume: number = 1
  private mute: boolean = false
  private cover: string
  private playedSongs: number[]

  private constructor() {
    this.player = new Howl({
      src: [],
      autoplay: false,
      loop: false,
    })
  }
  // Public static method to provide access to the single instance
  public static getInstance() {
    if (this.instance === null) {
      this.instance = new HowlPlayer()
    }
    return this.instance
  }

  private onEnd() {}

  private onPlay() {}

  play(audio: PlayerAudio) {
    // const audioFile = window.fileAPI.getAudio(audio)
    // const audioCover = window.fileAPI.getAudio(audio)

    // this.cover = audioCover
    // this.playedSongs.push(audio.id)

    // this.player = new Howl({
    //   src: audioFile,
    //   onend: this.onEnd,
    //   onplay: this.onPlay,
    // })
    // this.player.play()
  }

  private getAudioIds() {
    // return this.queue.map((a) => a.id)
  }

  public setQueue(audios: PlayerAudio[]) {
    // const newQueue = ObjectUtils.copyObject(audios)
    // this.queue = ArrayUtils.shuffleArray(newQueue)
  }

  public addSongs(audios: PlayerAudio[]) {
    // const ids = this.getAudioIds()
    // const filter = audios.filter((a) => !ids.includes(a.id))
    // if (!!filter.length) {
    //   this.queue = this.queue.concat(filter)
    // }
    // return this
  }

  start() {
    // this.play(this.queue[0])
  }

  next() {
    // this.queue.shift()
    // if (!!this.queue.length) {
    //   return this.play(this.queue[0])
    // }

    // limpar cache de musicas tocadas e re iniciar o mix diario
  }
}

export default HowlPlayer