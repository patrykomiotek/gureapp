import { NavBar } from "./ui/NavBar/NavBar";
import { inter } from "./ui/fonts";

import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="container">
          <NavBar />
        </div>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
