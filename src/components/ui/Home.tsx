import SectionBanner from '@/components/common/SectionBanner'
import SongsGrid from '@/components/common/SongsGrid'
import SongPlayer from '@/components/player/SongPlayer'
import { SONG_GRID } from '@/constants'

export default function Home() {
  return (
    <div>
      <SectionBanner className='my-4' />
      <SongsGrid className='my-12' gap={SONG_GRID.GAP} minItems={2} maxItems={3} />
      <SongPlayer />
    </div>
  )
}
