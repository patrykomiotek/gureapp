import { Header } from "@ui";
// import { userAgent } from 'next/server';
import { headers } from "next/headers";

export default function AboutPage() {
  // const headersList = headers();
  // console.log(Object.fromEntries(headersList.entries()));

  return (
    <div>
      <Header>About</Header>
    </div>
  );
}
