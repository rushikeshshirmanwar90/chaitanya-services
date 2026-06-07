"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { defaultSiteContent, type SiteContentData } from "@/data/defaults";
import {
  NavbarEditor,
  HeroEditor,
  AboutEditor,
  PackagesHeaderEditor,
  ServicesEditor,
  ContactEditor,
  FooterEditor,
  type SectionProps,
} from "@/components/admin/SiteSections";
import PackagesManager from "@/components/admin/PackagesManager";
import ReviewsManager from "@/components/admin/ReviewsManager";
import LeadsManager from "@/components/admin/LeadsManager";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Info,
  Package,
  Wrench,
  Star,
  Phone,
  PanelBottom,
  Menu,
  Users,
  ExternalLink,
  LogOut,
} from "lucide-react";

type SectionKey =
  | "navbar"
  | "hero"
  | "about"
  | "packagesHeader"
  | "packages"
  | "services"
  | "reviews"
  | "contact"
  | "footer"
  | "leads";

type NavItem = { key: SectionKey; label: string; icon: React.ElementType };

// Grouping the navigation gives the sidebar a clear information hierarchy:
// editable page copy, the catalog the customer browses, and incoming data.
const NAV_GROUPS: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Content",
    items: [
      { key: "hero", label: "Hero", icon: ImageIcon },
      { key: "navbar", label: "Navbar", icon: Menu },
      { key: "about", label: "About", icon: Info },
      { key: "packagesHeader", label: "Packages Heading", icon: LayoutDashboard },
      { key: "services", label: "Services", icon: Wrench },
      { key: "contact", label: "Contact", icon: Phone },
      { key: "footer", label: "Footer", icon: PanelBottom },
    ],
  },
  {
    heading: "Catalog",
    items: [
      { key: "packages", label: "Package Categories", icon: Package },
      { key: "reviews", label: "Reviews", icon: Star },
    ],
  },
  {
    heading: "Customers",
    items: [{ key: "leads", label: "Leads", icon: Users }],
  },
];

const NAV: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);

export default function AdminPage() {
  const [content, setContent] = useState<SiteContentData>(defaultSiteContent);
  const [active, setActive] = useState<SectionKey>("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/site-content")
      .then((res) => res.json())
      .then((data) => {
        // Merge over defaults so any missing fields stay defined.
        setContent({ ...defaultSiteContent, ...data });
      })
      .catch(() => setStatus("Error loading content"))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const payload = {
        navbar: content.navbar,
        hero: content.hero,
        about: content.about,
        packagesHeader: content.packagesHeader,
        services: content.services,
        contact: content.contact,
        footer: content.footer,
      };
      const res = await fetch("/api/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("save failed");
      setStatus("Saved successfully");
    } catch {
      setStatus("Error: could not save");
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const logout = async () => {
    await fetch("/api/admin-login", { method: "DELETE" });
    window.location.href = "/admin/login";
  };

  const sectionProps: SectionProps = { content, setContent, save, saving, status };

  const renderSection = () => {
    switch (active) {
      case "navbar":
        return <NavbarEditor {...sectionProps} />;
      case "hero":
        return <HeroEditor {...sectionProps} />;
      case "about":
        return <AboutEditor {...sectionProps} />;
      case "packagesHeader":
        return <PackagesHeaderEditor {...sectionProps} />;
      case "services":
        return <ServicesEditor {...sectionProps} />;
      case "contact":
        return <ContactEditor {...sectionProps} />;
      case "footer":
        return <FooterEditor {...sectionProps} />;
      case "packages":
        return <PackagesManager />;
      case "reviews":
        return <ReviewsManager />;
      case "leads":
        return <LeadsManager />;
    }
  };

  const activeItem = NAV.find((n) => n.key === active);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar — frosted so content scrolls subtly beneath it */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <h1 className="text-base font-bold text-slate-900">
                Chaitanya Admin
              </h1>
              <p className="hidden text-xs text-slate-500 sm:block">
                Manage your website content
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 shadow-xs transition-colors hover:bg-slate-50 hover:text-blue-600"
            >
              View site <ExternalLink className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 shadow-xs transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-3 md:block">
          <nav className="space-y-4">
            {NAV_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {group.heading}
                </p>
                <div className="space-y-1">
                  {group.items.map(({ key, label, icon: Icon }) => {
                    const isActive = active === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "font-medium text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-blue-600" />
                        )}
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile nav */}
        <div className="w-full px-4 pt-4 md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {NAV.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <main className="w-full flex-1 px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto max-w-4xl">
            {/* Section heading for orientation */}
            {activeItem && (
              <div className="mb-5 flex items-center gap-2.5">
                <activeItem.icon className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {activeItem.label}
                </h2>
              </div>
            )}
            {loading ? <SectionSkeleton /> : renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

// Lightweight skeleton shown while the initial content request resolves —
// communicates structure instantly instead of a bare "Loading…" line.
function SectionSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
        <div className="space-y-2">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-56 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="h-9 w-28 animate-pulse rounded-md bg-slate-200" />
      </div>
      <div className="space-y-5 px-6 py-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
            <div className="h-9 w-full animate-pulse rounded-md bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
