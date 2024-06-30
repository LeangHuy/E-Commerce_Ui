import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getPhoto = (fileName) => {
  return `http://localhost:9090/api/v1/files?fileName=${fileName}`;
};
