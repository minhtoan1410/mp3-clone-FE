import { useEffect, useRef } from 'react'

import SongInfo from './SongInfo'
import PlayerControls from './PlayerControls'
import VolumeControl from './VolumeControl'
import { usePlayerStore } from '@/stores/Player'
import useApiQuery from '@/hooks/useApiQuery'

export default function SongPlayer() {
  const { currentSong } = usePlayerStore()
  if (!currentSong) {
    return
  }
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isFetching, data } = useApiQuery({
    endpoint: '/v1/api/songs/{id}',
    method: 'GET',
    apiOptions: { params: { id: currentSong.id } }
  })

  useEffect(() => {
    if (!data || !audioRef.current) return
    audioRef.current.src = data.data.sourceUrl
  }, [data])
  return (
    <div className='absolute bg-[#130C1C] border-t z-2 border-t-[#FFFFFF1A] bottom-0 left-0 right-0 w-full flex justify-between px-4 py-2 h-24 items-center cursor-pointer text-white'>
      <audio ref={audioRef}></audio>
      <SongInfo {...currentSong} />
      <PlayerControls key={currentSong.id} isFetching={isFetching} audioRef={audioRef} />
      <VolumeControl audioRef={audioRef} />
    </div>
  )
}
