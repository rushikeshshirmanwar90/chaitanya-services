"use client";

import React from "react";
import type { SiteContentData } from "@/data/defaults";
import {
  TextField,
  TextAreaField,
  StringListEditor,
  SectionShell,
  ImageUploadField,
} from "./AdminField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICON_OPTIONS, getIcon } from "@/lib/icons";
import { Plus, Trash2 } from "lucide-react";

export interface SectionProps {
  content: SiteContentData;
  setContent: React.Dispatch<React.SetStateAction<SiteContentData>>;
  save: () => void;
  saving: boolean;
  status: string | null;
}

/* ------------------------------- Navbar ------------------------------- */
export function NavbarEditor({ content, setContent, save, saving, status }: SectionProps) {
  const nav = content.navbar;
  const setLinks = (links: typeof nav.links) =>
    setContent((p) => ({ ...p, navbar: { ...p.navbar, links } }));

  return (
    <SectionShell
      title="Navbar"
      description="Logo text and the top navigation links."
      onSave={save}
      saving={saving}
      status={status}
    >
      <TextField
        label="Logo text (used for screen readers / fallback)"
        value={nav.logoText}
        onChange={(v) => setContent((p) => ({ ...p, navbar: { ...p.navbar, logoText: v } }))}
      />
      <LinkListEditor label="Navigation links" links={nav.links} onChange={setLinks} />
    </SectionShell>
  );
}

/* -------------------------------- Hero -------------------------------- */
export function HeroEditor({ content, setContent, save, saving, status }: SectionProps) {
  const set = (patch: Partial<SiteContentData["hero"]>) =>
    setContent((p) => ({ ...p, hero: { ...p.hero, ...patch } }));
  const hero = content.hero;

  return (
    <SectionShell
      title="Hero Section"
      description="The big banner at the top of the home page."
      onSave={save}
      saving={saving}
      status={status}
    >
      <TextField label="Title" value={hero.title} onChange={(v) => set({ title: v })} />
      <TextAreaField label="Subtitle" value={hero.subtitle} onChange={(v) => set({ subtitle: v })} />
      <ImageUploadField
        label="Background image"
        value={hero.backgroundImage}
        onChange={(v) => set({ backgroundImage: v })}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <TextField label="Button text" value={hero.buttonText} onChange={(v) => set({ buttonText: v })} />
        <TextField label="Button link" value={hero.buttonLink} onChange={(v) => set({ buttonLink: v })} />
      </div>
    </SectionShell>
  );
}

/* -------------------------------- About ------------------------------- */
export function AboutEditor({ content, setContent, save, saving, status }: SectionProps) {
  const about = content.about;
  const set = (patch: Partial<SiteContentData["about"]>) =>
    setContent((p) => ({ ...p, about: { ...p.about, ...patch } }));

  const setStat = (i: number, key: "value" | "label", v: string) => {
    const statistics = about.statistics.map((s, idx) => (idx === i ? { ...s, [key]: v } : s));
    set({ statistics });
  };

  return (
    <SectionShell
      title="About Section"
      description="Company intro, image and the statistics row."
      onSave={save}
      saving={saving}
      status={status}
    >
      <TextField label="Heading" value={about.heading} onChange={(v) => set({ heading: v })} />
      <TextAreaField label="Paragraph 1" value={about.paragraph1} onChange={(v) => set({ paragraph1: v })} />
      <TextAreaField label="Paragraph 2" value={about.paragraph2} onChange={(v) => set({ paragraph2: v })} />
      <ImageUploadField
        label="Image"
        value={about.image}
        onChange={(v) => set({ image: v })}
      />

      <div className="space-y-2">
        <Label className="text-sm font-medium text-slate-700">Statistics</Label>
        {about.statistics.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <Input
              className="w-32"
              value={s.value}
              placeholder="10K+"
              onChange={(e) => setStat(i, "value", e.target.value)}
            />
            <Input
              value={s.label}
              placeholder="Happy Travelers"
              onChange={(e) => setStat(i, "label", e.target.value)}
            />
            <button
              type="button"
              className="p-1.5 text-red-400 hover:text-red-600"
              onClick={() => set({ statistics: about.statistics.filter((_, idx) => idx !== i) })}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => set({ statistics: [...about.statistics, { value: "", label: "" }] })}
        >
          <Plus className="w-4 h-4 mr-1" /> Add statistic
        </Button>
      </div>
    </SectionShell>
  );
}

/* -------------------------- Packages header --------------------------- */
export function PackagesHeaderEditor({ content, setContent, save, saving, status }: SectionProps) {
  const ph = content.packagesHeader;
  const set = (patch: Partial<SiteContentData["packagesHeader"]>) =>
    setContent((p) => ({ ...p, packagesHeader: { ...p.packagesHeader, ...patch } }));

  return (
    <SectionShell
      title="Packages Heading"
      description="The title shown above the package categories."
      onSave={save}
      saving={saving}
      status={status}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <TextField label="Title (first part)" value={ph.titleLine1} onChange={(v) => set({ titleLine1: v })} />
        <TextField label="Title (highlighted part)" value={ph.titleHighlight} onChange={(v) => set({ titleHighlight: v })} />
      </div>
      <TextAreaField label="Subtitle" value={ph.subtitle} onChange={(v) => set({ subtitle: v })} />
    </SectionShell>
  );
}

