"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleSingleImageUpload } from "@/lib/image-upload";
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Upload,
  ImagePlus,
} from "lucide-react";

// An animated success / error pill used for save feedback across the admin.
// Centralising it keeps the feedback language identical in every section.
export function StatusPill({ status }: { status: string | null }) {
  if (!status) return null;
  const isError = status.startsWith("Error");
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 animate-in fade-in slide-in-from-right-2 duration-300",
        isError
          ? "bg-red-50 text-red-700 ring-red-200"
          : "bg-emerald-50 text-emerald-700 ring-emerald-200"
      )}
    >
      {isError ? (
        <AlertCircle className="w-3.5 h-3.5" />
      ) : (
        <CheckCircle2 className="w-3.5 h-3.5" />
      )}
      {status}
    </span>
  );
}

// The primary "save" action, with a built-in spinner. Shared so every save
// button looks and behaves the same.
export function SaveButton({
  onClick,
  saving,
  label = "Save Changes",
  size,
}: {
  onClick: () => void;
  saving: boolean;
  label?: string;
  size?: "sm" | "default";
}) {
  return (
    <Button
      onClick={onClick}
      disabled={saving}
      size={size}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700"
    >
      {saving ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" /> Saving…
        </>
      ) : (
        label
      )}
    </Button>
  );
}

// A labelled single-line text field.
export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      <Input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// A labelled multi-line text field.
export function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      <Textarea
        value={value ?? ""}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// An image field that uploads the chosen file to Cloudinary and stores the
// resulting URL. Replaces the old "paste a link" input so editors can upload
// directly. Shows a live preview with hover-to-replace, plus a remove action.
export function ImageUploadField({
  label,
  value,
  onChange,
  hint = "PNG or JPG, up to ~10MB",
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
  compact?: boolean;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = React.useState(false);

  const pick = () => inputRef.current?.click();

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await handleSingleImageUpload(e, onChange, setUploading);
    // Reset so selecting the same file again still fires onChange.
    if (inputRef.current) inputRef.current.value = "";
  };

  const frame = compact ? "h-32 w-32" : "aspect-video w-full";

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-slate-700">{label}</Label>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs font-medium text-slate-400 transition-colors hover:text-red-600"
          >
            Remove
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFile}
      />

      {value ? (
        <div
          className={cn(
            "group relative overflow-hidden rounded-xl border border-slate-200",
            frame
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={pick}
            disabled={uploading}
            className="absolute inset-0 flex items-center justify-center gap-2 text-sm font-medium text-white opacity-0 transition-all group-hover:bg-slate-900/50 group-hover:opacity-100"
          >
            {uploading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Upload className="h-4 w-4" /> Replace
              </>
            )}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={pick}
          disabled={uploading}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/60 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/40 disabled:cursor-not-allowed disabled:opacity-70",
            frame,
            compact ? "p-2" : "px-4 py-8"
          )}
        >
          {uploading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
              {!compact && <span className="text-sm text-slate-500">Uploading…</span>}
            </>
          ) : (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ImagePlus className="h-5 w-5" />
              </span>
              {compact ? (
                <span className="text-xs font-medium text-slate-600">Upload</span>
              ) : (
                <>
                  <span className="text-sm font-medium text-slate-700">
                    Click to upload an image
                  </span>
                  <span className="text-xs text-slate-400">{hint}</span>
                </>
              )}
            </>
          )}
        </button>
      )}
    </div>
  );
}

// Edit a list of plain strings (add / remove / reorder).
export function StringListEditor({
  label,
  items,
  onChange,
  placeholder = "Enter value",
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  const update = (i: number, v: string) => {
    const next = [...items];
    next[i] = v;
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-medium text-slate-700">{label}</Label>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
          {items.length}
        </span>
      </div>
      <div className="space-y-2">
        {items.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 px-3 py-2.5 text-sm text-slate-400">
            No items yet — add one below.
          </p>
        )}
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/60 p-1.5 transition-colors hover:border-slate-300"
          >
            <span className="ml-1 w-5 shrink-0 text-center text-xs font-medium text-slate-400">
              {i + 1}
            </span>
            <Input
              className="border-transparent bg-white"
              value={item}
              placeholder={placeholder}
              onChange={(e) => update(i, e.target.value)}
            />
            <div className="flex shrink-0">
              <button
                type="button"
                onClick={() => move(i, -1)}
                className="rounded-md p-1.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                disabled={i === 0}
                title="Move up"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => move(i, 1)}
                className="rounded-md p-1.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                disabled={i === items.length - 1}
                title="Move down"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => remove(i)}
                className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                title="Remove"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Button type="button" variant="outline" size="sm" onClick={add}>
        <Plus className="w-4 h-4 mr-1" /> Add
      </Button>
    </div>
  );
}

// A card wrapper for one editable section, with a heading and save button.
export function SectionShell({
  title,
  description,
  children,
  onSave,
  saving,
  status,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  onSave: () => void;
  saving: boolean;
  status: string | null;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50/50 px-6 py-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          {description && (
            <p className="mt-0.5 text-sm text-slate-500">{description}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <StatusPill status={status} />
          <SaveButton onClick={onSave} saving={saving} />
        </div>
      </div>
      <div className="space-y-5 px-6 py-5">{children}</div>
    </div>
  );
}
