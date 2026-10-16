import { Route, Routes } from 'react-router-dom'

import Hub from '@/components/ui/Hub'
import Live from '@/components/ui/Live'
import Ranking from '@/components/ui/Ranking'
import ZingChart from '@/components/ui/ZingChart'
import SideBar from './SideBar'
import TopBar from './TopBar'
import Home from '@/components/ui/Home'
import Library from '@/components/ui/Library'
import SongPlayer from '@/components/player/SongPlayer'
export default function MainLayOut() {
  return (
    <div className='flex h-screen w-full overflow-hidden text-gray-200 border border-green-500 '>
      <SongPlayer />
      <SideBar />
      <div className='flex flex-1 px-14 py-4 min-w-0 flex-col overflow-x-auto  border border-red-500 custom-scrollbar'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/zingchart' element={<ZingChart />}></Route>
          <Route path='/library' element={<Library />}></Route>
          <Route path='/live' element={<Live />}></Route>
          <Route path='/ranking' element={<Ranking />}></Route>
          <Route path='/hub' element={<Hub />}></Route>
        </Routes>
      </div>
    </div>
  )
}
