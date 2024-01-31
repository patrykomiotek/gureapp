import { Toast, NavBar } from "@ui";

type Props = {
  children: React.ReactNode;
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  // admin: React.ReactNode;
};

export default function PublicLayout({ children, mobile, desktop }: Props) {
  return (
    <>
      <Toast />
      <div className="mx-auto bg-slate-900 py-2">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="mx-auto py-2">
        {mobile}
        {desktop}
        <div className="container mx-auto py-4">{children}</div>
      </div>
    </>
  );
}
