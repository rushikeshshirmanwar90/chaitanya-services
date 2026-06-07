"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextField, TextAreaField, StatusPill, SaveButton, ImageUploadField } from "./AdminField";
import { Plus, Trash2, Star } from "lucide-react";

interface ReviewItem {
  _id?: string;
  name: string;
  location: string;
  package: string;
  rating: number;
  review: string;
  image: string;
  order: number;
}

export default function ReviewsManager() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/review");
      setReviews(await res.json());
    } catch {
      setStatus("Error loading reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const setField = (i: number, patch: Partial<ReviewItem>) =>
    setReviews((prev) => prev.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));

  const saveReview = async (rev: ReviewItem, i: number) => {
    setSavingId(rev._id || `new-${i}`);
    setStatus(null);
    try {
      if (rev._id) {
        await fetch(`/api/review?id=${rev._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rev),
        });
      } else {
        const res = await fetch("/api/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rev),
        });
        if (!res.ok) throw new Error("could not create");
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

  const deleteReview = async (rev: ReviewItem, i: number) => {
    if (!rev._id) {
      setReviews((prev) => prev.filter((_, idx) => idx !== i));
      return;
    }
    if (!confirm(`Delete review by "${rev.name}"?`)) return;
    await fetch(`/api/review?id=${rev._id}`, { method: "DELETE" });
    await load();
  };

  const addReview = () => {
    setReviews((prev) => [
      ...prev,
      {
        name: "",
        location: "",
        package: "",
        rating: 5,
        review: "",
        image: "",
        order: prev.length,
      },
    ]);
  };

  if (loading) return <p className="text-slate-500">Loading reviews…</p>;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Testimonials shown in the Reviews section.
          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
        </p>
        <StatusPill status={status} />
      </div>

      {reviews.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <p className="text-sm text-slate-500">No reviews yet.</p>
        </div>
      )}

      {reviews.map((rev, i) => (
        <div key={rev._id || i} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              {rev.image ? (
                <img src={rev.image} alt="" className="h-10 w-10 rounded-full border border-slate-200 object-cover" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-400">
                  {(rev.name || "?").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="leading-tight">
                <span className="block font-semibold text-slate-800">{rev.name || "New review"}</span>
                <span className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-current" />
                  ))}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SaveButton
                size="sm"
                saving={savingId === (rev._id || `new-${i}`)}
                onClick={() => saveReview(rev, i)}
                label="Save"
              />
              <button
                type="button"
                className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                onClick={() => deleteReview(rev, i)}
                title="Delete review"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <TextField label="Name" value={rev.name} onChange={(v) => setField(i, { name: v })} />
            <TextField label="Location" value={rev.location} onChange={(v) => setField(i, { location: v })} />
            <TextField label="Package" value={rev.package} onChange={(v) => setField(i, { package: v })} />
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-gray-700">Rating (1-5)</Label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  min={1}
                  max={5}
                  className="w-24"
                  value={rev.rating}
                  onChange={(e) => setField(i, { rating: Math.max(1, Math.min(5, Number(e.target.value))) })}
                />
                <div className="flex">
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ImageUploadField label="Reviewer photo" compact value={rev.image} onChange={(v) => setField(i, { image: v })} />
          <TextAreaField label="Review text" value={rev.review} onChange={(v) => setField(i, { review: v })} />
        </div>
      ))}

      <Button type="button" variant="outline" onClick={addReview}>
        <Plus className="w-4 h-4 mr-1" /> Add review
      </Button>
    </div>
  );
}
