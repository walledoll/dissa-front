import type { RouteProps } from "react-router-dom";

import { StartSmthNewScreen } from "@screens/StartSmthNewScreen/ui/StartSmthNewScreen.tsx";

export enum AppRoutes {
  MAIN = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <StartSmthNewScreen />,
  },
};
