import { cn, getRandomKElements } from '@/utils'
import Song from './Song'
import SongSkeleton from '@/components/common/SongSkeleton'
import useApiQuery from '@/hooks/useApiQuery'
import { useState } from 'react'
interface SongsGridProps extends React.ComponentProps<'div'> {
  gap: number
  minItems: number
  maxItems: number
}
export default function SongsGrid({ gap, minItems, maxItems, className, ...props }: SongsGridProps) {
  const [offset, setOffset] = useState<number>(0)
  const { isFetching, data, refetch } = useApiQuery({
    endpoint: '/v1/api/songs',
    method: 'GET',
    apiOptions: { query: { offset, limit: 18 } },
    useQueryOptions: { refetchOnWindowFocus: false }
  })
  function handleRefresh() {
    setOffset(offset + 18)
    refetch()
  }
  return (
    <div className={className} {...props}>
      <div className='my-4 flex'>
        <div className='mr-auto font-bold text-2xl'>Gợi ý bài hát</div>
        <div
          className='bg-[#8B45CA] select-none rounded-full flex items-center py-1 pl-1 pr-3 w-fit ml-auto cursor-pointer hover:opacity-85'
          onClick={() => handleRefresh()}
        >
          <div className='icon text-[20px] mx-1'>{'\u005C'}</div>
          <div className='whitespace-nowrap text-[14px]'>LÀM MỚI</div>
        </div>
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
            <SongSkeleton key={index} className={`${index >= 6 ? 'hidden xl:flex' : 'flex'}`} />
          ))
        ) : data && data.data.length >= 9 ? (
          getRandomKElements(data.data, 9).map((e, index) => (
            <Song {...e} key={e.id} className={`${index >= 6 ? 'hidden xl:flex' : 'flex'}`} />
          ))
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  )
}
