import { lazy } from "react";

const HomeMDX = lazy(() => import("@pages/index.mdx"));

export const pages = [
  {
    name: "Home",
    route: "/",
    component: HomeMDX,
  },
];
