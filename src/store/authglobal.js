import { create } from "zustand";

export const globalEmail = create((set) => ({
  email: "",
  setEmail: (newValue) => set({ email: newValue }),
}));
