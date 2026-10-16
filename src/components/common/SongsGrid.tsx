import { cn, getRandomKElements, sleep } from '@/utils'
import db from '@/data.json'
import Song from './Song'
import { useQuery } from '@tanstack/react-query'
import SongSkeleton from '@/components/common/SongSkeleton'
interface SongsGridProps {
  gap: number
  minItems: number
  maxItems: number
}

const jsonData = db.songs
export default function SongsGrid({ gap, minItems, maxItems }: SongsGridProps) {
  const { isFetching, data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      await sleep(500)
      return getRandomKElements(jsonData, 9)
    },
    refetchOnWindowFocus: false
  })
  const minCapacity = 6
  return (
    <div className='my-2'>
      <div
        className='bg-[#8B45CA] rounded-full flex items-center py-1 pl-1 pr-3 w-fit ml-auto cursor-pointer hover:opacity-85'
        onClick={() => {
          refetch()
        }}
      >
        <div className='icon text-[20px] mx-1'>{'\u005C'}</div>
        <div className='whitespace-nowrap text-[14px]'>LÀM MỚI</div>
      </div>

      <div
        className={cn(
          'grid grid-rows-3 w-full xl:grid-cols-[repeat(var(--max-items),minmax(0,1fr))] grid-cols-[repeat(var(--min-items),minmax(0,1fr))]'
        )}
        style={
          {
            '--max-items': `${maxItems}`,
            '--min-items': `${minItems}`,
            gap: `8px ${gap}px`
          } as React.CSSProperties
        }
      >
        {isFetching ? (
          Array.from({ length: 9 }).map((_, index) => (
            <SongSkeleton key={index} className={`${index >= minCapacity ? 'hidden xl:flex' : 'flex'}`} />
          ))
        ) : data ? (
          data.map((e, index) => (
            <Song {...e} key={e.id} className={`${index >= minCapacity ? 'hidden xl:flex' : 'flex'}`} />
          ))
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  )
}
