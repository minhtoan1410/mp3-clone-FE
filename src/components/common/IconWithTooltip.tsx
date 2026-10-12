interface IconWithTooltipProps {
  size: number
  icon: string
  tooltipContent: string
}
export default function IconWithTooltip({ size, icon, tooltipContent }: IconWithTooltipProps) {
  const iconSize = size - 24
  return (
    <div
      className='w-(--size) h-(--size) relative rounded-full p-3 hover:bg-[#ffffff3f] group/tooltip'
      style={{ '--size': `${size}px` } as React.CSSProperties}
    >
      <div className='icon absolute inset-0 flex items-center justify-center' style={{ fontSize: `${iconSize}px` }}>
        {String.fromCodePoint(Number.parseInt(icon, 16))}
      </div>
      <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col items-center z-5'>
        <span className='px-3 py-1 text-xs text-white bg-[#3b3b3b] rounded-md whitespace-nowrap'>{tooltipContent}</span>
      </div>
    </div>
  )
}
