"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@ui";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const [isStarted, setTransition] = useTransition();
  const searchFieldRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   searchFieldRef.current?.focus();
  // }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback((event) => {
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
      // setTransition(() => replace(`${pathName}?${params.toString()}`));
      replace(`${pathName}?${params.toString()}`);
    }, 400);

  return (
    <div>
      <form>
        <Input
          ref={searchFieldRef}
          label="Search"
          onChange={handleChange}
          // defaultValue={searchParams.get("query").toString() || ''}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </div>
  );
};
