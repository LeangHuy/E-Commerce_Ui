import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getPhoto = (fileName) => {
  return fileName
    ? `http://34.143.196.56:9090/api/v1/files?fileName=${fileName}`
    : "https://images.unsplash.com/photo-1630051822408-b80dde2f5681?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};
