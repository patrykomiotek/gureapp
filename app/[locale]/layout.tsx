import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { inter } from "../ui/fonts";

import "../ui/global.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// TODO: not use if not needed
// const locales = ['en', 'de'];

// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
