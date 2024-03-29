// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Button, NavBar } from "@ui";
import heroDesktop from "../../../public/hero-desktop.png";
import heroMobile from "../../../public/hero-mobile.png";

export default async function Page() {
  // const t = useTranslations("header");
  // const t = await getTranslations("header");

  return (
    <main className="container p-6">
      {/* <h1>Home page {t("title")}</h1> */}
      <h1>Home page</h1>
      <Button label="Click me" />
      <div className="mt-4">
        <Image
          src={heroDesktop}
          width={1000}
          height={760}
          alt="Desktop image"
          className="hidden sm:block"
          priority={true}
        />
        <Image
          src={heroMobile}
          width={1000}
          height={760}
          alt="Mobile image"
          className="visible sm:hidden"
          priority={true}
        />
      </div>
    </main>
  );
}
