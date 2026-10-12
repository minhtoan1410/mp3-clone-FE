import { useEffect, useRef } from 'react'
type AnimationCallback = (timestamp: number) => void

export function useAnimationFrame(callback: AnimationCallback, isActive: boolean) {
  const savedCallback = useRef<AnimationCallback>(callback)
  const reqIdRef = useRef<number | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    // Nếu không active thì không làm gì cả (hoặc tự động cleanup qua hàm return bên dưới)
    if (!isActive) return

    const handleAnimationFrame = (timestamp: number) => {
      //thực thi callback
      //tham số timestamp truyền hay ko cũng đc
      savedCallback.current(timestamp)

      //đăng kí thực hiện frame tiếp theo
      reqIdRef.current = requestAnimationFrame(handleAnimationFrame)
    }

    //đăng kí thực hiện frame tiếp theo
    reqIdRef.current = requestAnimationFrame(handleAnimationFrame)
    // Cleanup: Tự động hủy rAF khi isActive chuyển thành false hoặc component unmount
    return () => {
      if (reqIdRef.current !== null) {
        cancelAnimationFrame(reqIdRef.current)
      }
    }
  }, [isActive])
}
