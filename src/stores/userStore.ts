import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

type Store = {
  confirmUserAuth: () => void
  resetUserAuth: () => void
  isAuthenticated: boolean
}

export const useUserStore = create<Store>()(
  persist(
    (set) => ({
      confirmUserAuth: () => {
        set({
          isAuthenticated: true,
        })
      },
      resetUserAuth: () => {
        set({
          isAuthenticated: false,
        })
      },
      isAuthenticated: false,
    }),
    {
      storage: createJSONStorage(() => localStorage),
      name: 'user-storage',
    }
  )
)
