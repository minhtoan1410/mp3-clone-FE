import NavButton from '@/components/common/NavButton'
import zing from '@/assets/ZingMP3logo.svg'
import { NavLink } from 'react-router-dom'
function SidebarLogo() {
  return (
    <NavLink to={'/'} className='flex flex-col items-start py-6 px-6'>
      <img src={zing} alt='Zing MP3' className='h-10 w-auto' />
    </NavLink>
  )
}
export default function SideBar() {
  return (
    <nav className='text-[16px] relative h-screen w-60'>
      <div className='absolute w-full h-full bg-player-theme brightness-175 z-1 inset-0'></div>
      <div className='relative z-10'>
        <SidebarLogo></SidebarLogo>
        <NavButton label='Thư Viện' navRoute='/library' unicode={'E019'} />
        <NavButton label='Khám Phá' navRoute='/' unicode={'E905'} />
        <NavButton label='#zingchart' navRoute='/zingchart' unicode={'E902'} />
        <NavButton
          label={
            <>
              Phòng nhạc
              <span className='ml-2 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white'>LIVE</span>
            </>
          }
          navRoute='/live'
          unicode={'E016'}
        />
        <div className='mx-6 my-4 h-[0.25px] bg-[#ffffff1A]'></div>
        <NavButton label='BXH Nhạc Mới' navRoute='/ranking' unicode={'E004'} />
        <NavButton label='Chủ Đề & Thể Loại' navRoute='/hub' unicode={'E013'} />
      </div>
    </nav>
  )
}
