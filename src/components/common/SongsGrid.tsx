import data from '@/data.json'
import { getRandomKElements } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import Song from './Song'
interface SongsGridProps {
  gap: number
  minVisibleItems: number
  maxVisibleItems: number
  maxBreakpoint: number
}

export default function SongsGrid({ gap, minVisibleItems, maxVisibleItems, maxBreakpoint }: SongsGridProps) {
  const itemsEachRow = useRef<number>(0)
  const randomSongs = getRandomKElements(data.songs, 27)
  const [currentSongs, setCurrentSongs] = useState(getRandomKElements(randomSongs, 9))
  const gridRef = useRef<HTMLDivElement | null>(null)
  function handleResize() {
    if (!gridRef.current) return
    if (gridRef.current.clientWidth >= maxBreakpoint) {
      itemsEachRow.current = 3
    } else {
      itemsEachRow.current = 2
    }
  }
  useEffect(() => {
    if (!gridRef.current) return
    if (gridRef.current.clientWidth >= maxBreakpoint) {
      itemsEachRow.current = 3
    } else {
      itemsEachRow.current = 2
    }
    const observer = new ResizeObserver(() => handleResize())
    observer.observe(gridRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div
      ref={gridRef}
      className='grid grid-rows-3 grid-cols-(--grid-column) w-full'
      style={{ '--grid-column': `${itemsEachRow.current}` } as React.CSSProperties}
    >
      {currentSongs.map((e) => (
        <Song {...e} />
      ))}
    </div>
  )
}
