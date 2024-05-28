import { create } from "zustand";

export const Store = create((set) => ({
  barang: [],
  isLoading: false,
  getBarang: async () => {
    set({ isLoading: true });
    const response = await fetch("http://localhost:4000/api/getbarang");
    const barang = await response.json();
    await set({ barang });
    set({ isLoading: false });
  },
  detailProduct: {},

  setDetailProduct: async (id) => {
    const response = await fetch(`http://localhost:4000/api/barangid/${id}`);
    const detailProduct = await response.json();
    await set({ detailProduct });
  },
}));
