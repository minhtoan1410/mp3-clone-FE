import type { SongData } from '@/types'
import IconWithTooltip from './IconWithTooltip'
import { SONG } from '@/constants'

export default function Song({ id, thumbnail, title, artistsNames }: SongData) {
  function clickHandler() {
    alert(id)
  }
  return (
    <div
      className='cursor-pointer flex rounded-md gap-4 shrink-0 items-center h-20 p-2 group text-white hover:bg-[#ffffff1a] max-w-(--song-max-width) xl:w-(--song-width-xl)'
      style={
        {
          '--song-max-width': `calc((100% - ${SONG.GAP}px)/2)`,
          '--song-width-xl': `calc((100% - ${SONG.GAP * 2}px)/3)`
        } as React.CSSProperties
      }
    >
      <div
        className='relative w-15 v-15 z-2  shrink-0 overflow-hidden rounded-md text-white'
        onClick={() => clickHandler()}
      >
        <img src={thumbnail} alt='' className='w-15 h-15 object-cover transition rounded-md shrink-0' />
        <i className='icon absolute w-full h-full flex items-center justify-center inset-0 bg-[#00000040] opacity-0 group-hover:opacity-100 transition-opacity text-2xl'>
          {'\u005E'}
        </i>
      </div>

      <div>
        <h2 className=' text-[15px] line-clamp-1 hover:text-[#cd7cfc]'>{title}</h2>
        <div className='text-[#ffffff80] text-[13px] hover:text-[#B66CE0] hover:underline'>{artistsNames}</div>
      </div>

      <div className='flex flex-row'>
        <IconWithTooltip icon={'003B'} size={40} tooltipContent='Thêm vào thư viện' />
        <IconWithTooltip icon={'004A'} size={40} tooltipContent='Khác' />
      </div>
    </div>
  )
}
