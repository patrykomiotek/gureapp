"use client";

import { Input } from "@/ui/Input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log({ searchParams: searchParams.get("query") });
    // console.log(event.target.value);

    const params = new URLSearchParams(searchParams);
    const value = event.target.value;
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    // console.log({ params: params.toString() });
    // ?query=event.target.value
    console.log(`${pathName}?${params.toString()}`);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <form>
        <Input
          label="Search"
          onChange={handleChange}
          defaultValue={searchParams.get("query") || ""}
        />
      </form>
    </div>
  );
};
