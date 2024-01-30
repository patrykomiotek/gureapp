import { inter } from "./ui/fonts";

import "./ui/global.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
