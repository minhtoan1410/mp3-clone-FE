import { useAnimationFrame } from '@/hooks/useAnimationFrame' // ✅ Đã sửa chính tả đường dẫn
import { useRef, useState, type RefObject, type ChangeEvent, type CSSProperties, useEffect } from 'react'

type PlayerControlsProps = {
  audioRef: RefObject<HTMLAudioElement | null>
}

export default function PlayerControls({ audioRef }: PlayerControlsProps) {
  const timeBarRef = useRef<HTMLInputElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }
    const handleTimeChange = () => {
      setTime(audio.currentTime)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeChange)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeChange)
    }
  }, [audioRef])

  // Dùng rAF để update thanh range siêu mượt (60fps) mà không ép React re-render liên tục
  useAnimationFrame(() => {
    if (audioRef.current && timeBarRef.current) {
      const currentTime = audioRef.current.currentTime
      timeBarRef.current.value = currentTime.toString()
      const percent = (currentTime / (duration || 1)) * 100
      timeBarRef.current.style.setProperty('--progress', `${percent}%`)
    }
  }, isPlaying)

  function handleIsPlaying() {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        void audioRef.current.play()
      }
      setIsPlaying((prev) => !prev)
    } catch (error) {
      console.log(error)
    }
  }

  function handleTimeBarChange(e: ChangeEvent<HTMLInputElement>) {
    const newTime = Number.parseFloat(e.target.value)
    if (!audioRef.current) return
    audioRef.current.currentTime = newTime
    setTime(newTime) // Cập nhật luôn state thời gian khi user kéo tua
  }

  function formatTime(value: number) {
    const minutes = Math.floor(value / 60)
    const seconds = Math.floor(value - minutes * 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className='flex flex-col w-[40%]'>
      <div className='flex justify-center'>
        <div className='w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-4 my-auto justify-center items-center flex'>
          <i className='icon text-[22px]'>{'\uE90E'}</i>
        </div>

        {isPlaying ? (
          <i
            className='icon text-[40px] hover:text-[#B66CE0] transition my-auto cursor-pointer'
            onClick={handleIsPlaying}
          >
            {'\u003F'}
          </i>
        ) : (
          <i
            className='icon text-[40px] hover:text-[#B66CE0] transition my-auto cursor-pointer'
            onClick={handleIsPlaying}
          >
            {'\u005F'}
          </i>
        )}

        <div className='w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-4 my-auto justify-center items-center flex'>
          <i className='icon text-[22px]'>{'\uE90D'}</i>
        </div>
      </div>

      <div className='flex items-center justify-center w-full'>
        <div className='text-[#ffffff80] w-[10%] shrink-0 text-right'>{formatTime(time)}</div>

        <input
          type='range'
          ref={timeBarRef}
          defaultValue={0}
          min={0}
          max={duration || 100}
          onChange={handleTimeBarChange}
          className='custom-range mx-2 w-[80%] h-1.5! transition cursor-pointer'
          style={
            {
              '--progress': `${(time / (duration || 1)) * 100}%`
            } as CSSProperties
          }
        />

        <div className='w-[10%] shrink-0'>{formatTime(duration)}</div>
      </div>
    </div>
  )
}
