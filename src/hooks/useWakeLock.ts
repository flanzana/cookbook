import { useEffect, useState } from "react"

type WakeLockType = "screen"
type WakeLockSentinel = {
  release: () => Promise<void>
  type: WakeLockType
  addEventListener: (event: "release", callback: () => void) => void
  removeEventListener: (event: "release", callback: () => void) => void
}

const useWakeLock = () => {
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null)
  const [isSupported, setIsSupported] = useState<boolean>(false)

  useEffect(() => {
    // wakeLock is not supported by all browsers
    setIsSupported("wakeLock" in navigator)
  }, [])

  const toggleWakeLock = async () => {
    if (!isSupported) return

    if (wakeLock) {
      await wakeLock.release()
      setWakeLock(null)
    } else {
      try {
        const lock = (await navigator.wakeLock.request("screen")) as WakeLockSentinel
        setWakeLock(lock)
        lock.addEventListener("release", () => setWakeLock(null))
      } catch (err) {
        console.error("Wake Lock Error:", err)
      }
    }
  }

  return { toggleWakeLock, isSupported, isLocked: !!wakeLock }
}

export default useWakeLock
