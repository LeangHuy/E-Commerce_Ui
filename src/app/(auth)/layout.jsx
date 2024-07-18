import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex justify-center items-center bg-[#D4DBE1]">
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
