import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { SongProps } from '@/types/types'

interface PlayerStore {
  currentSong: SongProps | null
  isPlaying: boolean
  setCurrentSong: (song: SongProps) => void
  togglePlay: () => void
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set) => ({
      currentSong: null,
      isPlaying: false,
      setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
      togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying }))
    }),
    { name: 'player-storage' }
  )
)
