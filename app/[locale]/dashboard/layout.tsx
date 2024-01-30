import { Toast } from "@/ui/Toast/Toast";
import { NavBar } from "../../ui/NavBar/NavBar";
import { inter } from "../../ui/fonts";

import "../ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toast />
      <div className="mx-auto bg-slate-900 py-2">
        <div className="container mx-auto">Dashboard Menu</div>
      </div>
      <div className="mx-auto py-2">
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  );
}