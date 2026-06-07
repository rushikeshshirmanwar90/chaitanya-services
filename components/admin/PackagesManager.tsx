"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextField, StringListEditor, StatusPill, SaveButton } from "./AdminField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, ChevronDown } from "lucide-react";

interface Category {
  _id?: string;
  key: string;
  name: string;
  color: string;
  order: number;
  trips: string[];
}

const COLOR_OPTIONS = [
  "bg-blue-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-indigo-500",
];

export default function PackagesManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const cid = (c: Category) => c._id || c.key;

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/package-category");
      setCategories(await res.json());
    } catch {
      setStatus("Error loading categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const setField = (i: number, patch: Partial<Category>) =>
    setCategories((prev) => prev.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));

  const saveCategory = async (cat: Category) => {
    setSavingId(cat._id || cat.key);
    setStatus(null);
    try {
      if (cat._id) {
        await fetch(`/api/package-category?id=${cat._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cat),
        });
      } else {
        const res = await fetch("/api/package-category", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cat),
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "could not create");
        }
      }
      setStatus("Saved");
      await load();
    } catch (e) {
      setStatus("Error: " + (e instanceof Error ? e.message : "save failed"));
    } finally {
      setSavingId(null);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const deleteCategory = async (cat: Category, i: number) => {
    if (!cat._id) {
      setCategories((prev) => prev.filter((_, idx) => idx !== i));
      return;
    }
    if (!confirm(`Delete category "${cat.name}"?`)) return;
    await fetch(`/api/package-category?id=${cat._id}`, { method: "DELETE" });
    await load();
  };

  const addCategory = () => {
    const key = `category-${Date.now()}`;
    setCategories((prev) => [
      ...prev,
      {
        key,
        name: "New Category",
        color: "bg-blue-500",
        order: prev.length,
        trips: [],
      },
    ]);
    // Auto-expand the new card so it's ready to edit.
    setExpanded((prev) => new Set(prev).add(key));
  };

  if (loading) return <p className="text-slate-500">Loading categories…</p>;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Manage trip categories and the trips inside each one.
          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            {categories.length} {categories.length === 1 ? "category" : "categories"}
          </span>
        </p>
        <div className="flex items-center gap-3">
          {categories.length > 0 && (
            <button
              type="button"
              onClick={() =>
                setExpanded((prev) =>
                  prev.size === categories.length
                    ? new Set()
                    : new Set(categories.map(cid))
                )
              }
              className="text-xs font-medium text-slate-500 hover:text-blue-600"
            >
              {expanded.size === categories.length ? "Collapse all" : "Expand all"}
            </button>
          )}
          <StatusPill status={status} />
        </div>
      </div>

      <Button type="button" variant="outline" className="w-full" onClick={addCategory}>
        <Plus className="w-4 h-4 mr-1" /> Add category
      </Button>

      {categories.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <p className="text-sm text-slate-500">No categories yet.</p>
        </div>
      )}

      {categories.map((cat, i) => {
        const isOpen = expanded.has(cid(cat));
        return (
        <div key={cat._id || cat.key} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
          <div className={`flex items-center justify-between gap-4 ${isOpen ? "border-b border-slate-100" : ""}`}>
            <button
              type="button"
              onClick={() => toggle(cid(cat))}
              className="flex flex-1 items-center gap-2.5 p-5 text-left"
              aria-expanded={isOpen}
            >
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
              <span className={`inline-block h-4 w-4 rounded-full ring-2 ring-white shadow ${cat.color}`} />
              <span className="font-semibold text-slate-800">{cat.name}</span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                {cat.trips.length} trips
              </span>
            </button>
            <div className="flex items-center gap-2 pr-5">
              <SaveButton
                size="sm"
                saving={savingId === (cat._id || cat.key)}
                onClick={() => saveCategory(cat)}
                label="Save"
              />
              <button
                type="button"
                className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                onClick={() => deleteCategory(cat, i)}
                title="Delete category"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {isOpen && (
          <div className="space-y-4 p-5">
          <div className="grid md:grid-cols-3 gap-3">
            <TextField label="Name" value={cat.name} onChange={(v) => setField(i, { name: v })} />
            <TextField label="Key (unique id)" value={cat.key} onChange={(v) => setField(i, { key: v })} />
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">Color</Label>
              <Select value={cat.color} onValueChange={(v) => setField(i, { color: v })}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COLOR_OPTIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      <span className="flex items-center gap-2">
                        <span className={`inline-block w-3 h-3 rounded-full ${c}`} />
                        {c.replace("bg-", "").replace("-500", "")}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">Display order</Label>
              <Input
                type="number"
                value={cat.order}
                onChange={(e) => setField(i, { order: Number(e.target.value) })}
              />
            </div>
          </div>

          <StringListEditor
            label="Trips"
            items={cat.trips}
            onChange={(trips) => setField(i, { trips })}
            placeholder="Trip name"
          />
          </div>
          )}
        </div>
        );
      })}
    </div>
  );
}
