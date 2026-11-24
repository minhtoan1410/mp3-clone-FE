import Carousel from '@/components/common/Carousel'
import SectionBannerCard from '@/components/common/SectionBannerCard'
import SectionBannerCardSkeleton from '@/components/common/SectionBannerCardSkeleton'
import { BANNER, BREAKPOINTS } from '@/constants'
import useApiQuery from '@/hooks/useApiQuery'
import { getRandomKElements } from '@/utils'

export default function SectionBanner({ className, ...props }: React.ComponentProps<'div'>) {
  const { isFetching, data } = useApiQuery({
    endpoint: '/v1/api/section-banners',
    method: 'GET',
    apiOptions: { query: { offset: 0, limit: 10 } }
  })
  return (
    <div className={className} {...props}>
      {isFetching ? (
        <div className='flex' style={{ gap: `${BANNER.GAP}px` }}>
          <SectionBannerCardSkeleton />
          <SectionBannerCardSkeleton />
          <SectionBannerCardSkeleton className='hidden xl:flex' />
        </div>
      ) : data ? (
        <Carousel maxBreakpoint={BREAKPOINTS.XL} minVisibleItems={2} maxVisibleItems={3} gap={32}>
          {getRandomKElements(data.data, 8).map((e) => (
            <SectionBannerCard key={e.id} {...e} />
          ))}
        </Carousel>
      ) : (
        <div>Empty</div>
      )}
    </div>
  )
}
