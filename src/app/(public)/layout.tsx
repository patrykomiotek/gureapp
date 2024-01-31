import { headers } from "next/headers";

import { Toast, NavBar, ThemeContextProvider } from "@ui";

type Props = {
  children: React.ReactNode;
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  // admin: React.ReactNode;
};

export default function PublicLayout({ children, mobile, desktop }: Props) {
  const headersList = headers();
  const deviceHeader = headersList.get("x-device");

  // fetch customer name, customerRecord ect.

  return (
    <ThemeContextProvider initialValues={{ name: "Coca Cola", theme: "red" }}>
      <Toast />
      <div className="mx-auto bg-slate-900 py-2">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="mx-auto py-2">
        {deviceHeader === "mobile" ? mobile : desktop}
        <div className="container mx-auto py-4">{children}</div>
      </div>
    </ThemeContextProvider>
  );
}
