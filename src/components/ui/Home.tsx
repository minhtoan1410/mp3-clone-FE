import data from '@/data.json'
import Carousel from '../common/Carousel'
import type { QuickPlayItem } from '@/types'
import { BREAKPOINTS, SONG } from '@/constants'
import QuickPlay from '../common/QuickPlay'
import SongsGrid from '@/components/common/SongsGrid'
import Song from '../common/Song'
export default function Home() {
  // const items: QuickPlayItem[] = data.quickPlayItems.slice(startIndex, startIndex + 6)
  const { XL } = BREAKPOINTS
  return <SongsGrid gap={SONG.GAP} maxBreakpoint={XL} minVisibleItems={2} maxVisibleItems={3} />
  // <Carousel maxBreakpoint={XL} minVisibleItems={2} maxVisibleItems={3} gap={32}>
  //   {items.map((e) => (
  //     <QuickPlay key={e.id} {...e} />
  //   ))}
  // </Carousel>
}
