import { create } from "zustand";
import axios from "axios";

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

  login: {},
  setLogin: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        username: username,
        password: password,
      });
      await set({ login: response.data.token });
    } catch (error) {
      console.error("Failed to login:", error);
    }
  },
}));
