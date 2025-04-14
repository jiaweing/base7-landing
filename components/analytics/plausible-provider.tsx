"use client";

import PlausibleProvider from "next-plausible";

export function PlausibleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="base07.com" customDomain="https://quasarite.com">
      {children}
    </PlausibleProvider>
  );
}
