import type { SongProps } from '@/types/types'
import IconWithTooltip from './IconWithTooltip'
import { cn } from '@/utils'
import { usePlayerStore } from '@/stores/Player'

export default function Song({
  id,
  thumbnail,
  title,
  artistsNames,
  className,
  ...props
}: SongProps & React.ComponentProps<'div'>) {
  const { setCurrentSong } = usePlayerStore()
  return (
    <div
      className={cn(
        'cursor-pointer shrink-0 w-full min-w-0 flex rounded-md gap-4 items-center h-20 p-2 group text-white hover:bg-[#ffffff1a] select-none',
        className
      )}
      {...props}
    >
      <div
        className='relative w-15 v-15 z-2  shrink-0 overflow-hidden rounded-md text-white'
        onClick={() => setCurrentSong({ id, thumbnail, title, artistsNames })}
      >
        <img src={thumbnail} alt='' className='w-15 h-15 object-cover transition rounded-md shrink-0' />
        <i className='icon absolute w-full h-full flex items-center justify-center inset-0 bg-[#00000040] opacity-0 group-hover:opacity-100 transition-opacity text-2xl'>
          {'\u005E'}
        </i>
      </div>

      <div>
        <h2 className=' text-[15px] line-clamp-1 hover:text-[#cd7cfc]'>{title}</h2>
        <div className='text-[#ffffff80] line-clamp-1 text-[13px] hover:text-[#B66CE0] hover:underline'>
          {artistsNames}
        </div>
      </div>

      <div className='hidden flex-row ml-auto group-hover:flex'>
        <IconWithTooltip icon={'003B'} size={40} tooltipContent='Thêm vào thư viện' />
        <IconWithTooltip icon={'004A'} size={40} tooltipContent='Khác' />
      </div>
    </div>
  )
}
