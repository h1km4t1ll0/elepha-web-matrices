import { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import { AudioPlayerProps } from '@/shared/audioPlayer/types.js'
import RepeatIcon from '@/shared/assets/song-repeat.svg'
import NoRepeatIcon from '@/shared/assets/song-no-repeat.svg'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Hls = require('hls.js')

const repeatContainerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f1f3f4',
  width: '10%',
  marginLeft: '-20px',
  paddingRight: '15px',
  borderRadius: '0 27px 27px 0',
  position: 'relative'
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ url }) => {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [repeat, setRepeat] = useState<boolean>()

  // url = 'http://playertest.longtailvideo.com/adaptive/bbbfull/bbbfull.m3u8'

  useEffect(() => {
    let hls: typeof Hls | null = null
    if(Hls.isSupported() && audio) {
      hls = new Hls()

      hls.loadSource(url)
      hls.attachMedia(audio.current)
    }
    else if (audio.current?.canPlayType('application/vnd.apple.mpegurl')) {
      audio.current.src = url
    }

    return () => hls?.dispose?.()
  }, [url, audio])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!audio.current) return
      if ((audio.current.duration || 0) - (audio.current.currentTime || 0) < 0.1) {
        if (repeat) {
          audio.current.currentTime = 0
          audio.current.play().then()
        } else {
          audio.current.pause()
        }
      }
    }, 100)

    return () => clearInterval(interval)
  }, [repeat])


  return <div style={{ display: 'flex' }}>
    <audio ref={audio} controls style={{ width: '150%', zIndex: 5 }} loop={true}></audio>
    <div style={repeatContainerStyles}>
      <div className='playerRepeatImg'>
        <img src={repeat ? NoRepeatIcon : RepeatIcon} width='auto' height='25px'
             style={{ marginTop: 5, cursor: 'pointer' }} onClick={() => setRepeat(!repeat)} />
      </div>
    </div>
  </div>
}