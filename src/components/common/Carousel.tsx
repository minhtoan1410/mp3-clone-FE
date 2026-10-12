import { useEffect, useRef, type ReactNode } from 'react'
interface CarouselProps {
  gap: number
  minVisibleItems: number
  maxVisibleItems: number
  maxBreakpoint: number
  children: ReactNode
}
export default function Carousel({ gap, minVisibleItems, maxVisibleItems, maxBreakpoint, children }: CarouselProps) {
  // const isMobile = useMobile()
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const leftSwipeCountRef = useRef(0)
  const visibleItemsCountRef = useRef(0)
  function handleSwipe(direction: string) {
    const slider = sliderRef.current
    if (!slider) {
      return
    }
    const children = Array.from(slider.children) as HTMLElement[]
    const n = children.length
    const op = direction === 'left' ? 1 : -1
    leftSwipeCountRef.current += op
    leftSwipeCountRef.current %= n
    const width = children[0].clientWidth
    const step = width + gap
    for (let i = 0; i < n; i++) {
      const child = children[i]
      //pos mới (vị trí gốc + số lần dịch qua phải)
      const newSliderPos = (i + leftSwipeCountRef.current + n) % n
      //pos mới(so với translate gốc của element)
      const newPos = newSliderPos - i

      const newTranslateX = newPos * step
      if (newSliderPos >= visibleItemsCountRef.current) {
        child.style.opacity = '0'
      } else {
        child.style.opacity = '1'
      }

      //Dieu chinh zIndex tang dan tu 0->n
      child.style.zIndex = op === 1 ? `${newSliderPos - n}` : `${Math.abs(newSliderPos - n)}`
      child.style.transform = `translateX(${newTranslateX}px)`
      //
      child.style.transition =
        op === 1
          ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease 0.3s'
          : 'transform 0.5s linear, opacity 0.2s ease 0s'
    }
  }

  function handleResize() {
    const slider = sliderRef.current
    if (!slider) return
    const viewportWidth = window.innerWidth
    if (viewportWidth >= maxBreakpoint) {
      visibleItemsCountRef.current = maxVisibleItems
    } else {
      visibleItemsCountRef.current = minVisibleItems
    }
    const children = Array.from(slider.children) as HTMLElement[]
    const n = children.length
    if (n === 0) return

    // Lấy width mới sau khi resize
    const width = children[0].clientWidth
    const step = width + gap

    // Tắt transition để UI thay đổi tức thì, không bị giật
    children.forEach((child) => (child.style.transition = 'none'))

    for (let i = 0; i < n; i++) {
      const child = children[i]
      // Tính lại vị trí dựa trên index hiện tại và width mới
      const sliderPos = (i + leftSwipeCountRef.current + n) % n

      if (sliderPos >= visibleItemsCountRef.current) {
        child.style.opacity = '0'
      } else {
        child.style.opacity = '1'
      }
      //pos mới - pos cũ * step (pos ở đây là vị trí trong slider)
      const newTranslateX = (sliderPos - i) * step
      child.style.transform = `translateX(${newTranslateX}px)`
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    const viewportWidth = window.innerWidth
    if (viewportWidth >= maxBreakpoint) {
      visibleItemsCountRef.current = maxVisibleItems
    } else {
      visibleItemsCountRef.current = minVisibleItems
    }
    const children = Array.from(slider.children) as HTMLElement[]
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (i >= visibleItemsCountRef.current) {
        child.style.opacity = '0'
      } else {
        child.style.opacity = '1'
      }
    }
    // Bắt sự kiện thay đổi kích thước của riêng thẻ div này
    const observer = new ResizeObserver(() => {
      handleResize()
    })
    observer.observe(slider)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className='relative'>
      <div
        onClick={() => handleSwipe('left')}
        className='rounded-full flex justify-center items-center w-8 h-8 absolute bg-[#25282F] z-10 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='icon '>{'\u007A'}</i>
      </div>

      <div className='flex overflow-hidden' style={{ gap: `${gap}px` }} ref={sliderRef}>
        {children}
      </div>
      <div
        onClick={() => handleSwipe('right')}
        className='rounded-full flex justify-center items-center w-8 h-8 absolute bg-[#25282F] z-10 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer'
      >
        <i className='icon '>{'\u0041'}</i>
      </div>
    </div>
  )
}
