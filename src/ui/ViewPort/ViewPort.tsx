"use client";

import { useViewPort } from "../hooks";

export const ViewPort = () => {
  const size = useViewPort();

  return (
    <div>
      x: {size.x} y: {size.y}
    </div>
  );
};
