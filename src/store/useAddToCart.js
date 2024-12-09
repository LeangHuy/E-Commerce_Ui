import { create } from "zustand";

export const useAddToCart = create((set) => ({
  cartList: [],
  addToCart: (product) =>
    set((state) => ({ cartList: [...state.cartList, product] })),
  removeAllCart: () => set({ cartList: [] }),
  updateQtyProduct: (proId) =>
    set((state) => ({
      cartList: state.cartList.map((pro) =>
        pro?.productId == proId ? { ...pro, qty: pro?.qty + 1 } : pro
      ),
    })),
  decQtyProduct: (proId) =>
    set((state) => ({
      cartList: state.cartList.map((pro) =>
        pro?.productId == proId ? { ...pro, qty: pro?.qty - 1 } : pro
      ),
    })),
  removeAllCart: () => set({ cartList: [] }),
  removeCartById: (proId) =>
    set((state) => ({
      cartList: state.cartList.filter((pro) => pro?.productId !== proId),
    })),
}));
