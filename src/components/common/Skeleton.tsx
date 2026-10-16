import { cn } from '@/utils'

export default function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('animate-pulse bg-[#ffffff1a] rounded-md', className)} {...props}></div>
}
