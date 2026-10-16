import { useEffect, useRef } from 'react'

import SongInfo from './SongInfo'
import PlayerControls from './PlayerControls'
import VolumeControl from './VolumeControl'
import { usePlayerStore } from '@/stores/Player'
import { songApi } from '@/api'

export default function SongPlayer() {
  const { currentSong } = usePlayerStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  if (!currentSong) {
    return
  }
  const { id, title, thumbnail, artistsNames } = currentSong
  useEffect(() => {
    const fetchSongSource = async function () {
      try {
        const source = await songApi.getSongSource(id)
        console.log({ source, id })
        if (!audioRef.current) return

        audioRef.current.src = source
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    fetchSongSource()
  })
  return (
    <div className='absolute bg-[#130C1C] border-t z-2 border-t-[#FFFFFF1A] bottom-0 left-0 right-0 w-full flex justify-between px-4 py-2 h-24 items-center cursor-pointer text-white'>
      <audio ref={audioRef}></audio>
      <SongInfo {...{ title, thumbnail, artistsNames }} />
      <PlayerControls audioRef={audioRef} />
      <VolumeControl audioRef={audioRef} />
    </div>
  )
}
