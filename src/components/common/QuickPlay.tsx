import { BANNER } from '@/constants'
import type { QuickPlayItem } from '@/types'

export default function QuickPlay({
  id,
  thumbnail,
  tag,
  layoutType,
  isQuickPlay,
  title,
  description,
  type,
  link
}: QuickPlayItem) {
  // sm:w-(--banner-width-sm) xl:w-(--banner-width-xl)
  return (
    <div
      className={`will-change-transform h-39 flex shrink-0 px-3 py-4 relative rounded-xl overflow-hidden group cursor-pointer max-w-(--banner-max-width) xl:w-(--banner-width-xl)`}
      style={
        {
          '--banner-max-width': `calc((100% - ${BANNER.GAP}px)/2)`,
          '--banner-width-xl': `calc((100% - ${BANNER.GAP * 2}px)/3)`
        } as React.CSSProperties
      }
    >
      <img
        src={thumbnail}
        alt=''
        className='absolute inset-0 w-full rounded-xl h-full object-cover z-0 blur-xl brightness-125'
      />
      <div className='relative w-33 v-33 z-2 shrink-0 overflow-hidden rounded-xl group1' style={{}}>
        <img src={thumbnail} alt='none' className='group2 z-1 w-full h-full transition rounded-xl' />
        <i className='icon absolute w-full h-full flex items-center justify-center inset-0 bg-[#00000040] opacity-0 group-hover:opacity-100 transition-opacity text-5xl'>
          {'\u005F'}
        </i>
      </div>

      <div className='mx-4 z-1'>
        <div className='rounded-full bg-[#ffffff1A] px-2 text-[11px] italic font-bold w-fit'>{tag}</div>
        <div className='font-black text-xl line-clamp-2 overflow-hidden text-ellipsis'>{title}</div>
        <div className='line-clamp-2 text-sm my-2 overflow-hidden text-ellipsis text-[#fff6f6]'>{description}</div>
      </div>
    </div>
  )
}