/* ------------------------------ Services ------------------------------ */
export function ServicesEditor({ content, setContent, save, saving, status }: SectionProps) {
  const svc = content.services;
  const set = (patch: Partial<SiteContentData["services"]>) =>
    setContent((p) => ({ ...p, services: { ...p.services, ...patch } }));

  const setItem = (i: number, patch: Partial<SiteContentData["services"]["items"][number]>) =>
    set({ items: svc.items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)) });

  return (
    <SectionShell
      title="Services Section"
      description="Heading and the service cards."
      onSave={save}
      saving={saving}
      status={status}
    >
      <TextField label="Title" value={svc.title} onChange={(v) => set({ title: v })} />
      <TextField label="Subtitle" value={svc.subtitle} onChange={(v) => set({ subtitle: v })} />

      <div className="space-y-4">
        <Label className="text-sm font-medium text-slate-700">Service cards</Label>
        {svc.items.map((it, i) => {
          const Icon = getIcon(it.icon);
          return (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-600">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-slate-700">Card {i + 1}</span>
                </div>
                <button
                  type="button"
                  className="p-1.5 text-red-400 hover:text-red-600"
                  onClick={() => set({ items: svc.items.filter((_, idx) => idx !== i) })}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-sm text-slate-600">Icon</Label>
                  <Select value={it.icon} onValueChange={(v) => setItem(i, { icon: v })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pick icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {ICON_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <TextField label="Title" value={it.title} onChange={(v) => setItem(i, { title: v })} />
              </div>
              <TextAreaField label="Description" rows={2} value={it.description} onChange={(v) => setItem(i, { description: v })} />
            </div>
          );
        })}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => set({ items: [...svc.items, { icon: "MapPin", title: "", description: "" }] })}
        >
          <Plus className="w-4 h-4 mr-1" /> Add service card
        </Button>
      </div>
    </SectionShell>
  );
}

/* ------------------------------ Contact ------------------------------- */
export function ContactEditor({ content, setContent, save, saving, status }: SectionProps) {
  const c = content.contact;
  const set = (patch: Partial<SiteContentData["contact"]>) =>
    setContent((p) => ({ ...p, contact: { ...p.contact, ...patch } }));

  return (
    <SectionShell
      title="Contact Section"
      description="Contact details, opening hours and links."
      onSave={save}
      saving={saving}
      status={status}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <TextField label="Title" value={c.title} onChange={(v) => set({ title: v })} />
        <TextField label="Subtitle" value={c.subtitle} onChange={(v) => set({ subtitle: v })} />
      </div>
      <TextField label="Phone" value={c.phone} onChange={(v) => set({ phone: v })} />
      <TextField label="Email" value={c.email} onChange={(v) => set({ email: v })} />
      <TextAreaField label="Address" rows={2} value={c.address} onChange={(v) => set({ address: v })} />
      <StringListEditor
        label="Opening hours (one line each)"
        items={c.openingHours}
        onChange={(openingHours) => set({ openingHours })}
        placeholder="Monday-Saturday : 9AM to 8PM"
      />
      <TextField label="Facebook URL" value={c.facebookUrl} onChange={(v) => set({ facebookUrl: v })} />
      <div className="grid md:grid-cols-2 gap-4">
        <TextField label="Terms & Conditions link" value={c.termsLink} onChange={(v) => set({ termsLink: v })} />
        <TextField label="Privacy Policy link" value={c.privacyLink} onChange={(v) => set({ privacyLink: v })} />
      </div>
    </SectionShell>
  );
}

/* ------------------------------- Footer ------------------------------- */
export function FooterEditor({ content, setContent, save, saving, status }: SectionProps) {
  const f = content.footer;
  const set = (patch: Partial<SiteContentData["footer"]>) =>
    setContent((p) => ({ ...p, footer: { ...p.footer, ...patch } }));

  return (
    <SectionShell
      title="Footer"
      description="Company info and footer link columns."
      onSave={save}
      saving={saving}
      status={status}
    >
      <TextField label="Company name" value={f.companyName} onChange={(v) => set({ companyName: v })} />
      <TextAreaField label="Description" rows={2} value={f.description} onChange={(v) => set({ description: v })} />
      <TextField label="Copyright year" value={f.copyrightYear} onChange={(v) => set({ copyrightYear: v })} />
      <LinkListEditor label="Quick links" links={f.quickLinks} onChange={(quickLinks) => set({ quickLinks })} />
      <LinkListEditor label="Popular destinations" links={f.destinations} onChange={(destinations) => set({ destinations })} />
    </SectionShell>
  );
}

/* --------------------------- shared helpers --------------------------- */
function LinkListEditor({
  label,
  links,
  onChange,
}: {
  label: string;
  links: { label: string; href: string }[];
  onChange: (links: { label: string; href: string }[]) => void;
}) {
  const update = (i: number, key: "label" | "href", v: string) =>
    onChange(links.map((l, idx) => (idx === i ? { ...l, [key]: v } : l)));

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      {links.map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          <Input
            className="flex-1"
            value={l.label}
            placeholder="Label"
            onChange={(e) => update(i, "label", e.target.value)}
          />
          <Input
            className="flex-1"
            value={l.href}
            placeholder="/path or #anchor"
            onChange={(e) => update(i, "href", e.target.value)}
          />
          <button
            type="button"
            className="p-1.5 text-red-400 hover:text-red-600"
            onClick={() => onChange(links.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange([...links, { label: "", href: "" }])}
      >
        <Plus className="w-4 h-4 mr-1" /> Add link
      </Button>
    </div>
  );
}
