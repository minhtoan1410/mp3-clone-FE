import type { SongProps } from '@/types/types'

export default function SongInfo({ thumbnail, title, artistsNames }: Partial<SongProps>) {
  return (
    <div className='flex w-[30%] min-w-0 select-none'>
      {/* thumbnail */}

      <img src={thumbnail} alt='no' className='w-16 h-16 object-cover rounded-md shrink-0' />

      {/* detail */}

      <div className='my-auto marquee-container  whitespace-nowrap overflow-hidden hover-marquee mx-2 min-w-0 w-full mask-[linear-gradient(to_right,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]'>
        {/* track */}

        <div className='marquee-track '>
          <span className='text-m font-medium mr-12'>{title}</span>

          <span className='text-m font-medium mr-12'>{title}</span>
        </div>

        {/* name */}

        <div className='text-[#ffffff80] text-sm hover:text-[#B66CE0] hover:underline'>{artistsNames}</div>
      </div>
    </div>
  )
}
