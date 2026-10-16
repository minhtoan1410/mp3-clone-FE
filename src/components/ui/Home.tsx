import SongsGrid from '@/components/common/SongsGrid'
import { SONG } from '@/constants'

export default function Home() {
  // const items: QuickPlayItem[] = data.quickPlayItems.slice(startIndex, startIndex + 6)
  // const { XL } = BREAKPOINTS
  return <SongsGrid gap={SONG.GAP} minItems={2} maxItems={3} />
  // <Carousel maxBreakpoint={XL} minVisibleItems={2} maxVisibleItems={3} gap={32}>
  //   {items.map((e) => (
  // <QuickPlay key={e.id} {...e} />
  //   ))}
  // </Carousel>
}
