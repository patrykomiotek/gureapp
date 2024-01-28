import type { Preview } from "@storybook/react";

import "../app/ui/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms"],
        method: "numeric",
      },
    },
  },
};

export default preview;
