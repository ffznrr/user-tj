import { create } from "zustand";

export const Store = create((set) => ({
  barang: [],
  getBarang: async () => {
    const response = await fetch("http://localhost:4000/api/getbarang");
    const barang = await response.json();
    await set({ barang });
  },
}));
