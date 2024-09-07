import { create } from "zustand";

export const usePaymentMethod = create((set) => ({
  payment_option: 0,
  setPaymentOption: (opt) => set(() => ({ payment_option: opt })),
  current_bank: 0,
  setCurrentBank: (opt) => set(() => ({ current_bank: opt })),
}));

// {
//   "orderProductRequestList": [
//     {
//       "qty": 0,
//       "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     }
//   ],
//   "paymentRequest": {
//     "receiverPhone": "string",
//     "receiverLocation": "string",
//     "transferImage": "string"
//   }
// }
