import { useState, type RefObject } from 'react'
type VolumeControlProps = {
  audioRef: RefObject<HTMLAudioElement | null>
}
export default function VolumeControl({ audioRef }: VolumeControlProps) {
  const [volume, setVolume] = useState<number>(100)

  const [isMuted, setIsMuted] = useState(false)
  function handleVolumeChange(newVolume: number) {
    if (!audioRef.current) return

    if (!newVolume) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }

    setVolume(newVolume)

    audioRef.current.volume = newVolume / 100
  }

  function handleVolumeSeekChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(e.target.value)

    handleVolumeChange(newVolume)
  }
  return (
    <div className='flex w-[30%] flex-row-reverse pr-12 select-none'>
      <div className='flex'>
        <div className='w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-2 my-auto justify-center items-center flex'>
          {isMuted ? (
            <i className='icon flex text-[28px]' onClick={() => handleVolumeChange(100)}>
              {'\uE00A'}
            </i>
          ) : (
            <i className='icon flex text-[28px]' onClick={() => handleVolumeChange(0)}>
              {'\uE009'}
            </i>
          )}
        </div>

        <input
          type='range'
          value={volume}
          min={0}
          max={100}
          className='custom-range flex my-auto w-20 h-1!'
          onChange={handleVolumeSeekChange}
          style={
            {
              '--progress': `${volume}%`
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  )
}
