import MainLayOut from './layout/MainLayout'
import Song from './components/common/Song'
import SongPlayer from './components/player/SongPlayer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const obj = {
    id: 'https://a128-z3.zmdcdn.me/71675011d9adf1224622c5c7eae49fac?authen=exp=1791298954~acl=/71675011d9adf1224622c5c7eae49fac*~hmac=ef309ca6efcca596d1c11dafe06d9bea',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/d/a/0/cda072526e88b03c5fb8066b5cfb0dee.jpg',
    title: "Gói Con Tim Làm Quà (From 'Bò Sữa Bay')",
    artistsNames: 'Nguyễn Hùng, Mounter'
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayOut />
    </QueryClientProvider>
    // <BrowserRouter>
    // </BrowserRouter>
    // <Song {...obj} />
  )
}
