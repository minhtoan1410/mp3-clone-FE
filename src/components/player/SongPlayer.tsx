import { useRef } from 'react'

import type { SongData } from '@/types'

import SongInfo from './SongInfo'
import PlayerControls from './PlayerControls'
import VolumeControl from './VolumeControl'

// KqFpz3hPwuSG

export default function SongPlayer({ id, thumbnail, title, artistsNames }: SongData) {
  //audio

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // time

  // volume

  return (
    <div className='absolute bg-[#130C1C] border-t z-2 border-t-[#FFFFFF1A] bottom-0 left-0 right-0 w-full flex justify-between px-4 py-2 h-24 items-center cursor-pointer text-white'>
      <audio ref={audioRef} src={id}></audio>
      <SongInfo {...{ title, thumbnail, artistsNames }} />
      <PlayerControls audioRef={audioRef} />
      <VolumeControl audioRef={audioRef} />
    </div>
  )
}
