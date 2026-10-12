export default function TopBar() {
  return (
    <div className='flex gap-6 items-center'>
      <div className='flex gap-4'>
        <i className='icon text-white opacity-40 cursor-pointer hover:opacity-100 text-[28px]'>{'\u0025'}</i>
        <i className='icon text-white opacity-40 cursor-pointer hover:opacity-100 text-[28px]'>{'\u0022'}</i>
      </div>
      <div className='px-4 py-2 flex bg-[#2F2739] rounded-full items-center  w-full max-w-xl'>
        <i className='icon font-black text-white shrink-0 opacity-80'>{'\uE000'}</i>
        <input
          type='text'
          placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
          className='pl-2 bg-transparent placeholder-white opacity-70 text-sm outline-none w-full'
        />
      </div>
    </div>
  )
}
