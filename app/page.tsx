import Image from "next/image";

import { Button } from "./ui/Button";
import { NavBar } from "./ui/NavBar/NavBar";
import heroDesktop from "../public/hero-desktop.png";
import heroMobile from "../public/hero-mobile.png";

export default function Page() {
  return (
    <main className="container p-6">
      <h1>Home page</h1>
      <Button label="Click me" />
      <div className="mt-4">
        <Image
          src={heroDesktop}
          width={1000}
          height={760}
          alt="Desktop image"
          className="hidden sm:block"
        />
        <Image
          src={heroMobile}
          width={1000}
          height={760}
          alt="Mobile image"
          className="visible sm:hidden"
        />
      </div>
    </main>
  );
}
