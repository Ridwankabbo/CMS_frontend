import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profiles: [],
  activeProfile: null,

  addProfile: (profile) =>
    set((state) => ({
      profiles: [...state.profiles, profile],
    })),

  deleteProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter(p => p.id !== id),
      activeProfile:
        state.activeProfile?.id === id ? null : state.activeProfile
    })),

  setActiveProfile: (profile) => set({ activeProfile: profile }),

  updateProfile: (updated) =>
    set((state) => ({
      profiles: state.profiles.map(p =>
        p.id === updated.id ? updated : p
      ),
      activeProfile: updated
    })),
}));
