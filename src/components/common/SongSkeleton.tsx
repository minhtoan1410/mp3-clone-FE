import Skeleton from '@/components/common/Skeleton'
import { cn } from '@/utils'

export default function SongSkeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('cursor-pointer shrink-0 flex rounded-md gap-4 items-center h-20 p-2 group ', className)}
      {...props}
    >
      <Skeleton className='min-w-15 min-h-15' />

      <div className='flex-1 flex-col flex min-h-15 gap-3 py-2'>
        <Skeleton className='w-full h-2' />
        <Skeleton className='w-3/5 h-2' />
      </div>
    </div>
  )
}
