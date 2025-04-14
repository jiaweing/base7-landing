"use client";

import { analyticsConfig } from "@/lib/analytics-config";
import PlausibleProvider from "next-plausible";

export function PlausibleWrapper({ children }: { children: React.ReactNode }) {
  const { domain, customDomain, enabled } = analyticsConfig.plausible;

  return (
    <PlausibleProvider
      domain={domain}
      customDomain={customDomain}
      enabled={enabled}
      trackOutboundLinks
    >
      {children}
    </PlausibleProvider>
  );
}
