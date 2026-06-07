"use client";

import { useEffect, useState } from "react";
import { defaultSiteContent, type SiteContentData } from "@/data/defaults";

// Module-level cache so multiple sections on the same page only fetch once.
let cache: SiteContentData | null = null;
let inflight: Promise<SiteContentData> | null = null;

async function fetchSiteContent(): Promise<SiteContentData> {
  if (cache) return cache;
  if (inflight) return inflight;

  inflight = fetch("/api/site-content")
    .then((res) => {
      if (!res.ok) throw new Error("failed to load site content");
      return res.json();
    })
    .then((data: SiteContentData) => {
      cache = data;
      return data;
    })
    .catch(() => defaultSiteContent)
    .finally(() => {
      inflight = null;
    });

  return inflight;
}

// Returns the live site content, falling back to the bundled defaults until the
// network request resolves (or if it fails). Public components use this so the
// site reflects whatever the admin has saved.
export function useSiteContent(): SiteContentData {
  const [content, setContent] = useState<SiteContentData>(
    cache || defaultSiteContent
  );

  useEffect(() => {
    let active = true;
    fetchSiteContent().then((data) => {
      if (active) setContent(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return content;
}
