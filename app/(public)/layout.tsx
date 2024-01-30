import { Toast } from "@/ui/Toast/Toast";
import { NavBar } from "../ui/NavBar/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <Toast />
      <div className="mx-auto bg-slate-900 py-2">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="mx-auto py-2">
        <div className="container mx-auto py-4">{children}</div>
      </div>
    </>
  );
}
