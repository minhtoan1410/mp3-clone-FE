import Skeleton from '@/components/common/Skeleton'
import { cn } from '@/utils'

export default function SectionBannerCardSkeleton({ className, ...props }: React.ComponentProps<'div'>) {
  // sm:w-(--banner-width-sm) xl:w-(--banner-width-xl)
  return (
    <div className={cn(`h-39 overflow-hidden w-full rounded-xl`, className)} {...props}>
      <Skeleton className='w-full h-full'></Skeleton>
    </div>
  )
}
