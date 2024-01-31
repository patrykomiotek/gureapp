"use client";

import { useEffect, useState } from "react";

const isClient = typeof window !== "undefined";

const getSize = () => ({
  x: isClient ? window.innerWidth : 0,
  y: isClient ? window.innerHeight : 0,
});

export const useViewPort = () => {
  const [size, setSize] = useState(getSize());

  const handleResize = () => {
    setSize(getSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
