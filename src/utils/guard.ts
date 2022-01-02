import React from "react";

export type GuardType = {
  guard: () => Promise<boolean>;
  onLose: () => React.ReactNode;
};

export const Guard = (component: React.ReactNode, guards: GuardType[]) => {
  (async () => {
    for (const guard of guards) {
      const isOk = await guard.guard();
      if (!isOk) return guard.onLose();
    }
  })();
  return component;
};
