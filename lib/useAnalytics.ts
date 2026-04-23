"use client";

import { useEffect } from "react";
import { initializeAnalytics, fireAppStoreClickEvent } from "./analytics";

/**
 * Initialize analytics and capture ad params on mount
 */
export function useAnalyticsInit(): void {
  useEffect(() => {
    initializeAnalytics();
  }, []);
}

/**
 * Fire app store click event
 */
export function useAppStoreClick(source?: string): () => void {
  return () => {
    fireAppStoreClickEvent(source);
  };
}
